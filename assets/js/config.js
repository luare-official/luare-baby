/**
 * Luare baby 公式サイト 設定ファイル
 * 後から各種URLや会社情報を変更する場合は、このファイルを編集してください。
 */

const LUARE_CONFIG = {
  // ブランド情報
  brand: {
    name: "Luare baby",
    fullName: "ルアレベビー",
    domain: "baby.luare-consulting.com",
    tagline: "かわいさと使いやすさを、毎日の食卓に。",
  },

  // 商品情報
  product: {
    name: "Luare baby Silicone Bib",
    nameJapanese: "シリコンビブ",
    price: 2200,
    priceFormatted: "2,200円（税込）",
    designs: [
      { id: "bear", name: "クマ柄", englishName: "Bear" },
      { id: "rabbit", name: "ウサギ柄", englishName: "Rabbit" }
    ],
    // 一般消費者向け購入リンク (現時点ではAmazon)
    // 自社ECや他モールへ変更する場合はここを書き換えてください
    purchaseUrl: "https://www.amazon.co.jp/Luare-%E3%83%AB%E3%82%A2%E3%83%AC%E3%80%90%E3%83%89%E3%82%A4%E3%83%84%E5%AE%89%E5%85%A8%E5%9F%BA%E6%BA%96%E5%90%88%E6%A0%BC%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%91-%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%83%93%E3%83%96-%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4-%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3/dp/B0DRGWNV1Y?th=1",
  },

  // 問い合わせ・フォーム設定
  urls: {
    // ブランド公式メールアドレス
    email: "luarebaby@luare-consulting.com",

    // 卸取引（法人・店舗様向け）お問合せフォーム URL
    businessContactForm: "https://docs.google.com/forms/d/e/1FAIpQLScrBAoYuO1JAtrjkQ5HbtF66qOEiT8IQh1QDYThbLdnRyGLGw/viewform",

    // 一般のお客様向けお問合せ mailto リンク（メールアプリ起動）
    customerContactForm: "mailto:luarebaby@luare-consulting.com?subject=Luare%20baby%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B",
  },

  // 取扱店（WHERE TO BUY）一覧設定
  stockists: [
    {
      name: "Amazon Official Store",
      type: "Online Store",
      description: "公式オンライン販売",
      url: "https://www.amazon.co.jp/Luare-%E3%83%AB%E3%82%A2%E3%83%AC%E3%80%90%E3%83%89%E3%82%A4%E3%83%84%E5%AE%89%E5%85%A8%E5%9F%BA%E6%BA%96%E5%90%88%E6%A0%BC%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%91-%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%83%93%E3%83%96-%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4-%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3/dp/B0DRGWNV1Y?th=1",
      isPrimary: true,
    },
    /* 
    // 将来的に追加される取扱店例：
    {
      name: "楽天市場",
      type: "Online Store",
      description: "公式ショップ（準備中）",
      url: "#",
      isPrimary: false,
    },
    */
  ],

  // 運営会社情報（株式会社Luare Consulting）
  company: {
    name: "株式会社Luare Consulting",
    nameEnglish: "Luare Consulting Inc.",
    businesses: [
      "ベビー・キッズ用品の企画・開発・販売・卸売",
      "ブランド事業の企画・運営",
      "海外企業の日本市場参入・事業立ち上げ支援",
      "会計・経営管理領域におけるコンサルティング",
      "内部統制・業務プロセス構築支援"
    ],
    // 以下の情報は確定後に設定してください
    location: "〒220-0004 神奈川県横浜市西区北幸二丁目10番48号 むつみビル3階",
    representative: "代表取締役 小原 麻香",
    established: "（後日更新予定）",
  }
};

// グローバル展開
if (typeof window !== 'undefined') {
  window.LUARE_CONFIG = LUARE_CONFIG;
}
