# SedatOS AI Security Audit Fix Plan

## 1. Amaç

Bu doküman SedatOS AI güvenlik analizlerinde bulunan açıkların takip edilmesi ve düzeltilmesi için hazırlanmıştır.

Öncelik:

- Veri güvenliği
- Kullanıcı izolasyonu
- Şirket izolasyonu
- Yetki kontrolü

---

# 2. Tespit Edilen Güvenlik Sorunları

## RLS Politikaları

Sorun:

Bazı tablolarda fazla geniş erişim izinleri bulunmaktadır.

Kontrol edilecek tablolar:

- audit_logs
- error_logs
- job_applications

Çözüm:

- WITH CHECK koşulları sınırlandırılmalı.
- Kullanıcı ve şirket bazlı kontrol eklenmeli.

---

# 3. Company Isolation

Sorun:

Kurumsal yapılarda veri ayrımı kritik önemdedir.

Çözüm:

Her kurumsal veri tablosunda:

company_id

zorunlu olmalıdır.

Kontrol:

- Kullanıcı kendi şirketini görmeli.
- Şirketler birbirinin verisini görememeli.
- Holding yetkisi özel olarak tanımlanmalı.

---

# 4. Authentication Güvenliği

Kontroller:

- Kullanıcı doğrulama
- Oturum yönetimi
- Şifre güvenliği
- Yetki kontrolü

---

# 5. AI Veri Güvenliği

AI sistemi:

- Yetkisiz veriye erişemez.
- Kullanıcı rolünü kontrol eder.
- Şirket sınırlarını korur.
- Hassas bilgileri korur.

---

# 6. Audit Sistemi

Takip edilmesi gerekenler:

- Kullanıcı girişleri
- Veri değişiklikleri
- Yetki değişimleri
- AI işlemleri
- Sistem hataları

---

# 7. Düzeltme Önceliği

## Kritik

1. RLS politikalarının düzenlenmesi
2. Company_id izolasyonu
3. Rol bazlı erişim


## Yüksek

4. AI veri erişim kontrolü
5. Audit geliştirmeleri


## Orta

6. Güvenlik raporlama sistemi

---

# 8. Doğrulama Süreci

Her güvenlik değişikliğinden sonra:

- Yetkisiz erişim testi
- Rol testi
- Veri izolasyonu testi
- API kontrolü

yapılmalıdır.

---

# 9. Hedef

SedatOS AI;

kurumsal şirketler ve holdingler tarafından güvenle kullanılabilecek enterprise güvenlik seviyesine ulaşmalıdır.
