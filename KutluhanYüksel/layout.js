/**
 * Tek kaynak: site header + footer. Sayfalar <div id="site-header-mount"></div> ve
 * <div id="site-footer-mount"></div> bırakır; bu dosya bunları gerçek markup ile değiştirir.
 * data-page="home" ise anasayfa anchor linkleri kullanılır.
 */
(function () {
  /** Tüm ülke kodu ile, başında + olmadan (örn. 905551234567). Site genelinde tek yer. */
  const WHATSAPP_E164 = "905441484652";
  const WHATSAPP_PREFILL = encodeURIComponent(
    "Merhaba, web siteniz üzerinden iletişime geçmek istiyorum."
  );

  const EXPERTISE_LINKS = `
              <li><a href="aile-hukuku.html">Aile Hukuku</a></li>
              <li><a href="sigorta-tahkim-hukuku.html">Sigorta ve Tahkim Hukuku</a></li>
              <li><a href="ceza-hukuku.html">Ceza Hukuku</a></li>
              <li><a href="idare-hukuku.html">İdare Hukuku</a></li>
              <li><a href="vergi-hukuku.html">Vergi Hukuku</a></li>
              <li><a href="icra-iflas-hukuku.html">İcra ve İflas Hukuku</a></li>
              <li><a href="miras-hukuku.html">Miras Hukuku</a></li>
              <li><a href="ticaret-hukuku.html">Ticaret Hukuku</a></li>
              <li><a href="gayrimenkul-hukuku.html">Gayrimenkul Hukuku</a></li>
              <li><a href="tuketici-hukuku.html">Tüketici Hukuku</a></li>
              <li><a href="sozlesmeler-hukuku.html">Sözleşmeler Hukuku</a></li>
              <li><a href="is-hukuku.html">İş ve Sosyal Güvenlik Hukuku</a></li>`;

  const FOOTER_HTML = `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p>Kutluhan Yüksel Hukuk ve Danışmanlık</p>
        <p class="disclaimer">Bu sitedeki içerikler yalnızca genel bilgilendirme amaçlıdır; hukuki mütalaa niteliği taşımaz.</p>
      </div>
      <nav class="legal-links" aria-label="Yasal bağlantılar">
        <a href="kvkk-aydinlatma.html">KVKK</a>
        <a href="gizlilik-politikasi.html">Gizlilik</a>
        <a href="cerez-politikasi.html">Çerez</a>
        <a href="etik-uyari.html">Etik Uyarı</a>
      </nav>
      <div class="socials" aria-label="Sosyal medya">
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="Instagram">ig</a>
        <a href="#" aria-label="Facebook">fb</a>
      </div>
    </div>
  </footer>`;

  const NAV_TOGGLE_INNER = `<span class="nav-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span><span class="nav-toggle__label">Menü</span>`;

  function headerHtmlHome() {
    return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Anasayfa">
        <span class="brand-badge" aria-hidden="true"><img class="brand-logo" src="assets/logo-ky-transparent.png" alt=""></span>
        <span class="brand-text">
          <span class="brand-top">Avukat</span>
          <span class="brand-name">Kutluhan Yüksel</span>
        </span>
      </a>
      <div class="header-end">
      <button class="nav-toggle" type="button" aria-label="Menüyü aç" aria-expanded="false">${NAV_TOGGLE_INNER}</button>
      <nav aria-label="Ana menü">
        <ul id="navMenu" class="nav-list">
          <li><a href="#home">Ana Sayfa</a></li>
          <li><a href="#about">Hakkında</a></li>
          <li class="dropdown">
            <button class="dropdown-toggle" type="button" data-scroll-target="#expertise" aria-expanded="false" aria-controls="expertiseMenu">Faaliyet Alanları</button>
            <ul id="expertiseMenu" class="dropdown-menu">${EXPERTISE_LINKS}
            </ul>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#faq">SSS</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
      </div>
    </div>
  </header>`;
  }

  function headerHtmlInner() {
    return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Anasayfa">
        <span class="brand-badge" aria-hidden="true"><img class="brand-logo" src="assets/logo-ky-transparent.png" alt=""></span>
        <span class="brand-text">
          <span class="brand-top">Avukat</span>
          <span class="brand-name">Kutluhan Yüksel</span>
        </span>
      </a>
      <div class="header-end">
      <button class="nav-toggle" type="button" aria-label="Menüyü aç" aria-expanded="false">${NAV_TOGGLE_INNER}</button>
      <nav aria-label="Ana menü">
        <ul id="navMenu" class="nav-list">
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="index.html#about">Hakkında</a></li>
          <li class="dropdown">
            <button class="dropdown-toggle" type="button" data-scroll-target="index.html#expertise" aria-expanded="false" aria-controls="expertiseMenu">Faaliyet Alanları</button>
            <ul id="expertiseMenu" class="dropdown-menu">${EXPERTISE_LINKS}
            </ul>
          </li>
          <li><a href="index.html#blog">Blog</a></li>
          <li><a href="index.html#faq">SSS</a></li>
          <li><a href="index.html#contact">İletişim</a></li>
        </ul>
      </nav>
      </div>
    </div>
  </header>`;
  }

  const mountH = document.getElementById("site-header-mount");
  const mountF = document.getElementById("site-footer-mount");
  const page = document.body && document.body.getAttribute("data-page");
  const isHome = page === "home";

  if (mountH) {
    mountH.outerHTML = isHome ? headerHtmlHome() : headerHtmlInner();
  }
  if (mountF) {
    mountF.outerHTML = FOOTER_HTML;
  }

  if (document.body) {
    const waHref = `https://wa.me/${WHATSAPP_E164}?text=${WHATSAPP_PREFILL}`;
    const telHref = `tel:+${WHATSAPP_E164}`;
    const waEl = document.createElement("div");
    waEl.className = "whatsapp-float";
    waEl.setAttribute("role", "complementary");
    waEl.setAttribute("aria-label", "WhatsApp ile iletişim");
    waEl.innerHTML = `<div class="whatsapp-float__card">
      <p class="whatsapp-float__title">7/24 Hızlı İletişim</p>
      <p class="whatsapp-float__desc">Bize 7/24 WhatsApp'tan yazabilir veya doğrudan telefonla arayabilirsiniz.</p>
      <div class="whatsapp-float__actions">
        <a class="whatsapp-float__btn whatsapp-float__btn--secondary" href="${telHref}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z"/></svg>
          Hemen Ara
        </a>
        <a class="whatsapp-float__btn" href="${waHref}" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp'ta Yaz
        </a>
      </div>
    </div>`;
    document.body.appendChild(waEl);
  }
})();
