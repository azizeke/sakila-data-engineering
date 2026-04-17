🚀 Proje Adımları

<img width="417" height="318" alt="son" src="https://github.com/user-attachments/assets/36ff1762-1e72-43ad-9883-3ebfdd1c0e66" />


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
<img width="959" height="504" alt="3" src="https://github.com/user-attachments/assets/6e2bd1d6-4263-48c0-adae-1039b5ce5593" />
<img width="956" height="513" alt="4" src="https://github.com/user-attachments/assets/f206e2a7-5154-428c-914e-14e70622eb64" />
<img width="960" height="516" alt="5" src="https://github.com/user-attachments/assets/d5e80c68-5c99-4480-91bb-d5cf44104e3e" />
<img width="938" height="520" alt="6" src="https://github.com/user-attachments/assets/59a8f366-5ba1-482d-9e69-9fe7c4fcea30" />
<img width="960" height="523" alt="7" src="https://github.com/user-attachments/assets/c231979e-2892-4b83-9699-b0d51b0bb2e1" />
<img width="960" height="511" alt="8" src="https://github.com/user-attachments/assets/20331471-5689-4414-b143-5ee4e0cb238a" />
<img width="960" height="512" alt="10" src="https://github.com/user-attachments/assets/0a0a54ef-72af-49da-8d4b-2cf527f9042a" />
<img width="960" height="501" alt="11" src="https://github.com/user-attachments/assets/170c92fd-e5cc-4665-a6b3-e0c28efb261f" />
<img width="957" height="507" alt="12" src="https://github.com/user-attachments/assets/b852c86f-3e33-449d-98de-5c2e795d8d63" />
<img width="958" height="506" alt="13" src="https://github.com/user-attachments/assets/3a54fe31-cc1c-44d2-a9e7-d173b32e0a4d" />







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

<img width="951" height="493" alt="18" src="https://github.com/user-attachments/assets/74cac15c-173a-47ac-b44a-47793ba29803" />
<img width="940" height="480" alt="19" src="https://github.com/user-attachments/assets/78c10c09-5742-4294-aee2-9f07231f1119" />
<img width="954" height="454" alt="20" src="https://github.com/user-attachments/assets/990a0fc7-8311-421a-b151-07da31b1b67f" />
<img width="951" height="451" alt="21" src="https://github.com/user-attachments/assets/d6757868-f829-4a8b-b736-3a894fead15f" />
<img width="366" height="267" alt="yildizsema" src="https://github.com/user-attachments/assets/35f1c967-962b-4dc4-b029-fe33382546dc" />




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

<img width="939" height="442" alt="22" src="https://github.com/user-attachments/assets/5af16600-e394-4f6d-815a-0be62d1a79ff" />
<img width="980" height="472" alt="23" src="https://github.com/user-attachments/assets/0524f2b1-5570-49cf-a492-9648f70b2275" />
<img width="953" height="509" alt="25" src="https://github.com/user-attachments/assets/df72391b-cd12-4bbe-a52f-5f6b6cf3e213" />
<img width="941" height="484" alt="26" src="https://github.com/user-attachments/assets/84636727-9fcf-48c8-b2cb-54d2753df093" />
<img width="956" height="504" alt="27" src="https://github.com/user-attachments/assets/519e32bf-cb6d-4cfc-847d-721c4cdd5c08" />
<img width="960" height="518" alt="29" src="https://github.com/user-attachments/assets/01402162-4f99-4aea-8295-9d2cd6d399ae" />
<img width="931" height="483" alt="30" src="https://github.com/user-attachments/assets/8f67e0b0-815a-4261-9c1d-91897ddc58ae" />
<img width="960" height="513" alt="31" src="https://github.com/user-attachments/assets/3926d251-d8a3-4337-b298-44631cd657e8" />
<img width="960" height="518" alt="32" src="https://github.com/user-attachments/assets/41c7251b-512d-456f-b490-7c3226e29811" />
<img width="952" height="447" alt="34" src="https://github.com/user-attachments/assets/4df23133-c1e8-4773-9543-623e517356d7" />



## 📝 Değerlendirme

Bu projede üç farklı veritabanı teknolojisini kullanarak verinin farklı mimarilerdeki davranışını gözlemledim. MySQL, ilişkisel bir veritabanı olarak Sakila gibi yapılandırılmış verileri tablolar ve yabancı anahtarlar aracılığıyla tutarlı biçimde saklamak için idealdir. Snowflake, bulut tabanlı bir veri ambarı olarak büyük veri setlerinde analitik sorgular çalıştırmak ve Star Schema gibi OLAP modellerini uygulamak için güçlü bir platformdur. MongoDB ise şemasız yapısıyla esnek belge modellemesine olanak tanır ve özellikle iç içe geçmiş veya değişken yapılı veriler için uygundur. Her üç platform da birbirini tamamlar niteliktedir: MySQL operasyonel veriler için, Snowflake analitik iş yükleri için, MongoDB ise yarı yapılandırılmış veriler için en uygun çözümü sunar. Bu proje sayesinde ETL süreçlerini uçtan uca deneyimleyerek modern veri mühendisliğinin temel bileşenlerini pratikte uyguladım.

















