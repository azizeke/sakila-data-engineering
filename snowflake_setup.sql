-- ============================================
-- SAKILA DATABASE - MySQL Analitik Sorgular
-- ============================================

USE sakila;

-- --------------------------------------------
-- Sorgu 1: En çok kiralanan 10 film
-- --------------------------------------------
SELECT 
    f.title, 
    COUNT(r.rental_id) AS rental_count
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
GROUP BY f.title 
ORDER BY rental_count DESC 
LIMIT 10;

-- --------------------------------------------
-- Sorgu 2: Ülkeye göre kiralama sayısı
-- --------------------------------------------
SELECT 
    co.country, 
    COUNT(r.rental_id) AS rentals
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
GROUP BY co.country 
ORDER BY rentals DESC;

-- --------------------------------------------
-- Sorgu 3: Aylık gelir
-- --------------------------------------------
SELECT 
    DATE_FORMAT(payment_date, '%Y-%m') AS month, 
    SUM(amount) AS revenue
FROM payment 
GROUP BY month 
ORDER BY month;

-- --------------------------------------------
-- Sorgu 4: En çok gelir getiren 10 müşteri
-- --------------------------------------------
SELECT 
    c.first_name, 
    c.last_name, 
    SUM(p.amount) AS total
FROM payment p 
JOIN customer c ON p.customer_id = c.customer_id
GROUP BY c.customer_id 
ORDER BY total DESC 
LIMIT 10;

-- --------------------------------------------
-- Sorgu 5: Kategori bazında film sayısı
-- --------------------------------------------
SELECT 
    cat.name AS category, 
    COUNT(fc.film_id) AS film_count
FROM film_category fc
JOIN category cat ON fc.category_id = cat.category_id
GROUP BY cat.name 
ORDER BY film_count DESC;
