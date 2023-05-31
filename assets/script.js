var data = [
  {
    id: 1,
    category: "music",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Boat on Calm Water",
    title: "gambar1",
  },
  {
    id: 2,
    category: "sport",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar2",
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar3",
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "music",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar3",
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar4",
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "music",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar5",
  },
  {
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    alt: "Wintry Mountain Landscape",
    title: "gambar5",
  },
];

// Ambil elemen container gambar
var imageContainer = document.getElementById("imageContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Mencegah refresh halaman
    performSearch();
  }
});

function filterProduct(category) {
  console.log(category);
  let filterData = data.filter((e) => e?.category?.toLowerCase() === category);
  console.log(category);
  console.log(filterData, "test");
  let dataDiv = document.getElementById("imageContainer");
  console.log(dataDiv);

  dataDiv.innerHTML = "";

  if (filterData.length) {
    filterData.forEach(function (item) {
      let card = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-items-center align-items-center" id="imageContainer">
          <img src="${item.image}" alt="${item.alt}" class="w-100 shadow-1-strong rounded mb-4">
        </div>`;
      imageContainer.innerHTML += card;
    });
  } else {
    data.forEach(function (item) {
      let card = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-items-center align-items-center" id="imageContainer">
          <img src="${item.image}" alt="${item.alt}" class="w-100 shadow-1-strong rounded mb-4">
        </div>`;
      imageContainer.innerHTML += card;
    });
  }
}

function performSearch() {
  const searchValue = searchInput.value.toLowerCase();

  // Lakukan operasi pencarian di data
  const searchResults = data.filter(function (item) {
    return item.title.toLowerCase().includes(searchValue);
  });

  // Hapus elemen sebelumnya
  imageContainer.innerHTML = "";

  // Tampilkan hasil pencarian
  searchResults.forEach(function (item) {
    let card = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-items-center align-items-center" id="imageContainer">
          <img src="${item.image}" alt="${item.alt}" class="w-100 shadow-1-strong rounded mb-4">
        </div>`;
    imageContainer.innerHTML += card;

    // Hapus nilai input setelah pencarian selesai
    searchInput.value = "";
    console.log(searchInput);
  });
}

// Loop melalui data pertama dan buat elemen gambar untuk imageContainer
data.forEach(function (item) {
  let card = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-items-center align-items-center" id="imageContainer">
          <img src="${item.image}" alt="${item.alt}" class="w-100 shadow-1-strong rounded mb-4">
        </div>`;
  imageContainer.innerHTML += card;
});
//Initially display all products
