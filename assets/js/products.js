const products = [
  {
    name: "Elma",
    type: "meyve",
    color: "kırmızı/yeşil",
    calories: 52,
    season: "sonbahar",
    vitamins: ["C", "B6"],
    isSweet: true
  },
  {
    name: "Muz",
    type: "meyve",
    color: "sarı",
    calories: 89,
    season: "yaz",
    vitamins: ["B6", "C"],
    isSweet: true
  },
  {
    name: "Çilek",
    type: "meyve",
    color: "kırmızı",
    calories: 32,
    season: "ilkbahar",
    vitamins: ["C", "K"],
    isSweet: true
  },
  {
    name: "Portakal",
    type: "meyve",
    color: "turuncu",
    calories: 47,
    season: "kış",
    vitamins: ["C", "A"],
    isSweet: true
  },
  {
    name: "Üzüm",
    type: "meyve",
    color: "mor/yeşil",
    calories: 69,
    season: "yaz",
    vitamins: ["C", "K", "B6"],
    isSweet: true
  },
  {
    name: "Karpuz",
    type: "meyve",
    color: "yeşil/kırmızı",
    calories: 30,
    season: "yaz",
    vitamins: ["C", "A"],
    isSweet: true
  },
  {
    name: "Armut",
    type: "meyve",
    color: "sarı/yeşil",
    calories: 57,
    season: "sonbahar",
    vitamins: ["C", "K"],
    isSweet: true
  },
  {
    name: "Kiraz",
    type: "meyve",
    color: "kırmızı",
    calories: 50,
    season: "yaz",
    vitamins: ["C", "A"],
    isSweet: true
  },
  {
    name: "Şeftali",
    type: "meyve",
    color: "turuncu/sarı",
    calories: 39,
    season: "yaz",
    vitamins: ["C", "A", "E"],
    isSweet: true
  },
  {
    name: "Limon",
    type: "meyve",
    color: "sarı",
    calories: 29,
    season: "kış",
    vitamins: ["C", "B6"],
    isSweet: false
  },

  {
    name: "Havuç",
    type: "sebze",
    color: "turuncu",
    calories: 41,
    season: "sonbahar",
    vitamins: ["A", "K", "B6"],
    isSweet: false
  },
  {
    name: "Domates",
    type: "sebze",
    color: "kırmızı",
    calories: 18,
    season: "yaz",
    vitamins: ["C", "K", "A"],
    isSweet: false
  },
  {
    name: "Brokoli",
    type: "sebze",
    color: "yeşil",
    calories: 34,
    season: "kış",
    vitamins: ["C", "K", "A"],
    isSweet: false
  },
  {
    name: "Salatalık",
    type: "sebze",
    color: "yeşil",
    calories: 16,
    season: "yaz",
    vitamins: ["K", "C"],
    isSweet: false
  },
  {
    name: "Biber",
    type: "sebze",
    color: "kırmızı/yeşil/sarı",
    calories: 31,
    season: "yaz",
    vitamins: ["C", "A", "B6"],
    isSweet: false
  },
  {
    name: "Patlıcan",
    type: "sebze",
    color: "mor",
    calories: 25,
    season: "yaz",
    vitamins: ["B6", "K"],
    isSweet: false
  },
  {
    name: "Ispanak",
    type: "sebze",
    color: "yeşil",
    calories: 23,
    season: "ilkbahar",
    vitamins: ["K", "A", "C"],
    isSweet: false
  },
  {
    name: "Patates",
    type: "sebze",
    color: "sarı/kahverengi",
    calories: 77,
    season: "sonbahar",
    vitamins: ["C", "B6"],
    isSweet: false
  },
  {
    name: "Soğan",
    type: "sebze",
    color: "beyaz/mor",
    calories: 40,
    season: "yaz",
    vitamins: ["C", "B6"],
    isSweet: false
  },
  {
    name: "Kabak",
    type: "sebze",
    color: "yeşil/sarı",
    calories: 17,
    season: "yaz",
    vitamins: ["C", "A", "K"],
    isSweet: false
  }
];

console.log("Tüm Sebze ve Meyveler");
for (let i = 0; i < products.length; i++) {
  console.log(`Ürün Adı : ${products[i].name} Ürün Türü : ${products[i].type} Ürün Rengi : ${products[i].color} Ürün Kalarisi : ${products[i].calories} Ürün Sezonu : ${products[i].season} Ürün Vitamin Türü : ${products[i].vitamins} Ürün Tatlı Mı : ${products[i].isSweet}`);
}

console.log("Tüm Sebzeler");
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "sebze") {
    console.log(`Ürün Adı : ${products[i].name} Ürün Türü : ${products[i].type} Ürün Rengi : ${products[i].color} Ürün Kalarisi : ${products[i].calories} Ürün Sezonu : ${products[i].season} Ürün Vitamin Türü : ${products[i].vitamins} Ürün Tatlı Mı : ${products[i].isSweet}`);
  }
}

console.log("Tüm Meyveler");
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "meyve") {
    console.log(`Ürün Adı : ${products[i].name} Ürün Türü : ${products[i].type} Ürün Rengi : ${products[i].color} Ürün Kalarisi : ${products[i].calories} Ürün Sezonu : ${products[i].season} Ürün Vitamin Türü : ${products[i].vitamins} Ürün Tatlı Mı : ${products[i].isSweet}`);
  }
}

for (const product of products) {
  allVegetablesAndFruits.innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td>${product.type}</td>
      <td>${product.color}</td>
      <td>${product.calories}</td>
      <td>${product.season}</td>
      <td>${product.vitamins}</td>
      <td>${product.isSweet ? "Evet":"Hayır"}</td>
    </tr>
    `;
}

for (const product of products) {
  if(product.type === "sebze"){
    allVegetables.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td>${product.type}</td>
        <td>${product.color}</td>
        <td>${product.calories}</td>
        <td>${product.season}</td>
        <td>${product.vitamins}</td>
        <td>${product.isSweet ? "Evet":"Hayır"}</td>
      </tr>
      `;
  }
}

for (const product of products) {
  if(product.type === "meyve"){
    allFruits.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td>${product.type}</td>
        <td>${product.color}</td>
        <td>${product.calories}</td>
        <td>${product.season}</td>
        <td>${product.vitamins}</td>
        <td>${product.isSweet ? "Evet":"Hayır"}</td>
      </tr>
      `;
  }
}