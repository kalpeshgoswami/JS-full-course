
let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    category: "electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "electronics"
  },
  {
    id: 3,
    name: "Laptop",
    price: 55999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    category: "electronics"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1499,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    category: "electronics"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
    category: "electronics"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    category: "electronics"
  },
  {
    id: 7,
    name: "DSLR Camera",
    price: 45999,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    category: "electronics"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    category: "fashion"
  },
  {
    id: 9,
    name: "Backpack",
    price: 1299,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    category: "fashion"
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 999,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    category: "fashion"
  },
  {
    id: 11,
    name: "Office Chair",
    price: 6999,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
    category: "furniture"
  },
  {
    id: 12,
    name: "Coffee Mug",
    price: 499,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    category: "home"
  },
  {
    id: 13,
    name: "Mobile Phone",
    price: 25999,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    category: "electronics"
  },
  {
    id: 14,
    name: "Perfume",
    price: 1799,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    category: "fashion"
  },
  {
    id: 15,
    name: "T-Shirt",
    price: 799,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    category: "fashion"
  },
];

function saveData() {
  localStorage.setItem("products", JSON.stringify(products));
}

function loadData() {
  let stored = localStorage.getItem("products");
  if (stored) {
    products = JSON.parse(stored);
  } else {
    saveData();
  }
}

function addProduct() {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
  let category = document.getElementById("category").value;

  if (!title || !price) {
    alert("Title and Price are required!");
    return;
  }

  let product = {
    id: Date.now(),
    name: title,
    price: Number(price),
    image: image || "https://via.placeholder.com/100",
    category: category || "general"
  };

  products.push(product);
  saveData();
  renderProducts();

  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
  document.getElementById("category").value = "";
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveData();
  renderProducts();
}

function editProduct(id) {
  let product = products.find(p => p.id === id);

  let newName = prompt("Enter new name", product.name);
  let newPrice = prompt("Enter new price", product.price);

  if (newName && newPrice) {
    product.name = newName;
    product.price = Number(newPrice);

    saveData();
    renderProducts();
  }
}

function renderProducts() {
  let list = document.getElementById("productList");
  list.innerHTML = "";

  let search = document.getElementById("search").value;
  let filter = document.getElementById("filter").value;
  let sort = document.getElementById("sort").value;

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (p.category || "").toLowerCase().includes(filter)
  );

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  filtered.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}" onerror="this.src='https://via.placeholder.com/80'">
      <div>
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <p>${p.category}</p>
        <button onclick="editProduct(${p.id})">Edit</button>
         <button onclick="addToCart(${p.id})">Add To Cart</button>
        <button onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    `;

    list.appendChild(div);
  });
}

loadData();
renderProducts();