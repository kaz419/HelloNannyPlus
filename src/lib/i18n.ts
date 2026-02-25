export type Locale = "en" | "ja" | "zh" | "th";

export const locales: Locale[] = ["en", "ja", "zh", "th"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
  th: "ไทย",
};

const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      reviews: "Reviews",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Now Available in Bangkok",
      title1: "Find Your Perfect",
      titleHighlight: "Nanny & Maid",
      title2: "By Yourself",
      subtitle:
        "Search, chat, video call, and hire — all in one app. No middleman, no waiting. Just ฿1,000/month.",
      cta: "Start Free Trial",
      ctaSub: "No credit card required",
      stat1Value: "1,200+",
      stat1Label: "Verified Nannies",
      stat2Value: "4.9",
      stat2Label: "Average Rating",
      stat3Value: "24h",
      stat3Label: "Avg. Match Time",
    },
    features: {
      sectionTag: "Why HelloNanny+",
      title: "Everything You Need in One App",
      subtitle: "No more agencies, no more waiting. Take control of finding your ideal helper.",
      search: {
        title: "Advanced Search",
        desc: "Filter by language, skills, experience, nationality, salary range, availability and more. Find exactly who you need.",
      },
      distance: {
        title: "Distance View",
        desc: "See how far each candidate is from your home in real-time. Find nannies nearby for faster start.",
      },
      chat: {
        title: "In-App Chat",
        desc: "Message candidates directly within the app. Ask questions, share details, and build rapport before meeting.",
      },
      video: {
        title: "Video Calls",
        desc: "Conduct face-to-face video interviews right in the app. No need for third-party tools.",
      },
      offer: {
        title: "Send Offers",
        desc: "Found the right match? Send an offer with your terms directly through the app. Simple and transparent.",
      },
      review: {
        title: "Reviews & Ratings",
        desc: "Read verified reviews from other families. Share your experience to help the community.",
      },
      safety: {
        title: "Verified Profiles",
        desc: "All candidates undergo ID verification and background checks. Your family's safety comes first.",
      },
      price: {
        title: "Only ฿1,000/month",
        desc: "Unlimited searches, chats, and video calls. No hidden fees, no per-match charges. Cancel anytime.",
      },
    },
    howItWorks: {
      sectionTag: "Simple Process",
      title: "Get Started in 3 Steps",
      step1: {
        title: "Create Your Account",
        desc: "Sign up in under 2 minutes. Tell us what you're looking for.",
      },
      step2: {
        title: "Search & Connect",
        desc: "Browse candidates, chat, and video call to find your perfect match.",
      },
      step3: {
        title: "Send an Offer",
        desc: "Found the one? Send your offer and start working together.",
      },
    },
    pricing: {
      sectionTag: "Simple Pricing",
      title: "One Plan. Everything Included.",
      subtitle: "No hidden fees. No per-match charges. Just one affordable monthly fee.",
      price: "1,000",
      currency: "THB",
      period: "/month",
      planName: "HelloNanny+ Premium",
      features: [
        "Unlimited candidate search",
        "Advanced filters & distance view",
        "Unlimited in-app chat",
        "Video call interviews",
        "Send unlimited offers",
        "Read & write reviews",
        "Verified candidate profiles",
        "Priority customer support",
      ],
      cta: "Start Free Trial",
      trial: "7-day free trial. Cancel anytime.",
      compare: "Compare: Agency fees are ฿4,000–8,000 per match",
    },
    reviews: {
      sectionTag: "Trusted by Families",
      title: "What Families Say",
      items: [
        {
          name: "Sarah M.",
          family: "American Family",
          text: "Found an amazing nanny within 2 days. The video call feature was a game-changer — we could interview from home.",
          rating: 5,
        },
        {
          name: "Yuki T.",
          family: "Japanese Family",
          text: "So much easier than going through an agency. I loved being able to search by Japanese-speaking ability.",
          rating: 5,
        },
        {
          name: "Wei L.",
          family: "Chinese Family",
          text: "The distance feature helped us find a nanny who lives just 2km away. She's been wonderful for 6 months now.",
          rating: 5,
        },
        {
          name: "Somchai P.",
          family: "Thai Family",
          text: "฿1,000 a month is incredible value. We used to pay ฿8,000 each time through an agency.",
          rating: 4,
        },
      ],
    },
    cta: {
      title: "Ready to Find Your Perfect Helper?",
      subtitle: "Join thousands of families in Bangkok who trust HelloNanny+",
      button: "Get Started Now",
      note: "Free 7-day trial. No credit card required.",
    },
    footer: {
      description:
        "The smarter way to find nannies and maids in Bangkok. Search, connect, and hire — all in one app.",
      service: "Service",
      company: "Company",
      legal: "Legal",
      links: {
        features: "Features",
        pricing: "Pricing",
        howItWorks: "How It Works",
        about: "About Us",
        blog: "Blog",
        contact: "Contact",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        harassment: "Customer Harassment Policy",
      },
      operated: "Operated by VANNESS ASIA CO., LTD.",
      rights: "All rights reserved.",
    },
  },
  ja: {
    nav: {
      features: "特徴",
      howItWorks: "ご利用方法",
      pricing: "料金",
      reviews: "お客様の声",
      getStarted: "始める",
    },
    hero: {
      badge: "バンコクで利用可能",
      title1: "理想の",
      titleHighlight: "ナニー＆メイド",
      title2: "を自分で見つけよう",
      subtitle:
        "検索、チャット、ビデオ通話、採用まで — すべて一つのアプリで。仲介なし、待ち時間なし。月額たった1,000バーツ。",
      cta: "無料トライアルを始める",
      ctaSub: "クレジットカード不要",
      stat1Value: "1,200+",
      stat1Label: "認証済みナニー",
      stat2Value: "4.9",
      stat2Label: "平均評価",
      stat3Value: "24h",
      stat3Label: "平均マッチ時間",
    },
    features: {
      sectionTag: "HelloNanny+の特徴",
      title: "必要なすべてが一つのアプリに",
      subtitle: "エージェント不要、待ち時間なし。理想のヘルパー探しを自分でコントロール。",
      search: {
        title: "詳細検索",
        desc: "言語、スキル、経験、国籍、給与範囲など、細かい条件で検索。必要な人材を確実に見つけられます。",
      },
      distance: {
        title: "距離表示",
        desc: "候補者があなたの自宅からどのくらい離れているかリアルタイムで確認。近くのナニーを見つけてすぐにスタート。",
      },
      chat: {
        title: "アプリ内チャット",
        desc: "アプリ内で候補者と直接メッセージ。質問、詳細の共有、面接前のコミュニケーションが簡単に。",
      },
      video: {
        title: "ビデオ通話",
        desc: "アプリ内でそのままビデオ面接。外部ツールは不要です。",
      },
      offer: {
        title: "オファー送信",
        desc: "理想の人が見つかったら、条件を含むオファーをアプリから直接送信。シンプルで透明性のあるプロセス。",
      },
      review: {
        title: "レビュー＆評価",
        desc: "他のご家庭からの認証済みレビューを閲覧。あなたの体験も共有してコミュニティに貢献。",
      },
      safety: {
        title: "認証済みプロフィール",
        desc: "すべての候補者がID確認とバックグラウンドチェックを受けています。ご家族の安全が最優先。",
      },
      price: {
        title: "月額たった1,000バーツ",
        desc: "検索、チャット、ビデオ通話が無制限。隠れた料金なし、マッチごとの課金なし。いつでも解約可能。",
      },
    },
    howItWorks: {
      sectionTag: "シンプルなプロセス",
      title: "3ステップで始めよう",
      step1: {
        title: "アカウント作成",
        desc: "2分以内で登録完了。探している条件を教えてください。",
      },
      step2: {
        title: "検索＆つながる",
        desc: "候補者を閲覧、チャット、ビデオ通話で理想のマッチを見つけましょう。",
      },
      step3: {
        title: "オファーを送る",
        desc: "理想の人が見つかったら、オファーを送って一緒に働き始めましょう。",
      },
    },
    pricing: {
      sectionTag: "シンプルな料金",
      title: "1プラン。すべて込み。",
      subtitle: "隠れた料金なし。マッチごとの課金なし。手頃な月額料金のみ。",
      price: "1,000",
      currency: "THB",
      period: "/月",
      planName: "HelloNanny+ プレミアム",
      features: [
        "候補者検索が無制限",
        "詳細フィルター＆距離表示",
        "アプリ内チャット無制限",
        "ビデオ通話面接",
        "オファー送信無制限",
        "レビューの閲覧＆投稿",
        "認証済み候補者プロフィール",
        "優先カスタマーサポート",
      ],
      cta: "無料トライアルを始める",
      trial: "7日間無料トライアル。いつでも解約可能。",
      compare: "比較：エージェント手数料は1回4,000〜8,000バーツ",
    },
    reviews: {
      sectionTag: "ご家庭の信頼",
      title: "お客様の声",
      items: [
        {
          name: "Sarah M.",
          family: "アメリカ人ファミリー",
          text: "2日で素晴らしいナニーが見つかりました。ビデオ通話機能が決め手でした。自宅から面接できるのは本当に便利。",
          rating: 5,
        },
        {
          name: "田中 由紀",
          family: "日本人ファミリー",
          text: "エージェントを通すよりずっと簡単。日本語が話せるナニーを検索できるのが最高でした。",
          rating: 5,
        },
        {
          name: "Wei L.",
          family: "中国人ファミリー",
          text: "距離表示機能のおかげで、自宅からわずか2kmのナニーが見つかりました。もう6ヶ月間素晴らしい関係が続いています。",
          rating: 5,
        },
        {
          name: "Somchai P.",
          family: "タイ人ファミリー",
          text: "月1,000バーツは驚くほどお得。以前はエージェントに毎回8,000バーツ払っていました。",
          rating: 4,
        },
      ],
    },
    cta: {
      title: "理想のヘルパーを見つける準備はできましたか？",
      subtitle: "バンコクの数千のご家庭がHelloNanny+を信頼しています",
      button: "今すぐ始める",
      note: "7日間無料トライアル。クレジットカード不要。",
    },
    footer: {
      description:
        "バンコクでナニー・メイドを見つけるスマートな方法。検索、つながる、採用する — すべて一つのアプリで。",
      service: "サービス",
      company: "会社情報",
      legal: "法務",
      links: {
        features: "特徴",
        pricing: "料金",
        howItWorks: "ご利用方法",
        about: "会社概要",
        blog: "ブログ",
        contact: "お問い合わせ",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        harassment: "カスタマーハラスメントポリシー",
      },
      operated: "運営：VANNESS ASIA CO., LTD.",
      rights: "All rights reserved.",
    },
  },
  zh: {
    nav: {
      features: "功能特点",
      howItWorks: "使用方法",
      pricing: "价格",
      reviews: "用户评价",
      getStarted: "开始使用",
    },
    hero: {
      badge: "曼谷可用",
      title1: "自己寻找理想的",
      titleHighlight: "保姆和女佣",
      title2: "",
      subtitle:
        "搜索、聊天、视频通话、录用 — 一切尽在一个应用中。无中介，无等待。每月仅需1,000泰铢。",
      cta: "开始免费试用",
      ctaSub: "无需信用卡",
      stat1Value: "1,200+",
      stat1Label: "认证保姆",
      stat2Value: "4.9",
      stat2Label: "平均评分",
      stat3Value: "24h",
      stat3Label: "平均匹配时间",
    },
    features: {
      sectionTag: "为什么选择HelloNanny+",
      title: "一个应用，满足所有需求",
      subtitle: "不再需要中介，不再等待。自己掌控寻找理想帮手的过程。",
      search: {
        title: "高级搜索",
        desc: "按语言、技能、经验、国籍、薪资范围等精确筛选。准确找到您需要的人才。",
      },
      distance: {
        title: "距离显示",
        desc: "实时查看候选人与您家的距离。找到附近的保姆，更快开始。",
      },
      chat: {
        title: "应用内聊天",
        desc: "在应用内直接与候选人沟通。提问、分享细节，面试前建立联系。",
      },
      video: {
        title: "视频通话",
        desc: "在应用内直接进行视频面试。无需第三方工具。",
      },
      offer: {
        title: "发送录用通知",
        desc: "找到合适人选？通过应用直接发送包含条件的录用通知。简单透明。",
      },
      review: {
        title: "评价与评分",
        desc: "阅读其他家庭的认证评价。分享您的经验帮助社区。",
      },
      safety: {
        title: "认证档案",
        desc: "所有候选人均经过身份验证和背景调查。您家人的安全是第一位的。",
      },
      price: {
        title: "每月仅需1,000泰铢",
        desc: "无限搜索、聊天和视频通话。无隐藏费用，无按匹配收费。随时取消。",
      },
    },
    howItWorks: {
      sectionTag: "简单流程",
      title: "3步开始",
      step1: {
        title: "创建账户",
        desc: "2分钟内完成注册。告诉我们您在寻找什么。",
      },
      step2: {
        title: "搜索与联系",
        desc: "浏览候选人，聊天，视频通话，找到完美匹配。",
      },
      step3: {
        title: "发送录用通知",
        desc: "找到理想人选？发送录用通知，开始合作。",
      },
    },
    pricing: {
      sectionTag: "简单定价",
      title: "一个方案。全部包含。",
      subtitle: "无隐藏费用。无按匹配收费。只需一个实惠的月费。",
      price: "1,000",
      currency: "THB",
      period: "/月",
      planName: "HelloNanny+ 高级版",
      features: [
        "无限候选人搜索",
        "高级筛选和距离显示",
        "无限应用内聊天",
        "视频通话面试",
        "无限发送录用通知",
        "阅读和撰写评价",
        "认证候选人档案",
        "优先客户支持",
      ],
      cta: "开始免费试用",
      trial: "7天免费试用。随时取消。",
      compare: "对比：中介费每次4,000-8,000泰铢",
    },
    reviews: {
      sectionTag: "家庭信赖",
      title: "用户评价",
      items: [
        {
          name: "Sarah M.",
          family: "美国家庭",
          text: "2天内就找到了出色的保姆。视频通话功能太棒了，可以在家里面试。",
          rating: 5,
        },
        {
          name: "Yuki T.",
          family: "日本家庭",
          text: "比通过中介简单多了。能按日语能力搜索保姆真的很棒。",
          rating: 5,
        },
        {
          name: "李伟",
          family: "中国家庭",
          text: "距离功能帮我们找到了仅2公里远的保姆。她已经工作6个月了，非常满意。",
          rating: 5,
        },
        {
          name: "Somchai P.",
          family: "泰国家庭",
          text: "每月1,000泰铢性价比太高了。以前每次通过中介都要付8,000泰铢。",
          rating: 4,
        },
      ],
    },
    cta: {
      title: "准备好找到理想帮手了吗？",
      subtitle: "曼谷数千家庭信赖HelloNanny+",
      button: "立即开始",
      note: "7天免费试用。无需信用卡。",
    },
    footer: {
      description: "在曼谷寻找保姆和女佣的更聪明方式。搜索、联系、录用 — 一切在一个应用中。",
      service: "服务",
      company: "公司",
      legal: "法律",
      links: {
        features: "功能特点",
        pricing: "价格",
        howItWorks: "使用方法",
        about: "关于我们",
        blog: "博客",
        contact: "联系我们",
        terms: "服务条款",
        privacy: "隐私政策",
        harassment: "客户骚扰政策",
      },
      operated: "由 VANNESS ASIA CO., LTD. 运营",
      rights: "版权所有。",
    },
  },
  th: {
    nav: {
      features: "ฟีเจอร์",
      howItWorks: "วิธีใช้งาน",
      pricing: "ราคา",
      reviews: "รีวิว",
      getStarted: "เริ่มต้น",
    },
    hero: {
      badge: "ให้บริการในกรุงเทพฯ",
      title1: "ค้นหา",
      titleHighlight: "พี่เลี้ยงและแม่บ้าน",
      title2: "ในอุดมคติด้วยตัวเอง",
      subtitle:
        "ค้นหา แชท วิดีโอคอล และจ้างงาน — ทั้งหมดในแอปเดียว ไม่ต้องผ่านนายหน้า ไม่ต้องรอ เพียง ฿1,000/เดือน",
      cta: "เริ่มทดลองใช้ฟรี",
      ctaSub: "ไม่ต้องใช้บัตรเครดิต",
      stat1Value: "1,200+",
      stat1Label: "พี่เลี้ยงที่ยืนยันแล้ว",
      stat2Value: "4.9",
      stat2Label: "คะแนนเฉลี่ย",
      stat3Value: "24h",
      stat3Label: "เวลาจับคู่เฉลี่ย",
    },
    features: {
      sectionTag: "ทำไมต้อง HelloNanny+",
      title: "ทุกอย่างที่คุณต้องการในแอปเดียว",
      subtitle: "ไม่ต้องพึ่งเอเจนซี่ ไม่ต้องรอ ควบคุมการค้นหาผู้ช่วยในอุดมคติด้วยตัวเอง",
      search: {
        title: "ค้นหาขั้นสูง",
        desc: "กรองตามภาษา ทักษะ ประสบการณ์ สัญชาติ ช่วงเงินเดือน และอื่นๆ ค้นหาคนที่คุณต้องการได้อย่างแม่นยำ",
      },
      distance: {
        title: "แสดงระยะทาง",
        desc: "ดูระยะทางจากบ้านคุณถึงผู้สมัครแบบเรียลไทม์ หาพี่เลี้ยงใกล้บ้านเริ่มงานได้เร็วขึ้น",
      },
      chat: {
        title: "แชทในแอป",
        desc: "ส่งข้อความถึงผู้สมัครโดยตรงในแอป ถามคำถาม แชร์รายละเอียด และสร้างความสัมพันธ์ก่อนพบกัน",
      },
      video: {
        title: "วิดีโอคอล",
        desc: "สัมภาษณ์แบบเห็นหน้าผ่านวิดีโอคอลในแอป ไม่จำเป็นต้องใช้เครื่องมืออื่น",
      },
      offer: {
        title: "ส่งข้อเสนอ",
        desc: "พบคนที่ใช่แล้ว? ส่งข้อเสนอพร้อมเงื่อนไขผ่านแอปโดยตรง เรียบง่ายและโปร่งใส",
      },
      review: {
        title: "รีวิวและคะแนน",
        desc: "อ่านรีวิวที่ยืนยันจากครอบครัวอื่น แบ่งปันประสบการณ์ของคุณเพื่อช่วยชุมชน",
      },
      safety: {
        title: "โปรไฟล์ที่ยืนยันแล้ว",
        desc: "ผู้สมัครทุกคนผ่านการตรวจสอบตัวตนและประวัติ ความปลอดภัยของครอบครัวคุณมาก่อน",
      },
      price: {
        title: "เพียง ฿1,000/เดือน",
        desc: "ค้นหา แชท และวิดีโอคอลไม่จำกัด ไม่มีค่าใช้จ่ายแอบแฝง ไม่คิดค่าต่อการจับคู่ ยกเลิกได้ตลอดเวลา",
      },
    },
    howItWorks: {
      sectionTag: "ขั้นตอนง่ายๆ",
      title: "เริ่มต้นใน 3 ขั้นตอน",
      step1: {
        title: "สร้างบัญชี",
        desc: "สมัครภายใน 2 นาที บอกเราว่าคุณกำลังมองหาอะไร",
      },
      step2: {
        title: "ค้นหาและเชื่อมต่อ",
        desc: "ดูผู้สมัคร แชท และวิดีโอคอลเพื่อหาคนที่ใช่",
      },
      step3: {
        title: "ส่งข้อเสนอ",
        desc: "พบคนที่ใช่แล้ว? ส่งข้อเสนอและเริ่มทำงานร่วมกัน",
      },
    },
    pricing: {
      sectionTag: "ราคาเรียบง่าย",
      title: "แพ็คเกจเดียว ครบทุกอย่าง",
      subtitle: "ไม่มีค่าใช้จ่ายแอบแฝง ไม่คิดค่าต่อการจับคู่ จ่ายแค่ค่ารายเดือนที่คุ้มค่า",
      price: "1,000",
      currency: "THB",
      period: "/เดือน",
      planName: "HelloNanny+ พรีเมียม",
      features: [
        "ค้นหาผู้สมัครไม่จำกัด",
        "ฟิลเตอร์ขั้นสูงและแสดงระยะทาง",
        "แชทในแอปไม่จำกัด",
        "สัมภาษณ์ผ่านวิดีโอคอล",
        "ส่งข้อเสนอไม่จำกัด",
        "อ่านและเขียนรีวิว",
        "โปรไฟล์ผู้สมัครที่ยืนยันแล้ว",
        "บริการลูกค้าแบบพิเศษ",
      ],
      cta: "เริ่มทดลองใช้ฟรี",
      trial: "ทดลองใช้ฟรี 7 วัน ยกเลิกได้ตลอดเวลา",
      compare: "เปรียบเทียบ: ค่าเอเจนซี่ 4,000-8,000 บาทต่อครั้ง",
    },
    reviews: {
      sectionTag: "ครอบครัวไว้วางใจ",
      title: "ครอบครัวว่าอย่างไร",
      items: [
        {
          name: "Sarah M.",
          family: "ครอบครัวอเมริกัน",
          text: "หาพี่เลี้ยงดีเยี่ยมได้ภายใน 2 วัน ฟีเจอร์วิดีโอคอลเปลี่ยนเกมเลย สัมภาษณ์จากบ้านได้",
          rating: 5,
        },
        {
          name: "Yuki T.",
          family: "ครอบครัวญี่ปุ่น",
          text: "ง่ายกว่าผ่านเอเจนซี่มาก ชอบที่ค้นหาตามความสามารถภาษาญี่ปุ่นได้",
          rating: 5,
        },
        {
          name: "Wei L.",
          family: "ครอบครัวจีน",
          text: "ฟีเจอร์ระยะทางช่วยหาพี่เลี้ยงที่อยู่ห่างแค่ 2 กม. ทำงานด้วยกันมา 6 เดือนแล้ว",
          rating: 5,
        },
        {
          name: "สมชาย พ.",
          family: "ครอบครัวไทย",
          text: "เดือนละ 1,000 บาทคุ้มค่ามาก เมื่อก่อนต้องจ่ายเอเจนซี่ครั้งละ 8,000 บาท",
          rating: 4,
        },
      ],
    },
    cta: {
      title: "พร้อมหาผู้ช่วยในอุดมคติหรือยัง?",
      subtitle: "ร่วมกับครอบครัวนับพันในกรุงเทพฯ ที่ไว้วางใจ HelloNanny+",
      button: "เริ่มต้นเลย",
      note: "ทดลองใช้ฟรี 7 วัน ไม่ต้องใช้บัตรเครดิต",
    },
    footer: {
      description:
        "วิธีที่ฉลาดกว่าในการหาพี่เลี้ยงและแม่บ้านในกรุงเทพฯ ค้นหา เชื่อมต่อ จ้างงาน ทั้งหมดในแอปเดียว",
      service: "บริการ",
      company: "บริษัท",
      legal: "กฎหมาย",
      links: {
        features: "ฟีเจอร์",
        pricing: "ราคา",
        howItWorks: "วิธีใช้งาน",
        about: "เกี่ยวกับเรา",
        blog: "บล็อก",
        contact: "ติดต่อเรา",
        terms: "ข้อกำหนดการใช้บริการ",
        privacy: "นโยบายความเป็นส่วนตัว",
        harassment: "นโยบายการล่วงละเมิดลูกค้า",
      },
      operated: "ดำเนินงานโดย VANNESS ASIA CO., LTD.",
      rights: "สงวนลิขสิทธิ์",
    },
  },
} as const;

export type Translations = typeof translations.en;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
