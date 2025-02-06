# Uçuş Filtreleme Uygulaması

Bu uygulama, kullanıcıların belirli kriterlere göre uçuş bilgilerini filtreleyebileceği bir React tabanlı uygulamadır.

## Kullanılan Teknolojiler

- **React** (v18.3.1) - Kullanıcı arayüzü geliştirme
- **Material UI** (v6.4.2) - Tasarım bileşenleri
- **Axios** (v1.7.9) - Veri çekme için HTTP istemcisi
- **Day.js** (v1.11.13) - Tarih ve zaman formatlama
- **React-Leaflet** (v4.2.1) & **Leaflet** (v1.9.4) - Harita entegrasyonu
- **React Loader Spinner** (v6.1.6) - Yüklenme göstergeleri
- **@emotion/react & @emotion/styled** (v11.14.0) - CSS-in-JS stiliyle tasarım
- **@mui/icons-material** (v6.4.2) - Material UI ikonları

## Veri Kaynakları

Bu uygulama, uçuş ve havaalanı bilgilerinin çekilmesi için RapidAPI kullanmaktadır:

- **Uçuş Bilgileri:** [Scraper API](https://rapidapi.com/scraperapi-scraperapi-default/api/scraper-api/)
- **Havaalanı Bilgileri:** [Flights Scraper API](https://rapidapi.com/fluggs-api/api/flights-scraper/)



## Çevresel Değişkenler (.env)

Projede kullanılacak API anahtarları ve diğer hassas bilgileri aşağıdaki gibi bir `.env` dosyasında saklayabilirsiniz:

```env
VITE_API_KEY=your_api_key_here
```

## Kurulum ve Çalıştırma

Projeyi yerel ortamınıza klonlayın:

```sh
git clone https://github.com/musayar9/GoogleFlights.git
cd GoogleFlights
```

Bağımlılıkları yükleyin:

```sh
npm install
```

Uygulamayı başlatın:

```sh
npm start
```
### Kullanımı

Kullanım

Uygulamayı ilk açtığınızda, sizi kullanıcı dostu bir uçuş filtreleme alanı karşılar. Bu alan sayesinde uçuş tercihlerinizi belirleyebilir ve en uygun seçeneklere hızla ulaşabilirsiniz:

Uçuş Türü: Tek yönlü mü yoksa gidiş-dönüş mü yapmak istediğinizi seçebilirsiniz.

Yolcu Sayısı: Kaç kişiyle seyahat edeceğinizi belirleyerek uygun biletleri filtreleyebilirsiniz.

Kabin Sınıfı: Ekonomi, premium ekonomi, business veya first class seçeneklerinden birini tercih edebilirsiniz.

Kalkış ve Varış Noktaları: Nereden ve nereye yolculuk yapacağınızı seçerek ilgili havaalanlarını belirleyebilirsiniz.

Tarih Seçimi: Uçuş türünüze uygun tarihleri seçerek uçuşları filtreleyebilirsiniz.

Filtreleri belirledikten sonra, sistem sizin için en uygun uçuşları listeleyerek zaman kazanmanızı sağlar.


