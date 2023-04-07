// Modal functionality

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

// Listen for form submit

document.getElementById("leave-review").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(123);
}
