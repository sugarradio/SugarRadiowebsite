export type Locale = "es" | "ja" | "zh" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.catalog": "Catalogo",
    "nav.artists": "Artistas",
    "nav.community": "Comunidad",
    "nav.about": "Acerca de",

    // Hero
    "hero.badge": "En vivo ahora",
    "hero.title.1": "Descubre musica indie poco conocida ",
    "hero.title.highlight": "de cada parte ",
    "hero.title.2": "del mundo!",
    "hero.description":
      "Remixes exclusivos y tracks frescos provenientes de Music163/NetEase, no disponibles en otras plataformas. Curamos lo mejor del underground para ti.",
    "hero.cta.discord": "Unete a Discord",
    "hero.cta.youtube": "Suscribete en YouTube",
    "hero.stat.tracks": "Tracks curados",
    "hero.stat.tracks.count": "40+",
    "hero.stat.tracks.more": "y mas proximamente",
    "hero.stat.artists": "Artistas",
    "hero.stat.artists.count": "6+",
    "hero.stat.artists.more": "y mas proximamente",
    "hero.stat.community": "Comunidad activa",
    "hero.video.caption": "Descubre tu proximo ritmo!",

    // Catalog
    "catalog.badge": "Catalogo",
    "catalog.title": "Tracks Destacados",
    "catalog.coming_soon": "Proximamente",
    "catalog.coming_soon_desc":
      "Estamos trabajando en nuestro catalogo. Pronto podras explorar todos los tracks curados por Sugar Radio.",
    "catalog.count": "40+ tracks y contando...",

    // Artists
    "artists.badge": "Artistas",
    "artists.title": "Artistas Destacados",
    "artists.coming_soon": "Proximamente",
    "artists.coming_soon_desc":
      "Pronto podras conocer a todos los artistas detras de la musica que compartimos.",
    "artists.count": "6+ artistas y contando...",

    // Community
    "community.badge": "Comunidad",
    "community.title": "Unete a nuestra comunidad",
    "community.description":
      "Nuestro servidor de Discord es el corazon de Sugar Radio. Descarga tracks, descubre artistas y conecta con fans de todo el mundo.",
    "community.benefit.downloads": "Descargas HQ",
    "community.benefit.downloads_desc":
      "Accede a todas las tracks en alta calidad FLAC y WAV, sin compresion.",
    "community.benefit.chat": "Chat en vivo",
    "community.benefit.chat_desc":
      "Conecta con otros fans de musica indie y comparte descubrimientos.",
    "community.benefit.info": "Info de artistas",
    "community.benefit.info_desc":
      "Obtiene contexto y detalles exclusivos de cada artista y sus tracks.",
    "community.benefit.early": "Acceso anticipado",
    "community.benefit.early_desc":
      "Se el primero en escuchar nuevos remixes y tracks antes de su publicacion.",
    "community.cta.active": "Comunidad activa",
    "community.cta.title": "Unete al servidor de Discord",
    "community.cta.desc":
      "Descargas en alta calidad, informacion de artistas, chats tematicos y una comunidad apasionada por la musica indie. Totalmente gratis.",
    "community.cta.button": "Unirse a Discord",
    "community.bot.badge": "Proximamente",
    "community.bot.title": "Bot de streaming 24/7",
    "community.bot.desc":
      "Estamos trabajando en un bot de streaming continuo al estilo lofi girl, con musica curada de nuestro catalogo.",

    // About
    "about.badge": "Acerca de",
    "about.title": "Sobre Sugar Radio",
    "about.coming_soon":
      "Proximamente mas informacion sobre el Sugar Team!",
    "about.contact":
      "Para contacto, sugerencias o solicitudes de retiro:",
    "about.contact_link": "contactanos en Discord",

    // Footer
    "footer.desc":
      "Descubriendo musica indie poco conocida de cada parte del mundo.",
    "footer.nav": "Navegacion",
    "footer.social": "Social",
    "footer.rights":
      "Sugar Radio. Todos los derechos reservados. Contenido compartido con fines de descubrimiento y uso personal.",
  },
  ja: {
    // Navbar
    "nav.home": "ホーム",
    "nav.catalog": "カタログ",
    "nav.artists": "アーティスト",
    "nav.community": "コミュニティ",
    "nav.about": "紹介",

    // Hero
    "hero.badge": "ライブ配信中",
    "hero.title.1": "世界中のあまり知られていない",
    "hero.title.highlight": "インディー音楽",
    "hero.title.2": "を発見!",
    "hero.description":
      "Music163/NetEaseからの独占リミックスと新鮮なトラック。他のプラットフォームでは入手できません。アンダーグラウンドの最高をお届けします。",
    "hero.cta.discord": "Discordに参加",
    "hero.cta.youtube": "YouTubeで購読",
    "hero.stat.tracks": "厳選トラック",
    "hero.stat.tracks.count": "40+",
    "hero.stat.tracks.more": "さらに追加予定",
    "hero.stat.artists": "アーティスト",
    "hero.stat.artists.count": "6+",
    "hero.stat.artists.more": "さらに追加予定",
    "hero.stat.community": "アクティブコミュニティ",
    "hero.video.caption": "次のリズムを見つけよう!",

    // Catalog
    "catalog.badge": "カタログ",
    "catalog.title": "注目のトラック",
    "catalog.coming_soon": "近日公開",
    "catalog.coming_soon_desc":
      "カタログを準備中です。まもなくSugar Radioが厳選したすべてのトラックを探索できます。",
    "catalog.count": "40+トラック、さらに増加中...",

    // Artists
    "artists.badge": "アーティスト",
    "artists.title": "注目のアーティスト",
    "artists.coming_soon": "近日公開",
    "artists.coming_soon_desc":
      "まもなく私たちが共有する音楽の背後にいるすべてのアーティストをご紹介します。",
    "artists.count": "6+アーティスト、さらに増加中...",

    // Community
    "community.badge": "コミュニティ",
    "community.title": "コミュニティに参加",
    "community.description":
      "DiscordサーバーはSugar Radioの中心です。トラックをダウンロードし、アーティストを発見し、世界中のファンとつながりましょう。",
    "community.benefit.downloads": "HQダウンロード",
    "community.benefit.downloads_desc":
      "すべてのトラックを高品質FLACとWAVで圧縮なしでアクセス。",
    "community.benefit.chat": "ライブチャット",
    "community.benefit.chat_desc":
      "インディー音楽のファンとつながり、発見を共有。",
    "community.benefit.info": "アーティスト情報",
    "community.benefit.info_desc":
      "各アーティストとそのトラックの独占的な情報とコンテキストを入手。",
    "community.benefit.early": "先行アクセス",
    "community.benefit.early_desc":
      "新しいリミックスやトラックをリリース前にいち早く聴く。",
    "community.cta.active": "アクティブコミュニティ",
    "community.cta.title": "Discordサーバーに参加",
    "community.cta.desc":
      "高品質ダウンロード、アーティスト情報、テーマ別チャット、インディー音楽に情熱的なコミュニティ。完全無料。",
    "community.cta.button": "Discordに参加",
    "community.bot.badge": "近日公開",
    "community.bot.title": "24/7ストリーミングBot",
    "community.bot.desc":
      "lofi girlスタイルの継続的なストリーミングBotを開発中。カタログから厳選した音楽をお届けします。",

    // About
    "about.badge": "紹介",
    "about.title": "Sugar Radioについて",
    "about.coming_soon":
      "Sugar Teamについての詳細情報は近日公開予定!",
    "about.contact": "連絡、提案、削除リクエスト：",
    "about.contact_link": "Discordでお問い合わせ",

    // Footer
    "footer.desc":
      "世界中のあまり知られていないインディー音楽を発見。",
    "footer.nav": "ナビゲーション",
    "footer.social": "ソーシャル",
    "footer.rights":
      "Sugar Radio. 全著作権所有。発見と個人使用目的で共有されたコンテンツ。",
  },
  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.catalog": "目录",
    "nav.artists": "艺术家",
    "nav.community": "社区",
    "nav.about": "关于",

    // Hero
    "hero.badge": "正在直播",
    "hero.title.1": "发现来自世界各地的",
    "hero.title.highlight": "鲜为人知的独立",
    "hero.title.2": "音乐!",
    "hero.description":
      "来自Music163/网易云的独家混音和新鲜曲目，其他平台无法获取。我们为你精选地下音乐的精华。",
    "hero.cta.discord": "加入Discord",
    "hero.cta.youtube": "订阅YouTube",
    "hero.stat.tracks": "精选曲目",
    "hero.stat.tracks.count": "40+",
    "hero.stat.tracks.more": "更多即将推出",
    "hero.stat.artists": "艺术家",
    "hero.stat.artists.count": "6+",
    "hero.stat.artists.more": "更多即将推出",
    "hero.stat.community": "活跃社区",
    "hero.video.caption": "发现你的下一个节奏!",

    // Catalog
    "catalog.badge": "目录",
    "catalog.title": "精选曲目",
    "catalog.coming_soon": "即将推出",
    "catalog.coming_soon_desc":
      "我们正在准备目录。很快你就能探索Sugar Radio精选的所有曲目。",
    "catalog.count": "40+曲目，持续增加中...",

    // Artists
    "artists.badge": "艺术家",
    "artists.title": "精选艺术家",
    "artists.coming_soon": "即将推出",
    "artists.coming_soon_desc":
      "很快你就能认识我们分享的音乐背后的所有艺术家。",
    "artists.count": "6+艺术家，持续增加中...",

    // Community
    "community.badge": "社区",
    "community.title": "加入我们的社区",
    "community.description":
      "Discord服务器是Sugar Radio的核心。下载曲目、发现艺术家，与全球粉丝建立联系。",
    "community.benefit.downloads": "高品质下载",
    "community.benefit.downloads_desc":
      "以高品质FLAC和WAV格式访问所有曲目，无压缩。",
    "community.benefit.chat": "实时聊天",
    "community.benefit.chat_desc":
      "与其他独立音乐爱好者交流，分享发现。",
    "community.benefit.info": "艺术家信息",
    "community.benefit.info_desc":
      "获取每位艺术家及其曲目的独家背景和详细信息。",
    "community.benefit.early": "抢先体验",
    "community.benefit.early_desc":
      "在发布之前率先收听新混音和曲目。",
    "community.cta.active": "活跃社区",
    "community.cta.title": "加入Discord服务器",
    "community.cta.desc":
      "高品质下载、艺术家信息、主题聊天以及对独立音乐充满热情的社区。完全免费。",
    "community.cta.button": "加入Discord",
    "community.bot.badge": "即将推出",
    "community.bot.title": "24/7流媒体机器人",
    "community.bot.desc":
      "我们正在开发lofi girl风格的持续流媒体机器人，从我们的目录中精选音乐。",

    // About
    "about.badge": "关于",
    "about.title": "关于Sugar Radio",
    "about.coming_soon":
      "关于Sugar Team的更多信息即将推出!",
    "about.contact": "联系、建议或删除请求：",
    "about.contact_link": "在Discord联系我们",

    // Footer
    "footer.desc": "为世界发现来自各地的鲜为人知的独立音乐。",
    "footer.nav": "导航",
    "footer.social": "社交",
    "footer.rights":
      "Sugar Radio。保留所有权利。内容以发现和个人使用为目的共享。",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.artists": "Artists",
    "nav.community": "Community",
    "nav.about": "About",

    // Hero
    "hero.badge": "Live now",
    "hero.title.1": "Discover rare indie music ",
    "hero.title.highlight": "from every part ",
    "hero.title.2": "of the world!",
    "hero.description":
      "Exclusive remixes and fresh tracks from Music163/NetEase, not available on other platforms. We curate the best of the underground for you.",
    "hero.cta.discord": "Join Discord",
    "hero.cta.youtube": "Subscribe on YouTube",
    "hero.stat.tracks": "Curated tracks",
    "hero.stat.tracks.count": "40+",
    "hero.stat.tracks.more": "and more coming soon",
    "hero.stat.artists": "Artists",
    "hero.stat.artists.count": "6+",
    "hero.stat.artists.more": "and more coming soon",
    "hero.stat.community": "Active community",
    "hero.video.caption": "Discover your next beat!",

    // Catalog
    "catalog.badge": "Catalog",
    "catalog.title": "Featured Tracks",
    "catalog.coming_soon": "Coming Soon",
    "catalog.coming_soon_desc":
      "We're working on our catalog. Soon you'll be able to explore all tracks curated by Sugar Radio.",
    "catalog.count": "40+ tracks and counting...",

    // Artists
    "artists.badge": "Artists",
    "artists.title": "Featured Artists",
    "artists.coming_soon": "Coming Soon",
    "artists.coming_soon_desc":
      "Soon you'll be able to meet all the artists behind the music we share.",
    "artists.count": "6+ artists and counting...",

    // Community
    "community.badge": "Community",
    "community.title": "Join our community",
    "community.description":
      "Our Discord server is the heart of Sugar Radio. Download tracks, discover artists, and connect with fans worldwide.",
    "community.benefit.downloads": "HQ Downloads",
    "community.benefit.downloads_desc":
      "Access all tracks in high quality FLAC and WAV, no compression.",
    "community.benefit.chat": "Live Chat",
    "community.benefit.chat_desc":
      "Connect with other indie music fans and share discoveries.",
    "community.benefit.info": "Artist Info",
    "community.benefit.info_desc":
      "Get exclusive context and details about each artist and their tracks.",
    "community.benefit.early": "Early Access",
    "community.benefit.early_desc":
      "Be the first to listen to new remixes and tracks before release.",
    "community.cta.active": "Active community",
    "community.cta.title": "Join the Discord server",
    "community.cta.desc":
      "High quality downloads, artist info, themed chats, and a community passionate about indie music. Totally free.",
    "community.cta.button": "Join Discord",
    "community.bot.badge": "Coming Soon",
    "community.bot.title": "24/7 Streaming Bot",
    "community.bot.desc":
      "We're building a continuous streaming bot, lofi girl style, with music curated from our catalog.",

    // About
    "about.badge": "About",
    "about.title": "About Sugar Radio",
    "about.coming_soon":
      "More information about the Sugar Team coming soon!",
    "about.contact": "For contact, suggestions, or removal requests:",
    "about.contact_link": "contact us on Discord",

    // Footer
    "footer.desc":
      "Discovering rare indie music from every part of the world.",
    "footer.nav": "Navigation",
    "footer.social": "Social",
    "footer.rights":
      "Sugar Radio. All rights reserved. Content shared for discovery and personal use.",
  },
};

export const languageNames: Record<Locale, string> = {
  es: "Espanol",
  ja: "日本語",
  zh: "中文",
  en: "English (USA)",
};

export const languageFlags: Record<Locale, string> = {
  es: "ES",
  ja: "JP",
  zh: "CN",
  en: "US",
};
