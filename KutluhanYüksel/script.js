const STORAGE_KEYS = {
  posts: "portfolio_posts",
  auth: "portfolio_admin_auth",
  adminRateLimit: "portfolio_admin_rate_limit"
};
const LEGACY_POSTS_KEY = "posts";

const DEMO_AUTH = {
  username: "admin",
  password: "12345"
};

const FALLBACK_COVER = "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop";
/** Yüklenen kapak dosyası üst sınırı (localStorage şişmesini önlemek için). */
const MAX_COVER_UPLOAD_BYTES = 2 * 1024 * 1024;

const INITIAL_POSTS = [
  {
    id: "seed-1",
    title: "Boşanma Davalarında Sıklıkla Yapılan Usul Hataları",
    category: "Aile Hukuku",
    date: "2026-03-24",
    cover: "https://images.unsplash.com/photo-1528747045269-390fe33c19d8?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Dilekçe içeriği, delil sunum zamanı ve geçici tedbir taleplerindeki eksikler davanın seyrini doğrudan etkiler. Bu yazıda, boşanma sürecinde en sık karşılaşılan usul hatalarını ve hak kaybını önlemek için uygulanabilir kontrol adımlarını ele alıyoruz."
  },
  {
    id: "seed-2",
    title: "Ticari Sözleşmelerde Riskli Maddeler Nasıl Yönetilir",
    category: "Ticaret Hukuku",
    date: "2026-03-18",
    cover: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Yetki, cezai şart, sorumluluk sınırı ve fesih mekanizmaları doğru kurgulanmadığında ciddi ticari kayıplar oluşur. Sözleşme müzakeresinde taraf dengesini koruyan ve uyuşmazlık çıkmadan çözüm üreten temel madde yapılarını pratik örneklerle açıklıyoruz."
  },
  {
    id: "seed-4",
    title: "Soruşturma Aşamasında Susma Hakkı ve Müdafi Desteği",
    category: "Ceza Hukuku",
    date: "2026-03-05",
    cover: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    excerpt: "İlk ifade aşamasında verilen beyanlar dosyanın bütününe yön verebilir. Susma hakkının ne zaman ve nasıl kullanılacağı, müdafi huzurunda ifade vermenin avantajı ve delil çelişkilerinde izlenecek temel savunma çizgisini özetliyoruz."
  },
  {
    id: "seed-5",
    title: "Tapu İptal ve Tescil Davalarında İspat Yükünün Dağılımı",
    category: "Gayrimenkul Hukuku",
    date: "2026-02-27",
    cover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Muvazaa, vekaletin kötüye kullanılması ve muris muvazaası iddialarında ispat yükü kritik önemdedir. Bu yazıda tapu iptal ve tescil davalarında delil hiyerarşisini, tanık anlatımlarının sınırlarını ve stratejik dosya kurgusunu inceliyoruz."
  },
  {
    id: "seed-6",
    title: "Kira Uyuşmazlıklarında Tahliye Süreci Adım Adım",
    category: "Gayrimenkul Hukuku",
    date: "2026-02-19",
    cover: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop",
    excerpt: "İhtar, arabuluculuk ve dava aşamalarında yapılan usul hataları süreci uzatabilir. Kiraya veren ve kiracı açısından tahliye sürecinde dikkat edilmesi gereken süre, belge ve bildirim adımlarını sade bir yol haritasıyla anlatıyoruz."
  },
  {
    id: "seed-7",
    title: "Aile Konutu Şerhi Neden Önemlidir",
    category: "Aile Hukuku",
    date: "2026-02-11",
    cover: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Aile konutu şerhi, taşınmaz üzerindeki tasarruf işlemlerinde eşin rıza güvencesini güçlendirir. Şerhin hangi durumlarda talep edileceği, hangi belgelerin gerekeceği ve uygulamada en sık karşılaşılan itiraz başlıklarını ele alıyoruz."
  },
  {
    id: "seed-8",
    title: "Hizmet Sözleşmelerinde Cezai Şart Nasıl Yazılmalı",
    category: "Sozlesmeler Hukuku",
    date: "2026-02-03",
    cover: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Aşırı yüksek veya muğlak cezai şart düzenlemeleri, uyuşmazlık halinde uygulanabilirlik sorunu yaratabilir. Taraflar arasında dengeyi koruyan, ölçülü ve ispatlanabilir ihlal senaryolarına dayanan cezai şart metni için kritik yazım ilkelerini paylaşıyoruz."
  },
  {
    id: "seed-9",
    title: "Arabuluculukta Anlaşma Belgesinin İcra Kabiliyeti",
    category: "Ticaret Hukuku",
    date: "2026-01-28",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Arabuluculuk sonundaki anlaşma belgesinin ilam niteliğinde sayılabilmesi belirli şartlara bağlıdır. Uygulamada en çok tartışılan onay, imza ve kapsam meselelerini; tahsilat ve icra aşamasına etkileriyle birlikte değerlendiriyoruz."
  },
  {
    id: "seed-10",
    title: "İşverenler İçin Fesih Öncesi Hukuki Kontrol Listesi",
    category: "Is Hukuku",
    date: "2026-01-21",
    cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Yanlış kurgulanan fesih süreci, işe iade ve tazminat riskini büyütür. Performans kaydı, savunma alma, ihtar zinciri ve bildirim metinleri açısından fesih öncesi uygulanabilecek hukuki kontrol listesini adım adım aktarıyoruz."
  }
];
const SEED_LONG_CONTENT = {
  "seed-1": `Boşanma davalarında usul hataları, çoğu zaman maddi gerçeğin önüne geçerek hak kaybı doğurur. İlk kritik hata, dava açılmadan önce talep listesinin netleştirilmemesidir. Velayet, nafaka, maddi ve manevi tazminat ile mal rejimi alacağı birbirine bağlı başlıklardır; birinde yapılan eksik kurgu diğerini de zayıflatır. Bu nedenle dava dilekçesi yalnızca olay anlatımı değil, talep mimarisi açısından da teknik bir metin olarak hazırlanmalıdır.

İkinci önemli alan delil planlamasıdır. Mesaj kayıtları, banka hareketleri, sosyal medya içerikleri, tanık beyanları ve resmi evraklar farklı ispat değerine sahiptir. Delilin ne zaman ve hangi usulle sunulduğu, delilin içeriği kadar önemlidir. Geç sunulan veya usule aykırı sunulan deliller yargılamada etkisiz kalabilir. Dava öncesinde hazırlanan sistemli bir delil kontrol listesi, sürecin sağlıklı ilerlemesini sağlar.

Üçüncü sık hata, geçici tedbir taleplerinin geciktirilmesidir. Nafaka, çocukla kişisel ilişki ve konut kullanımı gibi konularda erken tedbir talebi tarafların dava süresince doğacak zararlarını azaltır. Tedbir taleplerinin genel ifadelerle değil, somut olgular ve belgelerle desteklenmesi gerekir. Mahkeme olasılık değerlendirmesini bu somutluk düzeyine göre yapar.

Son olarak iletişim ve takvim yönetimi ihmal edilmemelidir. Tebligat süreleri, cevap dilekçesi tarihleri ve bilirkişi/tanık aşamalarında yapılan gecikmeler dosyanın ritmini bozar. Planlı bir takip sistemi hem usul güvencesini artırır hem de duygusal olarak zorlayıcı bu süreci daha öngörülebilir hale getirir.`,
  "seed-2": `Ticari sözleşmelerde en çok tartışma yaratan hükümler, sözleşme kurulurken ikinci plana atılan maddelerdir. Yetki ve uyuşmazlık çözümü bunların başında gelir. Taraflar farklı şehirlerde veya ülkelerde faaliyet gösteriyorsa yargı yeri ve uygulanacak hukuk açık biçimde yazılmalıdır. Aksi halde yetki itirazları süreçleri uzatır ve tahsilat maliyetini yükseltir.

Cezai şart ve sorumluluk sınırı maddeleri de dengeli kurulmalıdır. Aşırı yüksek cezai şart tenkis tartışmalarına yol açabilir; aşırı düşük cezai şart ise caydırıcılığı azaltır. Benzer şekilde sorumluluk sınırı maddesi, ağır kusur ve kasten ihlal durumlarında uygulama sorunu yaratabilir. Bu nedenle madde dili hem ticari gerçekliğe hem de yargısal denetime uygun olmalıdır.

Fesih ve bildirim mekanizması, sözleşmenin operasyonel güvenliği için hayati önemdedir. Hangi ihlalin hangi sürede giderileceği, ihtar usulü ve tek taraflı fesih şartları net değilse tarafların hakları fiilen kullanılamaz hale gelebilir. Özellikle süreli projelerde aşamalı fesih modeli ve performans kriterlerinin önceden tanımlanması uyuşmazlık riskini ciddi ölçüde azaltır.

Profesyonel bir sözleşme yalnızca uyuşmazlık çıkınca açılan bir metin değildir; tarafların günlük kararlarını yöneten bir çerçevedir. Bu nedenle sözleşme revizyonlarının ticari ekip, finans birimi ve hukuk danışmanı tarafından birlikte yürütülmesi en sağlıklı yöntemdir.`,
  "seed-4": `Ceza dosyalarında ilk 24 saat, yargılamanın bütününü etkileyebilecek kadar kritiktir. Şüphelinin ifade aşamasında verdiği beyanlar, sonradan değiştirilmesi güç bir çerçeve oluşturur. Bu nedenle susma hakkı, sadece psikolojik bir refleks değil, dosya içeriği görülmeden önce kullanılan stratejik bir güvencedir.

Müdafi desteği, yalnızca hukuki bilgi vermek değil ifade akışını doğru yönetmektir. Soruların kapsamı, yönlendirme riski, tutanak dili ve ek beyan ihtiyacı profesyonel takip gerektirir. Tutanakta yer alan her cümle iddianame ve kovuşturma aşamasında delil değerlendirmesine etki eder. Bu nedenle ifade süreci aceleyle değil, dosya bütünlüğünü koruyacak bir yaklaşımla yürütülmelidir.

Savunma stratejisinde delil çelişkilerinin erken tespiti önemlidir. Kamera kayıtları, HTS verileri, tanık anlatımları ve teknik raporlar birbirini doğrulamayabilir. Bu çelişkilerin zamanında ortaya konması, iddianamenin kapsamını daraltabilir ve beraat ihtimalini güçlendirebilir. Geç yapılan itirazlar ise savunma alanını daraltır.

Ceza yargılamasında her dosya kendi olgusal gerçekliği içinde değerlendirilir. Ancak planlı bir savunma stratejisi, süreç baskısını azaltır ve hak kaybı riskini önemli ölçüde düşürür.`,
  "seed-5": `Tapu iptal ve tescil davaları, teknik ispat kuralları nedeniyle gayrimenkul hukukunun en hassas alanlarından biridir. Muvazaa, vekaletin kötüye kullanılması ve muris muvazaası iddialarında davanın başarısı, iddianın doğruluğu kadar delil setinin niteliğine bağlıdır. Bu nedenle dava açılmadan önce tapu kayıtları, devir zinciri ve ödeme izleri ayrıntılı biçimde incelenmelidir.

İspat yükünün dağılımı uygulamada sıkça yanlış yorumlanır. Genel kural, iddia edenin ispat yükünü taşımasıdır; ancak somut olayda karineler ve belgelerin bütünlüğü bu dağılımı fiilen etkileyebilir. Mahkeme değerlendirmesi tek bir belgeye değil, olayların kronolojik tutarlılığına dayanır.

Tanık delili bu davalarda çoğunlukla destekleyici roldedir; tek başına belirleyici olması her zaman beklenmez. Tutanaklar, banka işlemleri, resmi yazışmalar ve uzman incelemeleriyle birlikte sunulduğunda tanık anlatımının ikna gücü artar. Ayrıca ihtiyati tedbir taleplerinin zamanında yapılması, taşınmazın devrinin önlenmesi bakımından önem taşır.

Doğru kurgulanmış bir dosya yalnızca kazanma ihtimalini artırmaz; sürecin öngörülebilirliğini de güçlendirir. Tarafların mali ve hukuki risklerinin baştan netleştirilmesi, uzun süreli uyuşmazlıklarda en sağlıklı yaklaşımdır.`,
  "seed-6": `Kira uyuşmazlıklarında tahliye süreci, usul hatalarının en sık görüldüğü alanlardan biridir. Tahliye nedeni, ihtar metni ve bildirim zamanı birbiriyle uyumlu kurulmadığında dava süreci gereksiz biçimde uzar. Bu nedenle ilk adım, tahliye sebebinin doğru sınıflandırılması ve buna uygun belge setinin hazırlanmasıdır.

İhtar aşaması formalite olarak görülmemelidir. İhtar metninde kira dönemi, ihlal tanımı, giderim süresi ve olası hukuki sonuç açıkça belirtilmelidir. Usule aykırı tebligat veya eksik bildirim, sonraki dava aşamasında ciddi zaman kaybı yaratır. Arabuluculuk kapsamında olan uyuşmazlıklarda başvuru sırası ve tutanak içeriği özellikle dikkatle yönetilmelidir.

Dava aşamasında kiraya veren açısından en önemli başlık, kira ilişkisinin ispatıdır. Kira sözleşmesi, ödeme dekontları, hesap hareketleri ve yazışmalar birlikte sunulduğunda dosya daha güçlü hale gelir. Kiracı açısından ise ödeme savunması, haklı fesih nedenleri ve konut ihtiyacı iddialarına karşı delil planlaması belirleyicidir.

Tahliye süreci doğru yönetildiğinde hem tarafların hakları korunur hem de konut veya ticari kullanım kaynaklı zararlar azalır. Bu alanda stratejik planlama, en az mevzuat bilgisi kadar önemlidir.`
};
const ALLOWED_CATEGORIES = new Set([
  "Aile Hukuku",
  "Ticaret Hukuku",
  "Ceza Hukuku",
  "Is Hukuku",
  "İdare Hukuku",
  "Sigorta ve Tahkim Hukuku",
  "Vergi Hukuku",
  "İcra ve İflas Hukuku",
  "Miras Hukuku",
  "Tüketici Hukuku",
  "Gayrimenkul Hukuku",
  "Sozlesmeler Hukuku"
]);
const ALL_FILTER_OPTION = "Tümü";

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function formatDateTimeTr(timestamp) {
  if (!Number.isFinite(timestamp) || timestamp <= 0) return "";
  return new Date(timestamp).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function isAllowedCoverSource(value) {
  const src = String(value || "").trim();
  return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:image/");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Dosya okunamadi."));
    reader.readAsDataURL(file);
  });
}

