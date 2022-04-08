import {
  penjumlahan,
  pengurangan,
  pembagian,
  perkalian,
  rataRata,
  sisaBagi,
  luasKubus,
  luasLingkaran,
  luasPersegi,
  volumeKubus,
} from "@/utils";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(5, 3)).toBe(8);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-7, -3)).toBe(-10);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("3", "0")).toBe("30");
  });
});

describe("Melakukan Pengurangan", () => {
  test("Pengurangan dua bilangan positif", () => {
    expect(pengurangan(5, 3)).toBe(2);
  });
  test("Pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-7, -3)).toBe(-4);
  });
  test("Pengurangan satu bilangan positif dan satu bilangan negatif", () => {
    expect(pengurangan(-8, 6)).toBe(-14);
  });
});

describe("Melakukan Pembagian", () => {
  test("Pembagian dua bilangan positif", () => {
    expect(pembagian(10, 2)).toBe(5);
  });
  test("Pembagian dua bilangan negatif", () => {
    expect(pembagian(-8, -4)).toBe(2);
  });
  test("Pembagian satu bilangan positif dan satu bilangan negatif", () => {
    expect(pembagian(-12, 6)).toBe(-2);
  });
});

describe("Melakukan Perkalian", () => {
  test("Perkalian dua bilangan positif", () => {
    expect(perkalian(10, 2)).toBe(20);
  });
  test("Perkalian dua bilangan negatif", () => {
    expect(perkalian(-8, -4)).toBe(32);
  });
  test("Perkalian satu bilangan positif dan satu bilangan negatif", () => {
    expect(perkalian(-2, 6)).toBe(-12);
  });
});

describe("Melakukan Rata-Rata", () => {
  test("Rata-Rata lima bilangan positif", () => {
    expect(rataRata(10, 2, 5, 8, 5)).toBe(6);
  });
  test("Rata-Rata lima bilangan negatif", () => {
    expect(rataRata(-10, -2, -5, -8, -5)).toBe(-6);
  });
  test("Rata-Rata lima bilangan positif dan bilangan negatif", () => {
    expect(rataRata(10, 2, -5, -8, 5)).toBe(0.8);
  });
});

describe("Melakukan Sisa bagi", () => {
  test("Sisa bagi dua bilangan positif", () => {
    expect(sisaBagi(6, 2)).toBe(0);
  });
  test("Sisa bagi dua bilangan negatif", () => {
    expect(sisaBagi(-4, -3)).toBe(-1);
  });
  test("Sisa bagi satu bilangan positif dan satu bilangan negatif", () => {
    expect(sisaBagi(10, -3)).toBe(1);
  });
});

describe("Melakukan hitung Luas Persegi", () => {
  test("Luas Persegi bilangan positif", () => {
    expect(luasPersegi(5)).toBe(25);
  });
  test("Luas Persegi bilangan desimal", () => {
    expect(luasPersegi(3.5)).toBe(12.25);
  });
  test("Luas Persegi bilangan a - b", () => {
    expect(luasPersegi(5 - 2)).toBe(9);
  });
});

describe("Melakukan hitung Luas Lingkaran", () => {
  test("Phi lingkaran 3.14", () => {
    expect(luasLingkaran(3.14, 10)).toBe(314);
  });
  test("Phi lingkaran 22/7", () => {
    expect(luasLingkaran(22 / 7, 7)).toBe(154);
  });
  test("Phi lingkaran bukan 3.14 atau 22/7", () => {
    expect(luasLingkaran(6, 9)).toBe("phi harus 3.14 atau 22/7");
  });
});

describe("Menghitung Luas Permukaan Kubus", () => {
  test("Luas Permukaan Kubus bilangan positif", () => {
    expect(luasKubus(4)).toBe(96);
  });
  test("Luas Permukaan Kubus bilangan desimal", () => {
    expect(luasKubus(2.5)).toBe(37.5);
  });
  test("Luas Permukaan Kubus bilangan a - b", () => {
    expect(luasKubus(16 - 6)).toBe(600);
  });
});

describe("Menghitung Volume Kubus", () => {
  test("Volume Kubus bilangan positif", () => {
    expect(volumeKubus(5)).toBe(125);
  });
  test("Volume Kubus bilangan desimal", () => {
    expect(volumeKubus(2.5)).toBe(15.625);
  });
  test("Volume Kubus bilangan a - b", () => {
    expect(volumeKubus(16 - 6)).toBe(1000);
  });
});
