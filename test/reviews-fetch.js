function fetchData() {
  fetch(
    "https://reviewapp-35b60-default-rtdb.firebaseio.com/" +
      storeId +
      "/" +
      productId +
      ".json"
  )
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }

      return response.json();
    })
    .then((data) => {
      const dataArray = Object.values(data).reverse();

      const html = dataArray
        .map((reviews) => {
          if (reviews.rating == 1) {
            return `
            <div class="review-module">
              <div class="review-table-star-container">
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
              </div>
  
                <p class="review">${reviews.review}</p>
                <p class="reviewer">${reviews.name}</p>
                <p class="date-written">Written ${reviews.date}</p>
            </div>
              `;
          }

          if (reviews.rating == 2) {
            return `
            <div class="review-module">
              <div class="review-table-star-container">
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
              </div>
  
                <p class="review">${reviews.review}</p>
                <p class="reviewer">${reviews.name}</p>
                <p class="date-written">Written ${reviews.date}</p>
            </div>
              `;
          }

          if (reviews.rating == 3) {
            return `
            <div class="review-module">
              <div class="review-table-star-container">
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
              </div>
  
                <p class="review">${reviews.review}</p>
                <p class="reviewer">${reviews.name}</p>
                <p class="date-written">Written ${reviews.date}</p>
            </div>
              `;
          }

          if (reviews.rating == 4) {
            return `
            <div class="review-module">
              <div class="review-table-star-container">
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-unfilled"> star </i>
              </div>
  
                <p class="review">${reviews.review}</p>
                <p class="reviewer">${reviews.name}</p>
                <p class="date-written">Written ${reviews.date}</p>
            </div>
              `;
          }

          if (reviews.rating == 5) {
            return `
            <div class="review-module">
              <div class="review-table-star-container">
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
                <i class="material-icons review-table-star-filled"> star </i>
              </div>
  
                <p class="review">${reviews.review}</p>
                <p class="reviewer">${reviews.name}</p>
                <p class="date-written">Written ${reviews.date}</p>
            </div>
              `;
          }
        })
        .join("");

      document
        .querySelector("#reviews-data")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
