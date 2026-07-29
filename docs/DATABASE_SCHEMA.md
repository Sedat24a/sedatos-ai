# SedatOS AI Database Schema

## 1. Amaç

SedatOS AI veritabanı yapısı, kişisel kullanıcı yönetimi ile kurumsal şirket yönetimini aynı altyapıda desteklemek için tasarlanmıştır.

---

# 2. Ana Veri Yapıları

## Users

Kullanıcı bilgileri:

- Kullanıcı kimliği
- Profil bilgileri
- Rol bilgisi
- Yetki bilgisi
- Tercihler

---

## Companies

Şirket bilgileri:

- Şirket adı
- Şirket bilgileri
- Organizasyon yapısı
- Departmanlar
- Kullanıcı bağlantıları

---

## Tasks

Görev sistemi:

- Görev adı
- Açıklama
- Durum
- Öncelik
- Atanan kullanıcı

---

## Projects

Proje yönetimi:

- Proje bilgileri
- Proje durumu
- Takım bilgileri
- Görev bağlantıları

---

## Customers

CRM verileri:

- Müşteri bilgileri
- İletişim kayıtları
- Satış süreçleri
- Etkileşim geçmişi

---

## Documents

Doküman yönetimi:

- Dosya bilgileri
- Yetkilendirme
- Versiyon kontrolü
- Şirket bağlantısı

---

# 3. AI Veri Yapıları

## AI Memory

AI hafızası:

- Kullanıcı tercihleri
- Önceki konuşmalar
- Kullanım alışkanlıkları
- Şirket bilgileri

---

## AI Analysis Records

AI analiz kayıtları:

- Analiz türü
- Sonuçlar
- Öneriler
- Tarih bilgisi

---

# 4. Güvenlik Yapısı

Tüm kurumsal tablolar:

- company_id
- user_id
- role kontrolü

ile izole edilir.

---

# 5. Gelecek Veri Modelleri

Planlanan tablolar:

- Risk yönetimi
- Finans analizleri
- KPI sistemi
- İş akışları
- Dijital imza
- Bilgi bankası
- AI ajan kayıtları
