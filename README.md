🚀 Proje Adımları
🔹 Aşama 1 – MySQL

MySQL Workbench kurulumu yapıldı.
Sakila veritabanı sakila-schema.sql ve sakila-data.sql dosyaları ile içe aktarıldı.
Tablolar ve ilişkiler incelendi.
Database → Reverse Engineer özelliği kullanılarak ERD diyagramı otomatik olarak oluşturuldu ve PNG olarak dışa aktarıldı.
Aşağıdaki 5 analitik SQL sorgusu yazılarak çalıştırıldı:

En çok kiralanan 10 film
Ülkeye göre kiralama sayısı
Aylık gelir analizi
En çok gelir getiren 10 müşteri
Kategori bazında film sayısı


customer, payment ve rental tabloları CSV formatında dışa aktarıldı.

<img width="958" height="524" alt="1" src="https://github.com/user-attachments/assets/104eca42-4f3f-4769-adde-56b8d043c1a0" />
<img width="958" height="507" alt="2" src="https://github.com/user-attachments/assets/9603a8ae-d16e-45fd-83ed-2d14ad26527d" />










🔹 Aşama 2 – Snowflake

Snowflake'te SAKILA_DW adlı veritabanı oluşturuldu.
SAKILA_SCHEMA adlı schema ve SAKILA_WH adlı X-Small warehouse tanımlandı.
customer, payment ve rental tabloları Snowflake'te oluşturuldu.
SAKILA_STAGE adlı bir stage alanı oluşturuldu.
MySQL'den dışa aktarılan CSV dosyaları Snowflake tablolarına Load Data aracılığıyla yüklendi (599 müşteri, ödeme ve kiralama kayıtları).
Star Schema tasarımı yapıldı:

fact_payment (merkez tablo)
dim_customer (boyut tablosu)
dim_date (boyut tablosu)


Aşağıdaki 3 analitik sorgu çalıştırıldı:

Aylık gelir analizi
En çok ödeme yapan 10 müşteri
En yüksek gelirli ay (2005 Temmuz – 1651.95)




🔹 Aşama 3 – MongoDB

MongoDB Atlas üzerinde ücretsiz Cluster0 oluşturuldu (AWS Frankfurt).
MongoDB Compass ile Atlas cluster'a bağlantı kuruldu.
sakila_db adlı veritabanı ve 3 koleksiyon oluşturuldu.
CSV dosyaları Compass aracılığıyla koleksiyonlara aktarıldı:

customer → 599 doküman
payment → kayıtlar yüklendi
rental → 1000 doküman


Aşağıdaki 3 aggregation pipeline sorgusu yazılarak çalıştırıldı:

Müşteri başına kiralama sayısı (Top 10)
Müşteri başına toplam ödeme tutarı (Top 10)
Aylık kiralama sayısı dağılımı
