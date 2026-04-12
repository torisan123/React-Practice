# My Trip Planner

旅行計画を管理するシンプルなReactアプリケーションです。都市と日付を入力して滞在計画を作成し、各滞在にホテルを追加・編集・削除できます。

## 目的

本プロジェクトは、Reactのコンポーネント設計および状態管理の理解を深めることを目的としたプロトタイプです。

## 機能

- **滞在計画の作成**: 都市名とチェックイン/チェックアウト日付を入力して旅行計画を作成
- **ホテル管理**: 各滞在にホテルを追加し、名前とチェックイン/チェックアウト日付を設定
- **データの永続化**: localStorageを使用してブラウザにデータを保存
- **レスポンシブデザイン**: Tailwind CSSを使用したモダンなUI

## 技術スタック

- **React** 19.2.4 - UIライブラリ
- **Vite** - ビルドツールと開発サーバー
- **Tailwind CSS** 4.2.2 - CSSフレームワーク
- **ESLint** - コード品質チェック

## インストールと実行

### 前提条件

- Node.js (バージョン 16 以上)
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd my-trip-planner

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてアプリケーションを表示します。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
src/
├── components/
│   ├── hotel/
│   │   ├── HotelCard.jsx      # 個別のホテル表示・編集
│   │   ├── HotelForm.jsx      # ホテル追加・編集フォーム
│   │   ├── HotelList.jsx      # ホテル一覧
│   │   └── HotelSection.jsx   # ホテル管理セクション
│   └── stay/
│       ├── StayForm.jsx       # 滞在編集フォーム
│       ├── StayHeader.jsx     # 滞在ヘッダー
│       └── StaySection.jsx    # 滞在セクション
├── styles/
│   └── buttonStyles.js        # ボタンスタイル定義
├── App.jsx                    # メインアプリケーション
├── main.jsx                   # エントリーポイント
└── index.css                  # グローバルスタイル
```

## 使用方法

1. **滞在計画の追加**: 画面上部のフォームに都市名と日付を入力して「Add」ボタンをクリック
2. **ホテルの追加**: 各滞在セクションの「+ Add Hotel」ボタンをクリックしてホテル情報を入力
3. **ホテルの編集**: ホテルカードの「Edit」ボタンをクリックして情報を更新
4. **データの削除**: 「Delete」ボタンでホテルや滞在を削除
