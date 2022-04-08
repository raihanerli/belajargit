export const penjumlahan = (bilanganSatu, bilanganDua) => {
  return bilanganSatu + bilanganDua;
};

export const pengurangan = (bilanganSatu, bilanganDua) => {
  return bilanganSatu - bilanganDua;
};

export const pembagian = (bilanganSatu, bilanganDua) => {
  return bilanganSatu / bilanganDua;
};

export const perkalian = (bilanganSatu, bilanganDua) => {
  return bilanganSatu * bilanganDua;
};

export const rataRata = (
  bilanganSatu,
  bilanganDua,
  bilanganTiga,
  bilanganEmpat,
  bilanganLima
) => {
  return (
    (bilanganSatu + bilanganDua + bilanganTiga + bilanganEmpat + bilanganLima) /
    5
  );
};

export const sisaBagi = (bilanganSatu, bilanganDua) => {
  return bilanganSatu % bilanganDua;
};

export const luasPersegi = (sisi) => {
  return sisi * sisi;
};

export const luasLingkaran = (phi, jariJari) => {
  if (phi === 3.14) {
    return 3.14 * jariJari * jariJari;
  } else if (phi === 22 / 7) {
    return (22 / 7) * jariJari * jariJari;
  } else {
    return "phi harus 3.14 atau 22/7";
  }
};

export const luasKubus = (sisi) => {
  return 6 * sisi * sisi;
};

export const volumeKubus = (sisi) => {
  return sisi * sisi * sisi;
};
