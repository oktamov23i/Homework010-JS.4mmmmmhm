// 1. Talaba
class Talaba {
    constructor(ismi, familiyasi, telefon, manzil) {
        this.ismi = ismi;
        this.familiyasi = familiyasi;
        this.telefon = telefon;
        this.manzil = manzil;
    }
    set nom(yangiIsm) {
        this.ismi = yangiIsm;
    }
    get nom() {
        return this.ismi;
    }
    toliqIsm() {
        return `${this.ismi} ${this.familiyasi}`;
    }
    batafsil() {
        return `${this.ismi} ${this.familiyasi} ${this.telefon} ${this.manzil}`;
    }
}

export let student1 = new Talaba("Javlon", "Nabiyev", +998900112233, "Shayxontohur");
export let student2 = new Talaba("Javlon", "Nabiyev", "tel: " +998900112233, "manzil: Shayxontohur");

// 2. Ustoz
class Ustoz {
    constructor(ismi, familiyasi, joylashuv, maosh, daraja) {
        this.ismi = ismi;
        this.familiyasi = familiyasi;
        this.joylashuv = joylashuv;
        this.maosh = maosh;
        this.daraja = daraja;
    }
    set manzil(yangiJoy) {
        this.joylashuv = yangiJoy;
    }
    get manzil() {
        return this.joylashuv;
    }
    toliqIsm() {
        return `${this.ismi} ${this.familiyasi}`;
    }
    batafsil() {
        return `${this.ismi} ${this.familiyasi} ${this.joylashuv} ${this.maosh} ${this.daraja}`;
    }
}

export let teacher1 = new Ustoz("Rustam", "Karimov", "Bektemir", "6000 mln", 3);
export let teacher2 = new Ustoz("Rustam", "Karimov", "manzil: Bektemir", "level: 3", "ish haqi - 6000 mln");

// 3. Guruh
class Guruh {
    constructor(nomi, xona, ustoz, daraja, talabaSoni) {
        this.nomi = nomi;
        this.xona = xona;
        this.ustoz = ustoz;
        this.daraja = daraja;
        this.talabaSoni = talabaSoni;
    }
    set bosqich(yangiDaraja) {
        this.daraja = yangiDaraja;
    }
    get bosqich() {
        return this.daraja;
    }
    toliqMalumot() {
        return `${this.nomi} ${this.xona} ${this.ustoz} ${this.daraja} ${this.talabaSoni}`;
    }
}

export let group1 = new Guruh("Angular | Fullstack (Advanced)", "Zoom", "Karimov Rustam", "level 6", 25);
export let group2 = new Guruh("Angular | Fullstack (Advanced) yo'nalish", "Zoom xonasi", "O'qituvchining ismi: Karimov Rustam", "level 6", "O'quvchilar soni (25) ta");

// 4. Tolov
class Tolov {
    constructor(kimdan, kimga, summa, vaqt, holat) {
        this.kimdan = kimdan;
        this.kimga = kimga;
        this.summa = summa;
        this.vaqt = vaqt;
        this.holat = holat;
    }
    set yuboruvchi(yangiKimdan) {
        this.kimdan = yangiKimdan;
    }
    get yuboruvchi() {
        return this.kimdan;
    }
    holati() {
        return `${this.kimdan} ${this.kimga} ${this.summa} ${this.vaqt} ${this.holat}`;
    }
}

export let payment1 = new Tolov("Azamat", "Ulug'bekka", 3000, `12:00:00`, true);
export let payment2 = new Tolov("Azamatdan", "Ulug'bekka", "12:00:00", "3000 so'm pul", "o'tkazma muvaffaqiyatli amalga oshdi.");

// 5. IshHaqqi
class IshHaqqi {
    constructor(oluvchi, miqdor, vaqt, tur, holat) {
        this.oluvchi = oluvchi;
        this.miqdor = miqdor;
        this.vaqt = vaqt;
        this.tur = tur;
        this.holat = holat;
    }
    set summa(yangiMiqdor) {
        this.miqdor = yangiMiqdor;
    }
    get summa() {
        return this.miqdor;
    }
    malumot() {
        return `${this.oluvchi} ${this.miqdor} ${this.vaqt} ${this.tur} ${this.holat}`;
    }
}

export let salary1 = new IshHaqqi("David", 250, "20:00:00", `GBP`, true);
export let salary2 = new IshHaqqi("David", "20:00:00", 250, "GBP", "oyligini oldi.");

// 6. Tashkilot
class Tashkilot {
    constructor(nomi, asoschi, joylashuv, xodimlarSoni) {
        this.nomi = nomi;
        this.asoschi = asoschi;
        this.joylashuv = joylashuv;
        this.xodimlarSoni = xodimlarSoni;
    }
    set xodimlar(yangiSoni) {
        this.xodimlarSoni = yangiSoni;
    }
    get xodimlar() {
        return this.xodimlarSoni;
    }
    batafsil() {
        return `${this.nomi} ${this.asoschi} ${this.joylashuv} ${this.xodimlarSoni}`;
    }
}

export let organization1 = new Tashkilot("IT Park", "Sardor Mamatov", "Mirzo Ulug'bek", 350);
export let organization2 = new Tashkilot("IT Park", "Asoschisi: Sardor Mamatov", "manzil: Mirzo Ulug'bek", "xodimlar soni 350dan ortiq.");
