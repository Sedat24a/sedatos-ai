# SedatOS AI Role Permission Matrix

## 1. Amaç

SedatOS AI içerisinde kullanıcıların görevlerine göre erişim, veri görüntüleme ve işlem yetkileri yönetilir.

Temel prensip:

- Her kullanıcı sadece yetkili olduğu veriye erişir.
- Şirket ve departman sınırları korunur.
- Kritik işlemler kayıt altına alınır.

---

# 2. Founder / CEO Rolü

## Erişim

- Holding genel görünümü
- Tüm şirket analizleri
- Stratejik raporlar
- AI yönetici önerileri


## Yetkiler

- Şirket yönetimi
- Kullanıcı yönetimi
- Rol atama
- Rapor görüntüleme
- Karar destek sistemi kullanımı

---

# 3. Company Admin Rolü

## Erişim

- Kendi şirket bilgileri
- Departman yapısı
- Kullanıcılar
- Operasyon verileri


## Yetkiler

- Kullanıcı ekleme
- Departman yönetimi
- Süreç yönetimi
- Doküman yönetimi

---

# 4. Manager Rolü

## Erişim

- Kendi departmanı
- Ekip bilgileri
- Projeler
- Görevler


## Yetkiler

- Görev oluşturma
- Proje takip
- Performans değerlendirme
- Rapor görüntüleme

---

# 5. Employee Rolü

## Erişim

- Kendi profili
- Kendi görevleri
- Kendi hedefleri
- Kendi performansı


## Yetkiler

- Görev güncelleme
- Doküman kullanımı
- Kişisel analiz görüntüleme

---

# 6. AI Yetki Kontrolü

AI her işlem öncesi kontrol eder:

- Kullanıcı kim?
- Rolü nedir?
- Hangi şirkete bağlı?
- Hangi veriye erişebilir?

---

# 7. Veri İzolasyonu

Zorunlu kurallar:

- company_id kontrolü
- department_id kontrolü
- user_id kontrolü

Amaç:

Bir kullanıcının yetkisiz veri görmesini engellemek.

---

# 8. Audit Kayıtları

Takip edilecek işlemler:

- Girişler
- Veri görüntüleme
- Veri değişiklikleri
- Yetki değişiklikleri
- AI işlemleri

---

# 9. Gelecek Roller

Eklenebilecek roller:

- CFO
- CTO
- HR Director
- Sales Director
- Project Manager
- Auditor

---

# 10. Hedef

SedatOS AI rol sistemi;

küçük işletmeden holding seviyesine kadar ölçeklenebilen güvenli yetki altyapısı sağlayacaktır.
