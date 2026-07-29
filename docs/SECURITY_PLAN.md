# SedatOS AI Security Plan

## 1. Güvenlik Amacı

SedatOS AI, kullanıcı ve şirket verilerini güvenli şekilde yönetmek için kurumsal güvenlik prensipleri ile geliştirilecektir.

---

# 2. Authentication

Kullanılacak sistemler:

- Güvenli kullanıcı girişi
- Oturum yönetimi
- Token kontrolü
- İki faktörlü doğrulama (2FA)

---

# 3. Authorization

Rol bazlı yetkilendirme:

- Kurucu
- CEO
- Yönetici
- Departman yöneticisi
- Çalışan
- Kullanıcı

Her rol sadece izin verilen verilere erişebilir.

---

# 4. Veri İzolasyonu

Kurumsal yapı için:

- company_id kontrolü
- Kullanıcı veri ayrımı
- Şirketler arası erişim engeli

uygulanacaktır.

---

# 5. Database Güvenliği

Kontroller:

- Supabase RLS politikaları
- Güvenli sorgular
- Veri erişim kontrolü
- Audit kayıtları

---

# 6. AI Güvenliği

AI sistemi:

- Yetkisiz veri görmemeli
- Kullanıcı rolünü kontrol etmeli
- Şirket dışı bilgi erişmemeli
- Hassas verileri korumalıdır

---

# 7. Log ve Denetim

Kayıt tutulacak alanlar:

- Kullanıcı işlemleri
- Sistem hataları
- Yetki değişiklikleri
- Kritik işlemler

---

# 8. Kurumsal Güvenlik Hedefi

SedatOS AI;

KOBİ, kurumsal şirket ve holding seviyesinde güvenli şekilde kullanılabilecek altyapıya sahip olacaktır.
