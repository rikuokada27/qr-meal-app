# ベースイメージを指定
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY . .

# ビルドを実行
RUN npm run build

# アプリを起動
CMD ["npm", "start"]

# ポート番号を公開
EXPOSE 3000
