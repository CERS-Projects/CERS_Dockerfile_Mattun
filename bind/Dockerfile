# ベースイメージ: ISC BINDの公式イメージ
FROM isc/bind9:9.18

# 設定ファイルとゾーンファイルをコンテナ内の所定のパスにコピー
# BINDの設定ファイルは /etc/bind/ に置くのが一般的
COPY named.conf.options /etc/bind/named.conf.options
COPY named.conf.local /etc/bind/named.conf.local
COPY db.my-app.local /etc/bind/db.my-app.local

# BINDの起動コマンドはベースイメージに定義されているため、CMDは不要
# サービスを起動するために /usr/sbin/named -g -c /etc/bind/named.conf.options などを実行します
# -g はログを標準出力に送るオプション