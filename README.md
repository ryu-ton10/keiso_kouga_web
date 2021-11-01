# 珪素光画サークル紹介 Web サイト

[![Netlify Status](https://api.netlify.com/api/v1/badges/910d3297-df4a-4148-a656-bc28f0d265a5/deploy-status)](https://app.netlify.com/sites/keiso-kouga/deploys)

https://keiso-kouga.netlify.app/

## 主な技術スタック

* Typescript v4.2.4
* React v17.0.2
* yarn v1.22.4

## ローカル環境の立ち上げ

以下のコマンドを実行し、`localhost:3000` へアクセスする

```
$ yarn start
```

`yarn`が無い場合は、以下の手順でインストールを行う

```
$ npm install -g yarn
```

## ブランチ戦略

```
master <--- develop
```

## ディレクトリ構成

```
.
├── README.md
├── package.json
├── public => indexファイルや写真データなど
│   ├── Gallery
│   ├── Icons
│   ├── MajorWorks
│   ├── Publishments
│   ├── assocbutt_or_detail.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── @types
│   ├── assets
│   ├── components => 各pageで再利用されるDOMを格納
│   ├── data
│   ├── index.css
│   ├── index.tsx
│   ├── pages => SPAだが各セクションをpageとして分割している
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── tsconfig.json
└── yarn.lock
```

## デプロイ方法

デプロイ先は [netlify](https://www.netlify.com/) を採用している。

基本的に `develop` から `master` へのプルリクエストを Open した時点で netlify 上で preview サイトが閲覧出来るようになっている。

そのため、本番への反映前に preview を見て問題が無いことを確認する。

また、 `yarn build` などのデプロイコマンドは `master` への merge の時点で netlify 上で実行されるため

利用者側は `master` へのプルリクエストを merge するだけで良い。
