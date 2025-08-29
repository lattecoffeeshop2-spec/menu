const categories = [
  "Hot", "Cold", "Milkshake", "Boba", "Refresher", "Frappe", "Sugar Free", "Shisha"
];

const menuCategoriesDiv = document.getElementById("menuCategories");
categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerText = cat;
  menuCategoriesDiv.appendChild(div);
});

// Owner Panel Logic
const ownerBtn = document.getElementById("ownerBtn");
const ownerPanel = document.getElementById("ownerPanel");
const loginBtn = document.getElementById("loginBtn");
const settings = document.getElementById("settings");

ownerBtn.onclick = () => ownerPanel.classList.toggle("hidden");
loginBtn.onclick = () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "latte") {
    settings.classList.remove("hidden");
  } else {
    alert("Wrong login!");
  }
};

// Add Item Function
const addItemBtn = document.getElementById("addItemBtn");
const menuEditor = document.getElementById("menuEditor");

addItemBtn.onclick = () => {
  const div = document.createElement("div");
  div.innerHTML = '<input type="text" placeholder="Item name"> <input type="number" placeholder="Price"> <input type="file">';
  menuEditor.appendChild(div);
};
