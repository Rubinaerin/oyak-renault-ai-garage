# AI Garage — React projesi

Gönderilen sekiz Figma JSX çıktısından oluşturuldu. React + Vite kullanır.

## Çalıştırma

Node.js 20.19+ gerekir. Bu klasörde terminal açın:

```sh
npm install
npm run dev
```

Yayınlanabilir dosyalar için `npm run build`; yerel kontrol için `npm run preview`.

## Yapı

- `src/screens/`: Sekiz tasarımın ayrı React bileşenleri. Figma'nın piksel satır yükseklikleri düzeltildi.
- `src/App.jsx`: Ortak menü, hash tabanlı sayfa geçişleri, form alanları, görev tamamlama penceresi ve ikon eşleştirmeleri.
- `src/styles.css`: Tema, ortak stiller ve küçük ekran menüsü.

## Çalışan akış

Home → Start Mission veya Missions → Continue → sonucu gir → Complete Mission → View Reward → My Garage.

Menü, tarayıcı geri/ileri, prompt kopyalama, sonuç/yansıma alanları ve başarı penceresi çalışır. XP ve ödül demo oturumu boyunca tutulur; sayfa yenilenince sıfırlanır.

## Sınırlar

Bu bir ön yüz prototipidir. Sunucu, hesap sistemi ve kalıcı veri bağlantısı yoktur. Diğer görevlerin detayları sağlanmadığından Start butonları bu durumu açıklar. Etkinlik kaydı, topluluk gönderisi, mağaza ve avatar değişiklikleri veri kaydetmez; ilgili butonlar açıklama gösterir. Tasarımdaki filtreler ve arama görünümleri henüz etkileşimli değildir.

Kaynak çıktılarda görsel/SVG dosyası yoktu. İkonlar Lucide karşılıklarıyla değiştirildi; logoda geçici bir elmas işareti kullanıldı, avatarın dışa aktarılan şekilleri korundu. Orijinal logo/avatar dosyaları ve Inter/Archivo fontları eklenirse görsel eşleşme iyileşir. Fontlar bulunmazsa Arial kullanılır.

Masaüstü düzeni korunur. Küçük ekranda menü açılır/kapanır; geniş tasarım yatay kaydırılarak görüntülenir. Tam mobil yeniden düzenleme yapılmamıştır. Örnek metinler ve tarihler Figma çıktılarından aynen alınmıştır.
