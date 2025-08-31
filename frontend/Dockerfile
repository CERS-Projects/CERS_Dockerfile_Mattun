# 開発モード用 Dockerfile for React Frontend
# Node.jsのLTS版イメージをベースにする
FROM node:22-alpine 

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json (または yarn.lock) を先にコピーし、
# 依存関係をインストールします。これはDockerのキャッシュを効果的に利用するためです。
# package.json の変更がなければ、npm install は再実行されず、ビルド時間が短縮されます。
COPY package*.json ./
RUN npm install axios && \
    npm install && \

# アプリケーションのソースコード全体をコピーします。
# 開発中は docker-compose.yml の volumes 設定によって、
# ホスト側の ./frontend ディレクトリの内容が /app にマウントされるため、
# この COPY 命令でコピーされたファイルは、コンテナ実行時にはホスト側のファイルで上書きされます。
# しかし、イメージをビルドする際には必要なので、この行は残しておきます。
COPY . .

# Vite開発サーバーのデフォルトポート (通常5173) を公開
# Viteの設定でポートを変更している場合は、それに合わせてください。
EXPOSE 5173

# Vite開発サーバーを起動するコマンド
CMD ["npm", "run", "dev"]