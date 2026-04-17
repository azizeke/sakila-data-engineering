# 🎬 Sakila End-to-End Data Engineering Project

## 📌 Proje Genel Bakış

Bu proje, **Sakila** film kiralama veritabanını kullanarak uçtan uca bir veri mühendisliği pipeline'ı oluşturmayı amaçlamaktadır. Verinin üç farklı platform arasında nasıl aktığını ve her platformun güçlü yönlerini deneyimlemek için tasarlanmıştır.

## 🏗️ Mimari

```
MySQL (İlişkisel Veritabanı)
   ↓ CSV Export
Snowflake (Bulut Veri Ambarı)
   ↓ Star Schema & Analitik Sorgular
MongoDB (NoSQL Belge Veritabanı)
   ↓ Aggregation Pipeline
```

## 🛠️ Kullanılan Araçlar

| Platform   | Araç              | Amaç                        |
|------------|-------------------|-----------------------------|
| MySQL      | MySQL Workbench   | İlişkisel veri yönetimi     |
| Snowflake  | Web Arayüzü       | Bulut veri ambarı           |
| MongoDB    | Atlas + Compass   | NoSQL belge veritabanı      |

## 🚦 Proje Aşamaları

### 🔹 Aşama 1 – MySQL
- Sakila veritabanı kurulumu
- ERD diyagramı oluşturma
- 5 analitik SQL sorgusu
- CSV export (customer, payment, rental)

### 🔹 Aşama 2 – Snowflake
- Veritabanı, schema ve warehouse oluşturma
- CSV dosyalarını STAGE ile yükleme
- Star Schema tasarımı (fact + dimension tablolar)
- 3 analitik sorgu

### 🔹 Aşama 3 – MongoDB
- Atlas cluster kurulumu
- Compass ile bağlantı
- CSV koleksiyonlara import
- 3 aggregation pipeline sorgusu

## 📁 Proje Yapısı

```
sakila-data-engineering/
│
├── README.md
├── mysql/
│   ├── sql_queries.sql        # 5 analitik SQL sorgusu
│   └── erd_diagram.png        # ERD diyagramı
│
├── snowflake/
│   ├── snowflake_setup.sql    # Kurulum kodları
│   ├── star_schema.sql        # Star Schema tasarımı
│   └── star_schema_diagram.png
│
└── mongodb/
    ├── aggregation_queries.js # 3 aggregation sorgusu
    └── document_structure.json
```

## 📊 Değerlendirme

Bu projede üç farklı veritabanı teknolojisini kullanarak verinin farklı mimarilerdeki davranışını gözlemledim. MySQL, ilişkisel bir veritabanı olarak Sakila gibi yapılandırılmış verileri tablolar ve yabancı anahtarlar aracılığıyla tutarlı biçimde saklamak için idealdir. Snowflake, bulut tabanlı bir veri ambarı olarak büyük veri setlerinde analitik sorgular çalıştırmak ve Star Schema gibi OLAP modellerini uygulamak için güçlü bir platformdur. MongoDB ise şemasız yapısıyla esnek belge modellemesine olanak tanır ve özellikle iç içe geçmiş veya değişken yapılı veriler için uygundur. Her üç platform da birbirini tamamlar niteliktedir: MySQL operasyonel veriler için, Snowflake analitik iş yükleri için, MongoDB ise yarı yapılandırılmış veriler için en uygun çözümü sunar. Bu proje sayesinde ETL süreçlerini uçtan uca deneyimleyerek modern veri mühendisliğinin temel bileşenlerini pratikte uyguladım.

## 🎓 Öğrenme Çıktıları

- ✅ İlişkisel ve NoSQL veritabanı tasarımı
- ✅ ETL iş akışları
- ✅ Bulut veri ambarı (Snowflake)
- ✅ Star Schema modelleme
- ✅ MongoDB aggregation pipeline
- ✅ OLTP, OLAP ve NoSQL mimarilerini anlama
