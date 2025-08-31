# Stage 1: ビルドステージ (Mavenを使ってJARファイルをビルド)
FROM maven:3.9.6-eclipse-temurin-17-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# Mavenの依存関係キャッシュのためにpom.xmlだけ先にコピー
COPY pom.xml .
RUN mvn dependency:go-offline -B

# ソースコードをコピー
COPY src ./src

# アプリケーションをパッケージング（テストはスキップ）
RUN mvn clean package -DskipTests

# Stage 2: 実行ステージ (ビルドされたJARファイルを実行)
FROM eclipse-temurin:17-jre-alpine

# 作業ディレクトリを設定
WORKDIR /app

# ビルドステージからJARファイルをコピー
COPY --from=builder /app/target/*.jar app.jar

# Spring Bootアプリケーションのポートを公開 (docker-compose.ymlでマッピング)
EXPOSE 8080

# アプリケーションの起動コマンド
ENTRYPOINT ["java", "-jar", "app.jar"]