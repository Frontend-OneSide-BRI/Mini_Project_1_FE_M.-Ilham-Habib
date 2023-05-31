var data = [
  {
    id: 1,
    category: "music",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    image:
      "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjg1NTQ4MjIy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Boat on Calm Water",
    title: "Wonderful Music",
  },
  {
    id: 2,
    category: "music",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    image:
      "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjg1NTQ4MjQ4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "The Power Of Music",
  },
  {
    id: 3,
    category: "music",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjg1NTQ4Mjk2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "The Music",
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "music",
    image:
      "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjg1NTQ4MzE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    title: "Sound Of Good",
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Wintry Mountain Landscape",
    title: "The Power",
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Wintry Mountain Landscape",
    title: "LandMark",
  },
  {
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://images.pexels.com/photos/3889868/pexels-photo-3889868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Wintry Mountain Landscape",
    title: "Awesome",
  },
  {
    id: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=200",
    alt: "Wintry Mountain Landscape",
    title: "Uniq Place",
  },
  {
    id: 9,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "building",
    image:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=200",
    alt: "Wintry Mountain Landscape",
    title: "The power building",
  },
  {
    id: 10,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "sport",
    image:
      "https://images.unsplash.com/photo-1512412046876-f386342eddb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnR8fHx8fHwxNjg1NTQ4Mzc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "The Man",
  },
  {
    id: 11,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "sport",
    image:
      "https://images.unsplash.com/photo-1546608235-3310a2494cdf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnR8fHx8fHwxNjg1NTQ4NDc5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "The Thing",
  },
  {
    id: 12,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "sport",
    image:
      "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnR8fHx8fHwxNjg1NTQ4NTIz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "Power Of Thing",
  },
  {
    id: 13,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, similique.",
    category: "sport",
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnR8fHx8fHwxNjg1NTQ4NTQ5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
    alt: "Wintry Mountain Landscape",
    title: "Sport",
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
          <p>${item.title}</p>
        </div>`;
      imageContainer.innerHTML += card;
    });
  } else {
    data.forEach(function (item) {
      let card = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-items-center align-items-center" id="imageContainer">
          <img src="${item.image}" alt="${item.alt}" class="w-100 shadow-1-strong rounded mb-4">
          <p>${item.title}</p>
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
          <p>${item.title}</p>
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
          <p>${item.title}</p>
        </div>`;
  imageContainer.innerHTML += card;
});
//Initially display all products
