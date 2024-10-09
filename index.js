const loadFood = async () => {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const res = await fetch(url);
    const data = await res.json();
    categories(data.categories);
  } catch (error) {
    console.log("ERROR:", error);
  }
};

const categories = (data) => {
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerHTML = "";

  data.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-side bg-base-100 shadow-lg w-full h-full my-8">
        <figure class="w-1/3">
          <img
            class="object-center w-36 auto"
            src="${item.strCategoryThumb}"
            alt="${item.strCategory}"
          />
        </figure>
        <div class="card-body w-2/3">
          <h2 class="card-title">${item.strCategory}</h2>
          <p>
            ${
              item.strCategoryDescription
                ? item.strCategoryDescription.substring(0, 100) + "..."
                : "No description available."
            }
          </p>
          <a href="#" class="text-blue-500">View Details</a>
        </div>
      </div>
    `;

    foodContainer.appendChild(div);
  });
};

loadFood();
