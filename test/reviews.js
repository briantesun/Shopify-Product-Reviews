// Opening and closing modal

var leaveReviewModal = document.getElementById("leave-review-modal-complete");
var leaveReviewModalOpen = document.getElementById("leave-review-modal-open");
var leaveReviewModalExit = document.getElementById("leave-review-modal-exit");

leaveReviewModalOpen.onclick = function () {
  leaveReviewModal.style.display = "block";
};

leaveReviewModalExit.onclick = function () {
  leaveReviewModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == leaveReviewModal) {
    leaveReviewModal.style.display = "none";
  }
};

// Rating selector functionality

class StarRate {
  constructor() {
    this.starsContainer = document.querySelector(".stars-container");
    this.stars = document.querySelectorAll(".star");

    this.starCounter = 0;

    this.hoverHandler = this.hoverHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    this.selectStars = this.selectStars.bind(this);
    this.fillStars = this.fillStars.bind(this);

    this.eventListeners();
  }

  eventListeners() {
    this.starsContainer.addEventListener("click", this.selectStars);
    this.starsContainer.addEventListener("mouseover", this.hoverHandler);
    this.starsContainer.addEventListener("mouseleave", this.mouseLeaveHandler);
  }

  fillStar(element) {
    this.unFillStar();
    element.setAttribute("filled", true);
    this.fillStars(element);
  }

  unFillStar() {
    [...this.stars].map((star) => star.removeAttribute("filled"));
  }

  hoverHandler(e) {
    if (e.target.matches(".star")) {
      this.fillStar(e.target);
    } else if (e.target.matches(".material-icons")) {
      this.fillStar(e.target.parentElement);
    }
  }

  mouseLeaveHandler(e) {
    this.lastStar
      ? (() => {
          this.unFillStar();
          this.starCounter = 0;
          this.fillStars(this.lastStar);
        })()
      : (() => {
          this.starCounter = 0;
          this.unFillStar();
        })();
    this.prevTarget = this.lastStar;
  }

  fillStars(el) {
    el.setAttribute("filled", true);
    el.previousElementSibling
      ? this.fillStars(el.previousElementSibling)
      : null;
    this.starCounter++;
  }

  selectStars(e) {
    this.starCounter = 0;
    if (e.target.matches(".star")) {
      this.lastStar = e.target;
    } else if (e.target.matches(".material-icons")) {
      this.lastStar = e.target.parentElement;
    }
    if (this.prevTarget == this.lastStar) {
      this.prevTarget = null;
      return (this.lastStar = null);
    }
    this.isFirstChild();
  }

  isFirstChild() {
    if (this.lastStar == this.starsContainer.firstElementChild) {
      if (this.prevTarget == this.lastStar) {
        this.lastStar = null;
      }
    }
  }
}

new StarRate();

// Rating selector input functionality

var rating = 0;

document.getElementById("star1").addEventListener("click", rating1);

function rating1() {
  var star1 = document.getElementById("star1");

  rating = star1.getAttribute("data-rating-value");
  rating = parseInt(rating);
}

document.getElementById("star2").addEventListener("click", rating2);

function rating2() {
  var star2 = document.getElementById("star2");

  rating = star2.getAttribute("data-rating-value");
  rating = parseInt(rating);
}

document.getElementById("star3").addEventListener("click", rating3);

function rating3() {
  var star3 = document.getElementById("star3");

  rating = star3.getAttribute("data-rating-value");
  rating = parseInt(rating);
}

document.getElementById("star4").addEventListener("click", rating4);

function rating4() {
  var star4 = document.getElementById("star4");

  rating = star4.getAttribute("data-rating-value");
  rating = parseInt(rating);
}

document.getElementById("star5").addEventListener("click", rating5);

function rating5() {
  var star5 = document.getElementById("star5");

  rating = star5.getAttribute("data-rating-value");
  rating = parseInt(rating);
}

// Date functionality

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = new Date();

var dateReviewed =
  monthNames[today.getMonth()] +
  " " +
  today.getDate() +
  ", " +
  today.getFullYear();

// Modal functionality

// Listen for form submit
document
  .getElementById("leave-review-form")
  .addEventListener("submit", submitReview);

function submitReview(event) {
  // Get values
  var name = getInputValue("name-section-input");
  var review = getInputValue("review-section-input");

  // Form validation
  var reviewSectionError = document.getElementById("review-section-error");

  if (review == "") {
    event.preventDefault();
    reviewSectionError.style.display = "flex";
  }

  var ratingSectionError = document.getElementById("rating-section-error");

  if (rating == 0) {
    event.preventDefault();
    ratingSectionError.style.display = "flex";
  }

  if (name == "") {
    name = "Anonymous";
  }

  if (review == "" || rating == 0) {
    return;
  }

  var reviewData = {
    rating: rating,
    review: review,
    name: name,
    date: dateReviewed,
  };

  fetch(
    "https://reviewapp-35b60-default-rtdb.firebaseio.com/" +
      storeId +
      "/" +
      productId +
      ".json",
    {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Function to get form values
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

// Live form validation
document
  .getElementById("review-section-input")
  .addEventListener("blur", reviewInputErrorAdder);

function reviewInputErrorAdder() {
  var review = document.getElementById("review-section-input").value;
  var reviewSectionError = document.getElementById("review-section-error");

  if (review == "") {
    reviewSectionError.style.display = "flex";
  }
}

document
  .getElementById("review-section-input")
  .addEventListener("input", reviewInputErrorRemover);

function reviewInputErrorRemover() {
  var review = document.getElementById("review-section-input").value;
  var reviewSectionError = document.getElementById("review-section-error");

  if (review != "") {
    reviewSectionError.style.display = "none";
  }
}

document
  .getElementById("star1")
  .addEventListener("click", ratingInputErrorRemover);
document
  .getElementById("star2")
  .addEventListener("click", ratingInputErrorRemover);
document
  .getElementById("star3")
  .addEventListener("click", ratingInputErrorRemover);
document
  .getElementById("star4")
  .addEventListener("click", ratingInputErrorRemover);
document
  .getElementById("star5")
  .addEventListener("click", ratingInputErrorRemover);

var ratingSectionError = document.getElementById("rating-section-error");

function ratingInputErrorRemover() {
  if (rating != 0) {
    ratingSectionError.style.display = "none";
  }
}
