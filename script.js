const poems = [
    "Kau hadir bagai hujan di tengah kemarau,\nMembasahi hatiku yang lama tandus.",
    "Tatapanmu, meski tak untukku,\nMenghidupkan angin lembut dalam dadaku.",
    "Engkau jauh, namun pikiranku selalu mendekapmu,\nBagaikan bintang yang tak bisa kugapai, namun tetap kupandangi.",
    "Jika usia adalah jurang,\nBiarlah aku meniti kata dan doa agar kutemu jembatannya."
];

const today = new Date();
const index = today.getDate() % poems.length;

document.getElementById('poem').innerText = poems[index];
