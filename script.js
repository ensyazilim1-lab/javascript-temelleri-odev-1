// 1. Şarj Uyarısı
let batteryLevel = 15;
let isCharging = false;

if (batteryLevel < 20 && !isCharging) {
    console.log("Düşük pil! Lütfen şarja takın.");
} else {
    console.log("Pil durumu normal.");
}

// 2. Tam Bölünebilme Kontrolü
let dividend = 45;
let divisor = 9;

if (divisor === 0) {
    console.log("Hata: Bir sayı 0'a bölünemez!");
} else if (dividend % divisor === 0) {
    console.log("Tam bölünebiliyor.");
} else {
    console.log("Kalanlı bölme.");
}

// 3. Asansör Kapasitesi
let maxWeight = 400;
let personCount = 5;
let averageWeight = 85;

if (personCount * averageWeight > maxWeight) {
    console.log("Kapasite aşıldı! Asansör hareket edemez.");
} else {
    console.log("İyi yolculuklar.");
}

// 4. Kelime Uzunluğu Sınırı
let username = "ali";

if (username.length < 4 || username.length > 12) {
    console.log("Geçersiz kullanıcı adı uzunluğu.");
} else {
    console.log("Kullanıcı adı kabul edildi.");
}

// 5. Çift Sayı Ama 10'un Katı Değil
let num = 30;

if (num % 2 === 0 && num % 10 !== 0) {
    console.log("Aranan sayı bulundu!");
} else {
    console.log("Kurala uymuyor.");
}

// 6. Gece Modu Otomasyonu
let hour = 22;

if (hour >= 20 || hour < 6) {
    console.log("Gece modu aktif.");
} else {
    console.log("Gündüz modu aktif.");
}

// 7. Suyun Halleri
let waterTemp = 105;

if (waterTemp <= 0) {
    console.log("Katı (Buz)");
} else if (waterTemp < 100) {
    console.log("Sıvı (Su)");
} else {
    console.log("Gaz (Buhar)");
}

if (waterTemp === 0 || waterTemp === 100) {
    console.log("Hal değişim noktası!");
}

// 8. Hız Cezası Hesaplama
let speed = 115;
let speedLimit = 90;
let excess = speed - speedLimit;

if (excess <= 0) {
    console.log("İyi sürüşler.");
} else if (excess <= 20) {
    console.log("Uyarı: Hız sınırını aştınız.");
} else if (excess <= 40) {
    console.log("1000 TL Ceza.");
} else {
    console.log("Ehliyete el konuldu.");
}


// 9. Kahve Makinesi Seçimi
let coffeeType = "Latte";
let hasMilk = false;
let hasWater = true;

if (!hasWater) {
    console.log("Su bitti!");
} else if ((coffeeType === "Latte" || coffeeType === "Cappuccino") && !hasMilk) {
    console.log("Süt bitti, bu kahve yapılamaz.");
} else {
    console.log("Kahveniz hazırlanıyor...");
}


// 10. İkinci Dereceden Denklem Kök Durumu
let a = 1;
let b = -4;
let c = 4;
let delta = (b * b) - (4 * a * c);

if (delta > 0) {
    console.log("İki farklı gerçek kök var.");
} else if (delta === 0) {
    console.log("Çakışık (tek) gerçek kök var.");
} else {
    console.log("Gerçek kök yok.");
}

// 11. Paket Abonelik Yükseltme
let currentPlan = "Standart";
let storageUsed = 95;
let maxStorage = 100;

if (storageUsed > maxStorage) {
    console.log("Alan doldu! Acil yükseltme gerekli.");
} else if (storageUsed >= maxStorage * 0.90) {
    console.log("Alan neredeyse doldu.");
} else {
    console.log("Yeterli depolama alanınız var.");
}

// 12. Koordinat Düzleminde Bölge Bulma
let x = -4;
let y = 7;

if (x === 0 && y === 0) {
    console.log("Orijin (Başlangıç noktası)");
} else if (x === 0 || y === 0) {
    console.log("Eksen üzerinde");
} else if (x > 0 && y > 0) {
    console.log("1. Bölge");
} else if (x < 0 && y > 0) {
    console.log("2. Bölge");
} else if (x < 0 && y < 0) {
    console.log("3. Bölge");
} else if (x > 0 && y < 0) {
    console.log("4. Bölge");
}

// 13. Elektrik Faturası Kademeli Hesaplama
let consumption = 320;
let totalBill = 0;

if (consumption <= 150) {
    totalBill = consumption * 2;
} else {
    let firstPart = 150 * 2;
    let remainingPart = (consumption - 150) * 3;
    totalBill = firstPart + remainingPart;
}

console.log("Toplam Fatura Tutarınız: " + totalBill + " TL");