function readStoredPosts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.posts) || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizePost).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function writeStoredPosts(posts) {
  localStorage.setItem(STORAGE_KEYS.posts, JSON.stringify(posts));
}

function migrateLegacyPostsIfNeeded() {
  const hasNew = !!localStorage.getItem(STORAGE_KEYS.posts);
  const legacyRaw = localStorage.getItem(LEGACY_POSTS_KEY);
  if (hasNew || !legacyRaw) return;

  try {
    const legacy = JSON.parse(legacyRaw);
    if (!Array.isArray(legacy)) return;
    const normalized = legacy
      .map((item) => ({
        id: `legacy-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: String(item.title || "").trim(),
        category: String(item.category || "Genel").trim(),
        date: String(item.date || new Date().toISOString().slice(0, 10)).trim(),
        cover: String(item.cover || "").trim(),
        excerpt: String(item.excerpt || item.content || "").trim()
      }))
      .filter((item) => item.title && item.excerpt);

    writeStoredPosts(normalized);
  } catch {
    // Bozuk legacy veri varsa sessizce atlanır.
  }
}

function getAllPosts() {
  const seeded = INITIAL_POSTS.map((post) => ({
    ...post,
    publishedAt: Number(post.publishedAt || 0),
    content: String(post.content || SEED_LONG_CONTENT[post.id] || "").trim()
  }));
  const merged = [...readStoredPosts(), ...seeded];
  return merged
    .filter((p) => p && p.title && p.date)
    .sort((a, b) => {
      const byPublishedAt = Number(b.publishedAt || 0) - Number(a.publishedAt || 0);
      if (byPublishedAt !== 0) return byPublishedAt;
      return new Date(b.date) - new Date(a.date);
    });
}

function normalizePost(post) {
  if (!post || typeof post !== "object") return null;
  const title = String(post.title || "").replace(/\s+/g, " ").trim().slice(0, 120);
  const rawExcerpt = String(post.excerpt || post.content || "").replace(/\s+/g, " ").trim();
  const excerpt = rawExcerpt.slice(0, 240);
  const rawContent = String(post.content || "").replace(/\r/g, "").trim();
  const content = (rawContent || `${excerpt}\n\nBu yazı genel bilgilendirme amacıyla hazırlanmıştır. Somut olaylarda dosyaya özel hukuki değerlendirme gerekir.`).slice(0, 12000);
  if (!title || !excerpt) return null;

  const date = String(post.date || "").trim();
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : new Date().toISOString().slice(0, 10);
  const category = String(post.category || "Genel").trim();
  const safeCategory = ALLOWED_CATEGORIES.has(category) ? category : "Genel";
  const cover = String(post.cover || "").trim();
  const safeCover = isAllowedCoverSource(cover) ? cover : FALLBACK_COVER;
  const publishedAt = Number(post.publishedAt || 0);

  return {
    id: String(post.id || `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`),
    title,
    category: safeCategory,
    date: validDate,
    publishedAt: Number.isFinite(publishedAt) ? publishedAt : 0,
    cover: safeCover,
    excerpt,
    content
  };
}

function createOption(value, label) {
  const opt = document.createElement("option");
  opt.value = String(value);
  opt.textContent = label;
  return opt;
}

function renderFilters(posts) {
  const category = qs("#categorySelect");
  const year = qs("#yearSelect");
  if (!category || !year) return;

  const categories = [ALL_FILTER_OPTION, ...new Set(posts.map((p) => p.category || "Genel"))];
  const years = [...new Set(posts.map((p) => new Date(p.date).getFullYear()))].sort((a, b) => b - a);

  category.innerHTML = "";
  year.innerHTML = "";

  categories.forEach((c) => category.appendChild(createOption(c, c)));
  year.appendChild(createOption(ALL_FILTER_OPTION, ALL_FILTER_OPTION));
  years.forEach((y) => year.appendChild(createOption(y, String(y))));
}

function makePostCard(post) {
  const article = document.createElement("article");
  article.className = "post";
  const link = document.createElement("a");
  link.className = "post-link";
  link.href = `makale.html?id=${encodeURIComponent(post.id)}`;
  link.setAttribute("aria-label", `${post.title} blog yazısını oku`);

  const image = document.createElement("img");
  image.className = "cover";
  image.src = post.cover || FALLBACK_COVER;
  image.alt = post.title || "Blog gorseli";
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.src = FALLBACK_COVER;
  }, { once: true });

  const content = document.createElement("div");
  content.className = "content";

  const meta = document.createElement("div");
  meta.className = "meta";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = post.category || "Genel";

  const date = document.createElement("time");
  date.dateTime = post.date;
  date.textContent = new Date(post.date).toLocaleDateString("tr-TR");

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = post.title;

  const excerpt = document.createElement("p");
  excerpt.textContent = post.excerpt || "";

  meta.appendChild(badge);
  meta.appendChild(date);
  content.appendChild(meta);
  content.appendChild(title);
  content.appendChild(excerpt);
  link.appendChild(image);
  link.appendChild(content);
  article.appendChild(link);

  return article;
}

function renderPosts(posts) {
  const grid = qs("#postsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  if (!posts.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "Kriterlere uygun blog yazısı bulunamadı.";
    grid.appendChild(empty);
    return;
  }

  posts.forEach((post) => grid.appendChild(makePostCard(post)));
}

function getFilteredPosts(source) {
  const searchEl = qs("#searchInput");
  const categoryEl = qs("#categorySelect");
  const yearEl = qs("#yearSelect");

  const q = searchEl ? searchEl.value.trim().toLowerCase() : "";
  const cat = categoryEl ? categoryEl.value : ALL_FILTER_OPTION;
  const year = yearEl ? yearEl.value : ALL_FILTER_OPTION;

  return source.filter((p) => {
    const byCategory = cat === ALL_FILTER_OPTION || p.category === cat;
    const byYear = year === ALL_FILTER_OPTION || String(new Date(p.date).getFullYear()) === String(year);
    const bySearch = !q || `${p.title} ${p.excerpt} ${p.content || ""}`.toLowerCase().includes(q);
    return byCategory && byYear && bySearch;
  });
}

function setupBlogArea() {
  if (!qs("#postsGrid")) return;

  const allPosts = getAllPosts();
  const isHomePage = String(document.body.getAttribute("data-page") || "") === "home";
  if (isHomePage) {
    renderPosts(allPosts.slice(0, 3));
    return;
  }

  renderFilters(allPosts);
  renderPosts(allPosts);

  ["#searchInput", "#categorySelect", "#yearSelect"].forEach((sel) => {
    const el = qs(sel);
    if (!el) return;
    const handler = () => renderPosts(getFilteredPosts(allPosts));
    el.addEventListener("input", handler);
    el.addEventListener("change", handler);
  });
}

function setupContactForm() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");
    const website = String(data.get("website") || "").trim();

    if (website) {
      status.textContent = "Gönderim doğrulanamadı.";
      return;
    }

    if (!name || !email || !message) {
      status.textContent = "Lütfen zorunlu alanları doldurun.";
      return;
    }

    if (!consent) {
      status.textContent = "Lütfen KVKK ve gizlilik onayını işaretleyin.";
      return;
    }

    const bodyLines = [
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      "",
      "Mesaj:",
      message
    ];
    const mailtoHref = `mailto:info@ornek.av.tr?subject=${encodeURIComponent(`[Web sitesi] İletişim: ${name}`)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    status.textContent = "E-posta uygulamanızda taslak açılıyor (Outlook vb.). Açılmazsa varsayılan posta uygulamanızı kontrol edin.";
    window.location.href = mailtoHref;
    form.reset();
  });
}

function setupNav() {
  const button = qs(".nav-toggle");
  const menu = qs("#navMenu");
  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Menüyü aç");
    menu.classList.remove("show");
  };

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const next = !expanded;
    button.setAttribute("aria-expanded", String(next));
    button.setAttribute("aria-label", next ? "Menüyü kapat" : "Menüyü aç");
    menu.classList.toggle("show");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function setupDropdowns() {
  const dropdowns = [...document.querySelectorAll(".dropdown")];
  if (!dropdowns.length) return;

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-toggle");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      const scrollTarget = trigger.getAttribute("data-scroll-target");
      if (scrollTarget) {
        e.preventDefault();
        window.location.href = scrollTarget;
        return;
      }
      e.preventDefault();
      const willOpen = !dropdown.classList.contains("open");
      dropdowns.forEach((d) => {
        d.classList.remove("open");
        const t = d.querySelector(".dropdown-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        dropdown.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest(".dropdown")) return;
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const t = dropdown.querySelector(".dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  });
}

function resetTransientUiState() {
  const navButton = qs(".nav-toggle");
  const navMenu = qs("#navMenu");
  if (navButton) {
    navButton.setAttribute("aria-expanded", "false");
    navButton.setAttribute("aria-label", "Menüyü aç");
  }
  if (navMenu) navMenu.classList.remove("show");

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.classList.remove("open");
    const trigger = dropdown.querySelector(".dropdown-toggle");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  });
}

function setupPageRestoreState() {
  window.addEventListener("pageshow", () => {
    resetTransientUiState();
  });
}

function setupExpertiseCardLinks() {
  const links = [...document.querySelectorAll(".expertise-link")];
  if (!links.length) return;

  links.forEach((link) => {
    const card = link.closest("article");
    if (!card) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof Element && target.closest("a, button")) return;
      window.location.href = link.getAttribute("href") || "";
    });
  });
}

function isSessionValid() {
  const raw = sessionStorage.getItem(STORAGE_KEYS.auth);
  if (!raw) return false;
  try {
    const payload = JSON.parse(raw);
    return payload && Date.now() < Number(payload.expiresAt || 0);
  } catch {
    return false;
  }
}

function createSession() {
  const twoHours = 2 * 60 * 60 * 1000;
  const payload = { expiresAt: Date.now() + twoHours };
  sessionStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(payload));
}

function clearSession() {
  sessionStorage.removeItem(STORAGE_KEYS.auth);
}

function setupAdminLogin() {
  const form = qs("#adminLoginForm");
  const status = qs("#adminStatus");
  const password = qs("#password");
  const togglePasswordBtn = qs("#togglePasswordBtn");
  const capsWarning = qs("#capsWarning");
  if (!form || !status) return;

  if (isSessionValid()) {
    window.location.href = "panel.html";
    return;
  }

  function readRateLimit() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.adminRateLimit) || "{}");
      return {
        attempts: Number(parsed.attempts || 0),
        lockedUntil: Number(parsed.lockedUntil || 0)
      };
    } catch {
      return { attempts: 0, lockedUntil: 0 };
    }
  }

  function writeRateLimit(data) {
    localStorage.setItem(STORAGE_KEYS.adminRateLimit, JSON.stringify(data));
  }

  function getRemainingSeconds(lockedUntil) {
    return Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000));
  }

  function checkLockStatus() {
    const state = readRateLimit();
    if (state.lockedUntil > Date.now()) {
      const sec = getRemainingSeconds(state.lockedUntil);
      status.textContent = `Çok sayıda hatalı giriş. ${sec} saniye sonra tekrar deneyin.`;
      return true;
    }
    if (state.lockedUntil && state.lockedUntil <= Date.now()) {
      writeRateLimit({ attempts: 0, lockedUntil: 0 });
    }
    return false;
  }

  if (togglePasswordBtn && password) {
    togglePasswordBtn.addEventListener("click", () => {
      const isMasked = password.type === "password";
      password.type = isMasked ? "text" : "password";
      togglePasswordBtn.textContent = isMasked ? "Gizle" : "Göster";
      togglePasswordBtn.setAttribute("aria-label", isMasked ? "Şifreyi gizle" : "Şifreyi göster");
    });
  }

  if (password && capsWarning) {
    password.addEventListener("keyup", (event) => {
      const isCapsOn = typeof event.getModifierState === "function" && event.getModifierState("CapsLock");
      capsWarning.textContent = isCapsOn ? "Caps Lock açık görünüyor." : "";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkLockStatus()) return;

    const username = String(qs("#username")?.value || "").trim();
    const passwordValue = String(qs("#password")?.value || "").trim();

    if (!username || !passwordValue) {
      status.textContent = "Lütfen kullanıcı adı ve şifre alanlarını doldurun.";
      return;
    }

    if (username === DEMO_AUTH.username && passwordValue === DEMO_AUTH.password) {
      writeRateLimit({ attempts: 0, lockedUntil: 0 });
      createSession();
      window.location.href = "panel.html";
      return;
    }

    const state = readRateLimit();
    const attempts = state.attempts + 1;
    const shouldLock = attempts >= 5;
    const nextState = shouldLock
      ? { attempts: 0, lockedUntil: Date.now() + 30 * 1000 }
      : { attempts, lockedUntil: 0 };
    writeRateLimit(nextState);

    if (shouldLock) {
      status.textContent = "Çok sayıda hatalı giriş. 30 saniye bekleyin.";
      return;
    }
    status.textContent = `Giriş bilgileri hatalı. Kalan deneme: ${5 - attempts}`;
  });
}

