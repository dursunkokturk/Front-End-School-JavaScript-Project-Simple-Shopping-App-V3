const products = [
  {
    name: "Elma",
    type: "meyve",
    color: "kırmızı/yeşil",
    producer: "Ege Tarım",
    purchasePrice: 8,
    salePrice: 12,
  },
  {
    name: "Muz",
    type: "meyve",
    color: "sarı",
    producer: "Tropikal Meyve Ltd.",
    purchasePrice: 15,
    salePrice: 22,
  },
  {
    name: "Çilek",
    type: "meyve",
    color: "kırmızı",
    producer: "Akdeniz Çiftliği",
    purchasePrice: 18,
    salePrice: 26,
  },
  {
    name: "Portakal",
    type: "meyve",
    color: "turuncu",
    producer: "Finike Tarım",
    purchasePrice: 7,
    salePrice: 11,
  },
  {
    name: "Üzüm",
    type: "meyve",
    color: "mor/yeşil",
    producer: "Manisa Bağları",
    purchasePrice: 14,
    salePrice: 20,
  },
  {
    name: "Karpuz",
    type: "meyve",
    color: "yeşil/kırmızı",
    producer: "Adana Tarım",
    purchasePrice: 5,
    salePrice: 9,
  },
  {
    name: "Armut",
    type: "meyve",
    color: "sarı/yeşil",
    producer: "Bursa Meyvecilik",
    purchasePrice: 9,
    salePrice: 14,
  },
  {
    name: "Kiraz",
    type: "meyve",
    color: "kırmızı",
    producer: "Isparta Bahçeleri",
    purchasePrice: 20,
    salePrice: 30,
    isSweet: true
  },
  {
    name: "Şeftali",
    type: "meyve",
    color: "turuncu/sarı",
    producer: "Mersin Tarım",
    purchasePrice: 13,
    salePrice: 19,
  },
  {
    name: "Limon",
    type: "meyve",
    color: "sarı",
    producer: "Antalya Narenciye",
    purchasePrice: 6,
    salePrice: 10,
  },

  {
    name: "Havuç",
    type: "sebze",
    color: "turuncu",
    producer: "Konya Tarım",
    purchasePrice: 4,
    salePrice: 7,
  },
  {
    name: "Domates",
    type: "sebze",
    color: "kırmızı",
    producer: "Çanakkale Tarım",
    purchasePrice: 6,
    salePrice: 10,
  },
  {
    name: "Brokoli",
    type: "sebze",
    color: "yeşil",
    producer: "Karadeniz Organik",
    purchasePrice: 10,
    salePrice: 16,
  },
  {
    name: "Salatalık",
    type: "sebze",
    color: "yeşil",
    producer: "Sera Üretim AŞ",
    purchasePrice: 5,
    salePrice: 8,
  },
  {
    name: "Biber",
    type: "sebze",
    color: "kırmızı/yeşil/sarı",
    producer: "Ege Sera",
    purchasePrice: 8,
    salePrice: 13,
  },
  {
    name: "Patlıcan",
    type: "sebze",
    color: "mor",
    producer: "Hatay Tarım",
    purchasePrice: 7,
    salePrice: 12,
  },
  {
    name: "Ispanak",
    type: "sebze",
    color: "yeşil",
    producer: "Trakya Organik",
    purchasePrice: 6,
    salePrice: 9,
  },
  {
    name: "Patates",
    type: "sebze",
    color: "sarı/kahverengi",
    producer: "Niğde Çiftliği",
    purchasePrice: 5,
    salePrice: 8,
  },
  {
    name: "Soğan",
    type: "sebze",
    color: "beyaz/mor",
    producer: "Amasya Tarım",
    purchasePrice: 4,
    salePrice: 7,
  },
  {
    name: "Kabak",
    type: "sebze",
    color: "yeşil/sarı",
    producer: "Antalya Sera",
    purchasePrice: 5,
    salePrice: 9,
  }
];

for (const product of products) {
  allVegetablesAndFruits.innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td>${product.type}</td>
      <td>${product.producer}</td>
      <td>${product.purchasePrice}</td>
      <td>${product.salePrice}</td>
    </tr>
    `;
}

console.log("Tüm Sebze ve Meyveler");
for (let i = 0; i < products.length; i++) {
  console.log(`Ürün Adı : ${products[i].name}`);
}

let userBasket = [];

let userProducts = prompt("Eklemek İstediğiniz Ürünleri Giriniz");

if (userProducts) {

  // Arama Islemi Bittiginde Bulunan Sonuclara index Numarasi Vermek Gerekiyor
  // Baslangic Degeri Olarak Urun Yok Durumunu Veriyoruz 
  let productIndex = -1;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === userProducts.toLowerCase()) {

      // Arama Isleminden Sonra Bulunan Data'lar Icin Index Numarasi Veriyoruz
      productIndex = i;
      break;
    }
  }

  // products Array Icinde Yapilan Aranan Var Ise
  if (productIndex !== -1) {

    // Bulunan Sonucu Sepete Ekliyoruz
    userBasket.push(products[productIndex]);

    // Products Array Icinden Siliyoruz
    products.splice(productIndex, 1);

    console.log("Ürün Sepete Eklendi!");

  } else {
    console.log("Ürün Bulunamadı!");
  }
}


console.log("Tüm Sebze ve Meyveler Güncel Liste");
if (products.length === 0) {
  console.log("Sebze ve Meyveler Genel Liste Boş.");
} else {
  for (let i = 0; i < products.length; i++) {
    console.log(`Ürün Adı : ${products[i].name}`);
  }
}

console.log("Sepetteki Sebze ve Meyveler");
for (let i = 0; i < userBasket.length; i++) {
  console.log(`Ürün Adı : ${userBasket[i].name}`);
}