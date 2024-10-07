# ベースイメージを指定
FROM ruby:3.2.5

ENV RAILS_ENV=production

# 作業ディレクトリを設定
WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Gemfileをコピー
COPY Gemfile Gemfile.lock ./

# 依存関係をインストール
RUN bundle install

# アプリのソースコードをコピー
COPY . .

# データベースの作成（必要に応じて）
# RUN rails db:create

# アプリを起動
# CMD ["rails", "server", "-b", "0.0.0.0"]

# ポート番号を公開
EXPOSE 3000

COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh", "/start.sh"]