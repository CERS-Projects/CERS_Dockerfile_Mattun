import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// export default は、このファイルが外部から読み込まれたときに、この設定が使われるという意味
export default defineConfig({
  // react() を追加することで、ViteがReactのコード（JSXなど）を正しく処理できるようになる
  plugins: [react()],
  // 4. server: 開発サーバー（npm run devで動くサーバー）の設定
  server:{
    // host: true: Dockerコンテナや別のマシンから、この開発サーバーにアクセスできるようにする
    // これがないと、コンテナ内部からしかアクセスできない場合がある
    host:true,
    port:5137,
     // proxy: 他のサーバーへのリクエストを転送するための設定（ここが重要！）
    proxy: {
      // '/api': このパスにマッチするリクエストを転送する
      // 例: あなたのReactコードが fetch('/api/users') と呼び出した場合、これがマッチする
      '/api': {
         // target: 'http://backend:8080': 転送先のURL
        // 'backend' は docker-compose.yml で定義したSpring Bootサービスの「名前」
        // Dockerのネットワーク内で、この名前がSpring BootコンテナのIPアドレスに解決される
        target: 'http://localhost:8080',
        // changeOrigin: true: 転送する際のリクエストヘッダーのOrigin（発信元）を、
        // ターゲットサーバー（Spring Boot）のURLに合わせて変更する
        // これがないと、CORSエラー（ほかのサーバのリソースを使おうとしているエラー）になることが多い
        // 下２行はほかのサーバのリソースを使うことを許可する為の設定
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
      // ↓ほかのAPIPathの記入場所下↓
        // '/another-api': {}
      // ↑　　　　ここまで　　　　　↑
    }
  },
});