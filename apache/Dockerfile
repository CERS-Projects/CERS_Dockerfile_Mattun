FROM httpd:2.4

# Apache設定ファイルをコピー
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Reactのビルド成果物をコピー
COPY html/ /usr/local/apache2/htdocs/