// 14. Otopark Ücret Tarifesi
let hours = 5;
let isDisabled = false;
let parkingFee = 0;

if (isDisabled) {
    parkingFee = 0;
} else if (hours <= 1) {
    parkingFee = 50;
} else if (hours <= 4) {
    parkingFee = 50 + (hours - 1) * 30;
} else {
    parkingFee = 200;
}

console.log("Ödenecek Otopark Ücreti: " + parkingFee + " TL");

// 15. Kredi Başvuru Değerlendirmesi
let income = 35000;
let creditScore = 1350;
let hasDebt = true;

if (creditScore < 1100) {
    console.log("Kredi reddedildi (Düşük puan).");
} else if (creditScore >= 1500) {
    console.log("Koşulsuz onaylandı!");
} else {
    // Kredi notu 1100 - 1500 arasında
    if (income >= 30000 && !hasDebt) {
        console.log("Onaylandı");
    } else {
        console.log("Gelir yetersiz veya mevcut borç var.");
    }
}

// 16. Uçak Bagaj Ek Ücreti
let handLuggage = 9;
let cabinLuggage = 23;
let isBusinessClass = false;

// Bilet türüne göre limitleri belirleyelim
let handLimit = isBusinessClass ? 12 : 8;
let cabinLimit = isBusinessClass ? 30 : 20;

// Aşım miktarlarını hesaplayalım (Aşım yoksa 0 alınır)
let handExcess = handLuggage > handLimit ? handLuggage - handLimit : 0;
let cabinExcess = cabinLuggage > cabinLimit ? cabinLuggage - cabinLimit : 0;

// Toplam ceza tutarı
let totalExcessKg = handExcess + cabinExcess;
let extraFee = totalExcessKg * 100;

console.log("Toplam Ekstra Bagaj Ücreti: " + extraFee + " TL");

// 17. Akıllı Ev Kombi Kontrolü
let currentTemp = 19;
let targetTemp = 22;
let isWindowOpen = true;
let isSomeoneHome = true;

if (isWindowOpen) {
    console.log("Pencere açık, kombi kapatıldı.");
} else if (!isSomeoneHome) {
    console.log("Evde kimse yok, kombi kapatıldı.");
} else {
    // Evde biri var ve pencere kapalı, sıcaklık kontrolüne geçebiliriz
    if (currentTemp < targetTemp) {
        console.log("Kombi çalışıyor.");
    } else {
        console.log("Hedef sıcaklığa ulaşıldı, kombi beklemede.");
    }
}

// 18. İndirim Kuponu Doğrulama
let cartAmount = 600;
let couponCode = "SUPER100";
let isFirstOrder = false;
let discount = 0;

if (couponCode === "HOSGELDIN") {
    if (isFirstOrder) {
        discount = 150;
    } else {
        console.log("Kupon kullanılamadı.");
    }
} else if (couponCode === "SUPER100") {
    if (cartAmount >= 500) {
        discount = 100;
    } else {
        console.log("Kupon kullanılamadı.");
    }
} else {
    console.log("Kupon kullanılamadı.");
}

let finalAmount = cartAmount - discount;
console.log("Ödenecek Tutar: " + finalAmount + " TL");

// 19. Artık Yıl (Leap Year) Hesaplayıcı
let year = 1900;

if (year % 400 === 0) {
    console.log("Artık yıl");
} else if (year % 100 === 0) {
    console.log("Normal yıl");
} else if (year % 4 === 0) {
    console.log("Artık yıl");
} else {
    console.log("Normal yıl");
}

// 20. Taş - Kağıt - Makas Oyunu
let player1 = "Makas";
let player2 = "Taş";

// Geçerli seçim kontrolü
let isValid1 = (player1 === "Taş" || player1 === "Kağıt" || player1 === "Makas");
let isValid2 = (player2 === "Taş" || player2 === "Kağıt" || player2 === "Makas");

if (!isValid1 || !isValid2) {
    console.log("Geçersiz seçim! Lütfen Taş, Kağıt veya Makas girin.");
} else if (player1 === player2) {
    console.log("Berabere!");
} else if (
    (player1 === "Taş" && player2 === "Makas") ||
    (player1 === "Kağıt" && player2 === "Taş") ||
    (player1 === "Makas" && player2 === "Kağıt")
) {
    console.log("1. Oyuncu kazandı!");
} else {
    console.log("2. Oyuncu kazandı!");
}

// --- 21. Ortanca (Medyan) Sayıyı Bulma ---
{
    let x = 45;
    let y = 12;
    let z = 28;
    let median;

    if ((x > y && x < z) || (x < y && x > z)) {
        median = x;
    } else if ((y > x && y < z) || (y < x && y > z)) {
        median = y;
    } else {
        median = z;
    }

    console.log("Ortanca sayı: " + median);
}


