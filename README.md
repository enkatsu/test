test
# Installation

```bash
npm install --save sqlite3 sequelize sequelize-cli
```

## sqlite3

sqlite3を扱うためのパッケージ

## Sequelize

sqlite3やMySQLに対応したORM

## DB Settings

```bash
node_modules/.bin/sequelize init
```

`config/config.js` : DBの設定
`migrations` : マイグレーション
`models` : モデル
`seeders` : データ生成用スクリプト

`config/config.js` の `development.dialect` と　`test.dialect` を `sqlite` に変更

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

# Create Model

名前，誕生日，国名コードをもつユーザを作成
以下のコマンドでマイグレーションとモデルが生成される

```bash
node_modules/.bin/sequelize model:create --name User --underscored --attributes name:string,birth:date,country_code:integer
```

# Migration

以下のコマンドでマイグレーションが実行されて，テーブルが作成される

```bash
node_modules/.bin/sequelize db:migrate --env development
```

---

# MEMO

# Rollback

以下のコマンドでマイグレーションがロールバックされて以前のDBに戻る

```bash
node_modules/.bin/sequelize db:migrate:undo --env development
```

# Generate migration

以下のコマンドでマイグレーションを追加できる

```bash
node_modules/.bin/sequelize migration:generate --name user
```

# MEMO

- https://qiita.com/cobot00/items/0bc0da1095e09bcd0d5f



# 今週の宿題

Itemsテーブルを作る
ItemsにCRUDを行うAPIを作る
テーブル名: Items
フィールド: name:string,price:integer
