# Hukuk Portfolyo Projesi

Modern, tek sayfa odakli bir avukat portfolyo sitesi ve demo yonetim paneli.

## Proje Yapisi

- `index.html`: Ana sayfa (hero, hakkinda, uzmanlik, blog ozeti, iletisim)
- `blog.html`: Blog arsivi ve filtreleme
- `admin.html`: Demo yonetim girisi
- `panel.html`: Blog yazisi ekleme/listeleme/silme paneli
- `script.js`: Tum istemci tarafi davranislar
- `style.css`: Tum stiller
- `robots.txt` ve `sitemap.xml`: Temel SEO tarama dosyalari
- `favicon.svg`: Site ikon dosyasi
- `kvkk-aydinlatma.html`: KVKK aydinlatma metni
- `gizlilik-politikasi.html`: Gizlilik politikasi
- `cerez-politikasi.html`: Cerez politikasi
- `etik-uyari.html`: Mesleki etik ve sorumluluk metni

## Calistirma

Bu proje statiktir. Dosyalari dogrudan tarayicida acabilirsiniz.

Daha saglikli test icin basit bir local server onerilir:

```powershell
python -m http.server 5500
```

Ardindan:
- `http://localhost:5500/index.html`
- `http://localhost:5500/blog.html`
- `http://localhost:5500/admin.html`

## Demo Yonetim Bilgileri

- Kullanici adi: `admin`
- Sifre: `12345`

Bu bilgiler sadece demo amaclidir.

## Veri Saklama

- Blog yazilari `localStorage` icinde `portfolio_posts` anahtariyla tutulur.
- Admin oturumu `sessionStorage` icinde sureli olarak tutulur.
- Eski `posts` anahtarindan yeni anahtara otomatik migrasyon vardir.

## Teknik Notlar

- Blog kartlari guvenli DOM API ile render edilir (`innerHTML` ile kullanici icerigi basilmiyor).
- SEO icin temel `og`, `twitter` ve `canonical` etiketleri eklidir.
- Erisilebilirlik icin skip-link ve aria nitelikleri bulunur.
- Iletisim formunda KVKK onayi ve anti-spam (honeypot) kontrolu vardir.

## Uretim Ortami Icin Oneriler

1. Gercek backend tabanli kimlik dogrulama ve yetkilendirme ekleyin.
2. Blog verilerini API/DB tarafina tasiyin.
3. Form iletilerini backend uzerinden yonetin.
4. E2E ve unit test altyapisi kurun.

