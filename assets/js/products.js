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

const productStock = [
  {
    stock: 120
  },
  {
    stock: 85
  },
  {
    stock: 60
  },
  {
    stock: 150
  },
  {
    stock: 90
  },
  {
    stock: 200
  },
  {
    stock: 75
  },
  {
    stock: 40
  },
  {
    stock: 95
  },
  {
    stock: 180
  },
  {
    stock: 140
  },
  {
    stock: 160
  },
  {
    stock: 55
  },
  {
    stock: 130
  },
  {
    stock: 110
  },
  {
    stock: 100
  },
  {
    stock: 125
  },
  {
    stock: 300
  },
  {
    stock: 280
  },
  {
    stock: 115
  }
];

for (let i = 0; i < products.length; i++) {
  allVegetablesAndFruits.innerHTML += `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].type}</td>
      <td>${products[i].producer}</td>
      <td>${products[i].purchasePrice}</td>
      <td>${products[i].salePrice}</td>
      <td>${productStock[i].stock > 0 ? productStock[i].stock : "Tükendi"}</td>
    </tr>
    `;
}

console.log("Tüm Sebze ve Meyveler");
for (let i = 0; i < products.length; i++) {
  console.log(`Ürün Adı : ${products[i].name} Ürün Stok : ${productStock[i].stock}`);
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

  // products Array Icinde Urun Var Ise
  if (productIndex !== -1) {

    // productStock Array Icinde Urunun Stock Var Ise
    if (productStock[productIndex].stock > 0) {

      // Bulunan Sonucu Sepete Ekliyoruz
      userBasket.push(products[productIndex]);

      // Kullanici Urunu Sepete Ekledikten Sonra 
      // Products Array Icindeki Urunun index Numarasi Uzerinden 
      // productStock Array Icinde Stock Sayisini Azaltiyoruz
      productStock[productIndex].stock--;

      console.log(`${products[productIndex].name} Ürün Sepete Eklendi!`);

      // Products Array Icindeki Urunun index Numarasi Uzerinden 
      // productStock Array Icinde Stock Sayisini Kontrol Ediyoruz
    } else if (productStock[productIndex].stock === 0) {
      console.log(`${products[productIndex].name} Stokta Yok Sepete Eklenemez`);
    }
  } else {
    console.log("Ürün Bulunamadı!");
  }
}

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }


console.log("Tüm Sebze ve Meyveler Güncel Liste");
if (products.length === 0) {
  console.log("Sebze ve Meyveler Genel Liste Boş.");
} else {
  for (let i = 0; i < products.length; i++) {
    console.log(`Ürün Adı : ${products[i].name} Ürün Stok : ${productStock[i].stock}`);
  }
}

console.log("Sepetteki Sebze ve Meyveler");
for (let i = 0; i < userBasket.length; i++) {

  // userBasket Array Icindeki Urunlerin index Numarasini Buluyoruz
  const originalIndex = products.indexOf(userBasket[i]);

  // userBasket Array Icindeki Urunlerin index Numarasi Uzerinden Guncel Stok Verisini Aliyoruz
  console.log(`Ürün Adı : ${userBasket[i].name} Ürün Satış Fiyatı : ${userBasket[i].salePrice} Kalan Stok : ${productStock[originalIndex].stock}`);

  let totalPrice = 0;
  for (let i = 0; i < userBasket.length; i++) {
    totalPrice += userBasket[i].salePrice;
  }
  console.log(`Toplam Fiyat : ${totalPrice}`)
}