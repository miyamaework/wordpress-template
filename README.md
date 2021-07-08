# wp-templete-base

## 構成

## ディレクトリ構成

```
├ scripts
├ packages
│ ├ eslint-config-pj // プロジェクト共通ESLint設定
│ ├ eslint-config-pj-react // プロジェクト共通ESLint設定(react)
│ ├ stylelint-config-pj // プロジェクト共通StyleLint設定
│ ├ wp-plugins // テーマ開発環境
│ └ wp-theme // プラグイン開発環境
└ wordpress // 以下のディレクトリは基本操作しない
  └ volumes - ⚠ このディレクリ上でテーマ・プラグイン開発は行わない。`/packages/wp-*`で開発する
    ├ app - WordPress本体
    └ sql - 開発環境用のSQLダンプファイル
```

## Production Build

```shell
# 1. 依存パッケージをインストール
$ npm install

# 2. テーマをビルド
$ npm run wp-theme:build

# 3. プラグインをビルド
$ npm run wp-plugins:build
```
## Development

```shell
# 1. 依存パッケージをインストール
$ npm install

# 2. WordPressを立ち上げる
$ docker compose up -d
> http://localhost:9001

# 3. テーマ開発
$ npm run wp-theme:dev
> http://localhost:9000

# 3. プラグイン開発の場合
$ npm run wp-plugins:dev

# 5. 開発完了後(必要であればデータベースをダンプする)
$ npm run wp-dump-dev

# 6. 終了
$ docker compose down
```

### 開発環境

```
# ライブリロードサーバー(テーマ開発用)
- http://localhost:9000

# WordPress
- http://localhost:9001/
- http://localhost:9001/wp-admin/
- - `user: admin`
- - `password: password`

# mailHog
- http://localhost:8025/
```