function renderAdminPostList(postsToRender = null) {
  const list = qs("#adminPostList");
  if (!list) return;
  const posts = postsToRender || readStoredPosts();
  list.innerHTML = "";

  if (!posts.length) {
    const empty = document.createElement("p");
    empty.textContent = "Kriterlere uygun blog yazısı bulunamadı.";
    list.appendChild(empty);
    return;
  }

  posts.forEach((post) => {
    const item = document.createElement("article");
    item.className = "admin-post-item";

    const metaWrap = document.createElement("div");
    metaWrap.className = "admin-post-meta";

    const title = document.createElement("strong");
    title.textContent = post.title;

    const meta = document.createElement("small");
    const publishedLabel = formatDateTimeTr(Number(post.publishedAt || 0));
    meta.textContent = publishedLabel
      ? `${post.category || "Genel"} | ${new Date(post.date).toLocaleDateString("tr-TR")} | Yayın: ${publishedLabel}`
      : `${post.category || "Genel"} | ${new Date(post.date).toLocaleDateString("tr-TR")}`;

    const actions = document.createElement("div");
    actions.className = "admin-post-actions";

    const edit = document.createElement("button");
    edit.className = "btn btn-outline btn-small";
    edit.type = "button";
    edit.textContent = "Düzenle";
    edit.addEventListener("click", () => {
      const editId = qs("#postEditId");
      const titleInput = qs("#postTitle");
      const categoryInput = qs("#postCategory");
      const dateInput = qs("#postDate");
      const coverInput = qs("#postCover");
      const excerptInput = qs("#postExcerpt");
      const contentInput = qs("#postContent");
      const saveBtn = qs("#savePostBtn");
      const cancelBtn = qs("#cancelEditBtn");
      const status = qs("#panelStatus");
      if (!editId || !titleInput || !categoryInput || !dateInput || !coverInput || !excerptInput || !contentInput || !saveBtn || !cancelBtn || !status) return;

      editId.value = post.id;
      titleInput.value = post.title || "";
      categoryInput.value = post.category || "";
      dateInput.value = post.date || "";
      coverInput.value = isAllowedCoverSource(post.cover) && String(post.cover).startsWith("http") ? post.cover : "";
      excerptInput.value = post.excerpt || "";
      contentInput.value = post.content || "";
      saveBtn.textContent = "Güncellemeyi Kaydet";
      cancelBtn.hidden = false;
      status.textContent = "Düzenleme modundasınız.";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const del = document.createElement("button");
    del.className = "btn btn-outline btn-small";
    del.type = "button";
    del.textContent = "Sil";
    del.addEventListener("click", () => {
      const next = readStoredPosts().filter((p) => p.id !== post.id);
      writeStoredPosts(next);
      refreshAdminPanelList();
    });

    metaWrap.appendChild(title);
    metaWrap.appendChild(meta);
    actions.appendChild(edit);
    actions.appendChild(del);
    item.appendChild(metaWrap);
    item.appendChild(actions);
    list.appendChild(item);
  });
}

function updatePanelStats(posts) {
  const totalEl = qs("#statTotalPosts");
  const monthEl = qs("#statThisMonth");
  const lastEl = qs("#statLastUpdate");
  if (!totalEl || !monthEl || !lastEl) return;

  totalEl.textContent = String(posts.length);
  const now = new Date();
  const thisMonth = posts.filter((p) => {
    const d = new Date(p.date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  monthEl.textContent = String(thisMonth);
  lastEl.textContent = posts.length ? new Date(posts[0].date).toLocaleDateString("tr-TR") : "-";
}

function refreshAdminPanelList() {
  const all = readStoredPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
  const q = String(qs("#adminSearchInput")?.value || "").trim().toLowerCase();
  const category = String(qs("#adminCategoryFilter")?.value || "Tümü");
  const filtered = all.filter((p) => {
    const bySearch = !q || `${p.title} ${p.excerpt} ${p.content || ""}`.toLowerCase().includes(q);
    const byCategory = category === "Tümü" || p.category === category;
    return bySearch && byCategory;
  });
  updatePanelStats(all);
  renderAdminPostList(filtered);
}

function setupAdminPanel() {
  const form = qs("#postForm");
  const status = qs("#panelStatus");
  const logoutBtn = qs("#logoutBtn");
  const sanitizeBtn = qs("#sanitizePostsBtn");
  const editId = qs("#postEditId");
  const saveBtn = qs("#savePostBtn");
  const cancelBtn = qs("#cancelEditBtn");
  const searchInput = qs("#adminSearchInput");
  const categoryFilter = qs("#adminCategoryFilter");

  if (!form || !status || !logoutBtn || !editId || !saveBtn || !cancelBtn) return;
  if (!isSessionValid()) {
    window.location.href = "admin.html";
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = String(qs("#postTitle")?.value || "").trim();
    const category = String(qs("#postCategory")?.value || "").trim();
    const dateInput = qs("#postDate");
    const date = String(dateInput?.value || "").trim();
    const coverInput = qs("#postCover");
    const coverFileInput = qs("#postCoverFile");
    const coverUrl = String(coverInput?.value || "").trim();
    const excerpt = String(qs("#postExcerpt")?.value || "").trim();
    const content = String(qs("#postContent")?.value || "").trim();

    if (!title || !category || !date || !excerpt || !content) {
      status.textContent = "Lütfen zorunlu tüm alanları doldurun.";
      return;
    }

    const current = readStoredPosts();
    const isEdit = !!editId.value;
    let coverValue = "";
    const hasFile = coverFileInput instanceof HTMLInputElement && coverFileInput.files && coverFileInput.files.length > 0;
    if (hasFile) {
      const selected = coverFileInput.files[0];
      if (selected && selected.type.startsWith("image/")) {
        if (selected.size > MAX_COVER_UPLOAD_BYTES) {
          status.textContent = `Görsel en fazla ${MAX_COVER_UPLOAD_BYTES / (1024 * 1024)} MB olabilir. Daha küçük bir dosya seçin veya sıkıştırın.`;
          return;
        }
        try {
          coverValue = await fileToDataUrl(selected);
        } catch {
          status.textContent = "Yuklenen gorsel okunamadi. Farkli bir dosya deneyin.";
          return;
        }
      } else {
        status.textContent = "Lutfen yalnizca gorsel dosyasi yukleyin.";
        return;
      }
    } else if (isAllowedCoverSource(coverUrl)) {
      coverValue = coverUrl;
    }

    if (isEdit) {
      const idx = current.findIndex((p) => p.id === editId.value);
      if (idx >= 0) {
        current[idx] = {
          ...current[idx],
          title: title.slice(0, 120),
          category,
          date,
          cover: coverValue || current[idx].cover || FALLBACK_COVER,
          excerpt: excerpt.slice(0, 240),
          content: content.slice(0, 12000)
        };
      }
    } else {
      current.unshift({
        id: `custom-${Date.now()}`,
        title: title.slice(0, 120),
        category,
        date,
        publishedAt: Date.now(),
        cover: coverValue || FALLBACK_COVER,
        excerpt: excerpt.slice(0, 240),
        content: content.slice(0, 12000)
      });
    }
    writeStoredPosts(current);
    form.reset();
    editId.value = "";
    cancelBtn.hidden = true;
    saveBtn.textContent = "Yayınla";
    status.textContent = isEdit ? "Blog yazısı güncellendi." : "Blog yazısı başarıyla yayınlandı.";
    refreshAdminPanelList();
  });

  cancelBtn.addEventListener("click", () => {
    form.reset();
    editId.value = "";
    cancelBtn.hidden = true;
    saveBtn.textContent = "Yayınla";
    status.textContent = "Düzenleme iptal edildi.";
  });

  logoutBtn.addEventListener("click", () => {
    clearSession();
    window.location.href = "admin.html";
  });

  if (sanitizeBtn) {
    sanitizeBtn.addEventListener("click", () => {
      let source = [];
      try {
        const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.posts) || "[]");
        source = Array.isArray(raw) ? raw : [];
      } catch {
        source = [];
      }
      const cleaned = source.map(normalizePost).filter(Boolean);
      writeStoredPosts(cleaned);
      refreshAdminPanelList();
      status.textContent = `Temizleme tamamlandı. ${cleaned.length} kayıt bırakıldı.`;
    });
  }

  if (searchInput) searchInput.addEventListener("input", refreshAdminPanelList);
  if (categoryFilter) categoryFilter.addEventListener("change", refreshAdminPanelList);

  const postDate = qs("#postDate");
  if (postDate) {
    postDate.max = new Date().toISOString().slice(0, 10);
  }

  refreshAdminPanelList();
}

function setupHeaderScrollState() {
  const header = qs(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = [
    ...document.querySelectorAll(".section h1, .section h2, .section .section-desc"),
    ...document.querySelectorAll(".card, .post, .faq-item, .timeline-list li"),
    ...document.querySelectorAll(".form-card, .hero-text, .hero-photo, .contact-list li")
  ];

  targets.forEach((el, idx) => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    if (idx % 4 === 1) el.classList.add("reveal-left");
    if (idx % 4 === 2) el.classList.add("reveal-right");
    el.style.setProperty("--reveal-delay", `${Math.min((idx % 8) * 55, 280)}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });

  targets.forEach((el) => observer.observe(el));
}

function setupPracticeDetailPage() {
  const container = qs("#relatedPostsGrid");
  if (!container) return;

  const practiceCategory = String(document.body.getAttribute("data-practice-category") || "").trim();
  if (!practiceCategory) return;

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.category === practiceCategory).slice(0, 6);

  container.innerHTML = "";
  if (!related.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "Bu faaliyet alanı için henüz blog yazısı bulunmuyor.";
    container.appendChild(empty);
    return;
  }
  related.forEach((post) => container.appendChild(makePostCard(post)));
}

function setupPracticeMiniForms() {
  const forms = [...document.querySelectorAll(".practice-mini-form")];
  if (!forms.length) return;
  forms.forEach((form) => {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const message = String(data.get("message") || "").trim();
      const consent = data.get("consent");
      if (!status) return;
      if (!name || !phone || !message) {
        status.textContent = "Lütfen zorunlu alanları doldurun.";
        return;
      }
      if (!consent) {
        status.textContent = "Lütfen KVKK onayını verin.";
        return;
      }
      status.textContent = "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.";
      form.reset();
    });
  });
}

function setupArticleDetailPage() {
  const container = qs("#articleContent");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const postId = String(params.get("id") || "").trim();
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.id === postId);
  const categoryToPractice = {
    "Aile Hukuku": "aile-hukuku.html",
    "Ticaret Hukuku": "ticaret-hukuku.html",
    "Ceza Hukuku": "ceza-hukuku.html",
    "Is Hukuku": "is-hukuku.html",
    "İdare Hukuku": "idare-hukuku.html",
    "Sigorta ve Tahkim Hukuku": "sigorta-tahkim-hukuku.html",
    "Vergi Hukuku": "vergi-hukuku.html",
    "İcra ve İflas Hukuku": "icra-iflas-hukuku.html",
    "Miras Hukuku": "miras-hukuku.html",
    "Tüketici Hukuku": "tuketici-hukuku.html",
    "Gayrimenkul Hukuku": "gayrimenkul-hukuku.html",
    "Sozlesmeler Hukuku": "sozlesmeler-hukuku.html"
  };

  const heroTitle = qs("#articleHeroTitle");
  const heroExcerpt = qs("#articleHeroExcerpt");
  const heroCategory = qs("#articleHeroCategory");
  const heroDate = qs("#articleHeroDate");
  const heroImage = qs("#articleHeroImage");
  const breadcrumb = qs("#articleBreadcrumb");
  const practiceText = qs("#articlePracticeText");
  const practiceLink = qs("#articlePracticeLink");
  const otherPosts = qs("#articleOtherPosts");

  container.innerHTML = "";
  if (!post) {
    if (heroTitle) heroTitle.textContent = "Blog yazısı bulunamadı";
    if (heroExcerpt) heroExcerpt.textContent = "İstenen içerik mevcut değil veya kaldırılmış olabilir.";
    if (heroCategory) heroCategory.textContent = "Arşiv";
    if (heroDate) heroDate.textContent = "-";
    if (otherPosts) otherPosts.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Blog yazısı bulunamadı";
    const p = document.createElement("p");
    p.textContent = "İstenen içerik mevcut değil veya kaldırılmış olabilir.";
    const backWrap = document.createElement("p");
    const backLink = document.createElement("a");
    backLink.className = "btn btn-outline";
    backLink.href = "blog.html";
    backLink.textContent = "Blog arşivine dön";
    backWrap.appendChild(backLink);
    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(backWrap);
    return;
  }

  document.title = `${post.title} | Avukat Kutluhan Yüksel`;
  if (heroTitle) heroTitle.textContent = post.title;
  if (heroExcerpt) heroExcerpt.textContent = post.excerpt || "Blog yazısı detayı";
  if (heroCategory) heroCategory.textContent = post.category || "Genel";
  if (heroDate) heroDate.textContent = new Date(post.date).toLocaleDateString("tr-TR");
  if (heroImage) {
    heroImage.src = post.cover || FALLBACK_COVER;
    heroImage.alt = post.title || "Blog gorseli";
    heroImage.addEventListener("error", () => {
      heroImage.src = FALLBACK_COVER;
    }, { once: true });
  }
  if (breadcrumb) {
    breadcrumb.innerHTML = `<a href="index.html">Ana Sayfa</a> / <a href="blog.html">Blog</a> / ${post.category || "Genel"}`;
  }
  if (practiceText) {
    practiceText.textContent = `${post.category || "Genel"} kategorisine ait faaliyet alanı sayfasına geçebilirsiniz.`;
  }
  if (practiceLink) {
    practiceLink.href = categoryToPractice[post.category] || "blog.html";
  }

  const h1 = document.createElement("h2");
  h1.textContent = "Blog Yazısı İçeriği";

  const meta = document.createElement("p");
  meta.className = "article-meta";
  meta.textContent = `${post.category} • ${new Date(post.date).toLocaleDateString("tr-TR")}`;

  const cover = document.createElement("img");
  cover.className = "article-cover";
  cover.src = post.cover || FALLBACK_COVER;
  cover.alt = post.title || "Blog gorseli";
  cover.loading = "lazy";
  cover.addEventListener("error", () => {
    cover.src = FALLBACK_COVER;
  }, { once: true });

  const body = document.createElement("div");
  body.className = "article-body";

  const back = document.createElement("p");
  const backLink = document.createElement("a");
  backLink.className = "btn btn-outline";
  backLink.href = "blog.html";
  backLink.textContent = "Blog arşivine dön";
  back.appendChild(backLink);

  const paragraphs = String(post.content || post.excerpt || "")
    .split(/\n\s*\n/g)
    .map((part) => part.trim())
    .filter(Boolean);
  if (!paragraphs.length) {
    const p = document.createElement("p");
    p.textContent = post.excerpt || "";
    body.appendChild(p);
  } else {
    paragraphs.forEach((part) => {
      const p = document.createElement("p");
      p.textContent = part;
      body.appendChild(p);
    });
  }

  container.appendChild(h1);
  container.appendChild(meta);
  container.appendChild(cover);
  container.appendChild(body);
  container.appendChild(back);

  if (otherPosts) {
    otherPosts.innerHTML = "";
    const items = allPosts.filter((p) => p.id !== post.id).slice(0, 4);
    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `makale.html?id=${encodeURIComponent(item.id)}`;
      a.textContent = item.title;
      li.appendChild(a);
      otherPosts.appendChild(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  migrateLegacyPostsIfNeeded();
  setupHeaderScrollState();
  setupNav();
  setupDropdowns();
  setupPageRestoreState();
  setupExpertiseCardLinks();
  setupBlogArea();
  setupContactForm();
  setupAdminLogin();
  setupAdminPanel();
  setupPracticeDetailPage();
  setupPracticeMiniForms();
  setupScrollReveal();
  setupArticleDetailPage();
});
