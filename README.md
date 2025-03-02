# Sentiment Analizi ile Twitter Verisi Çekme ve Değerlendirme

Bu proje, Twitter API'sini kullanarak belirli bir hashtag veya konu hakkında en son paylaşılan tweetleri çekmeyi ve bu tweetlerin duygu (sentiment) analizini yapmayı amaçlamaktadır.

## 📌 Özellikler
- Twitter API üzerinden en son tweetleri çekme
- Sentiment.js kullanarak tweetlerin duygu analizini yapma (Pozitif, Negatif, Nötr)
- Tweetlerin sentiment skorlarını görüntüleme

## 🛠️ Gereksinimler
Bu projeyi çalıştırmadan önce aşağıdaki bağımlılıkları yüklemeniz gerekmektedir:

- **Node.js** (https://nodejs.org/)
- **Twitter API erişim bilgileri** (Bearer Token gereklidir)

## 📦 Kurulum
1. **Depoyu klonlayın** (Eğer Git kullanıyorsanız):
   ```sh
   git clone https://github.com/kullanici/sentiment-analysis.git
   cd sentiment-analysis
   ```
2. **Bağımlılıkları yükleyin**:
   ```sh
   npm install axios sentiment dotenv
   ```
3. **.env dosyanızı oluşturun ve API anahtarınızı ekleyin**:
   - Proje dizininde `.env` dosyası oluşturun ve içine aşağıdaki satırı ekleyin:
     ```sh
     BEARER_TOKEN=YOUR_TWITTER_BEARER_TOKEN
     ```
   - `YOUR_TWITTER_BEARER_TOKEN` yerine kendi Twitter API anahtarınızı koyun.

## 🚀 Kullanım
1. **Scripti çalıştırın**:
   ```sh
   node script.js
   ```
2. **Çıktı örneği:**
   ```sh
   📊 Sentiment Analiz Sonuçları:
   Tweet: "JavaScript harika!" | Skor: 3
   Tweet: "Bu hata sinir bozucu..." | Skor: -2
   Tweet: "Kod yazmak bazen eğlenceli bazen stresli." | Skor: 0
   ```

## 📂 Dosya Açıklamaları
- **script.js** → Twitter API'den veri çeker ve sentiment analizini gerçekleştirir.
- **.env** → API anahtarınızı güvenli bir şekilde saklamak için kullanılır.
- **package.json** → Projenin bağımlılıklarını ve yapılandırmasını içerir.

## 🛠️ Kullanılan Teknolojiler
- **Node.js** → JavaScript çalışma zamanı ortamı
- **Axios** → HTTP isteklerini yapmak için
- **Sentiment.js** → Duygu analizi yapmak için
- **dotenv** → Ortam değişkenlerini yönetmek için

## 📌 Notlar
- Twitter API, **sadece yetkilendirilmiş kullanıcıların** veri çekmesine izin verir. API anahtarınızı almadan bu script çalışmayacaktır.
- Maksimum 2000 tweet çekilecek şekilde ayarlanmıştır, ancak API'nin kısıtlamalarına bağlı olarak değişebilir.

---
📌 **Bu proje eğitim amaçlıdır ve Twitter API kullanım politikalarına uygun şekilde çalıştırılmalıdır.**

