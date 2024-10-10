require "test_helper"

class Api::V1::PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one) # テストデータのセットアップ
  end

  test "should get index" do
    get api_v1_posts_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_post_url(@post)
    assert_response :success
  end

  test "should get create" do
    get api_v1_post_url(@post)
    assert_response :success
  end

  test "should get update" do
    get api_v1_post_url(@post)
    assert_response :success
  end

  test "should get destroy" do
    assert_difference('Post.count', -1) do
      delete api_v1_post_url(@post)
    end
    assert_response 204
  end
end
