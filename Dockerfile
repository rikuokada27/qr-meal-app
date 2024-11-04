# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーして依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# アプリケーションのソースコードをすべてコピー
COPY . .

# .envファイルをコンテナにコピー
COPY .env .env

# 本番環境のビルド
RUN npm run build

# コンテナのポートを公開
EXPOSE 3000

# コンテナ起動時に環境変数をロードしてアプリケーションを実行
CMD ["npm", "start"]