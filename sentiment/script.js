import axios from 'axios';
import Sentiment from 'sentiment';
import dotenv from 'dotenv';

dotenv.config(); // .env dosyasını yükle

const BEARER_TOKEN = process.env.BEARER_TOKEN; // API anahtarını oku

// Tweeter Apı den Tweetleri çeken fonksiyon
async function getTweets(query) {
    try {
        const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=200`;
        const headers = {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
        };

        const response = await axios.get(url, { headers });

        if (!response.data || !response.data.data) {
            console.log("⚠️ Hiç tweet bulunamadı!");
            return [];
        }

        return response.data.data.map(tweet => tweet.text);
    } catch (error) {
        console.error("❌ Hata oluştu:", error.message);
        return [];
    }
}

// Tweetlerin duygu analizini yapan fonksiyon
function analyzeSentiment(tweets) {
    const sentiment = new Sentiment();
    return tweets.map(tweet => ({
        text: tweet,
        score: sentiment.analyze(tweet).score
    }));
}

//Kodu Çalıştırma
(async () => {
    const tweets = await getTweets("#javascript");
    
    if (tweets.length === 0) {
        console.log("⚠️ Analiz edilecek tweet yok.");
        return;
    }

    const results = analyzeSentiment(tweets);
    
    console.log("📊 Sentiment Analiz Sonuçları:");
    results.forEach(result => console.log(`Tweet: "${result.text}" | Skor: ${result.score}`));
})();
