const testimonials = [
  {
    image: "https://cdn.idntimes.com/content-images/community/2023/05/5f6fa1a35b9240668d0824540ede58bb-241112060-223804176378243-6627428181004591071-n-b9c7fac7543a061202919ad3b742ab1f-993bfed02ebac1febcd7afa806ae76bb.jpg",
    content: "SEMUANYA BAGUSS",
    author: "PATRICK",
    rating: 5,
  },
  {
    image: "https://static.wikia.nocookie.net/oscaroasis/images/9/97/Oscar2.png/revision/latest?cb=20191218135005",
    content: "AIR",
    author: "OSCAR",
    rating: 1,
  },
  {
    image: "https://i.pinimg.com/564x/cf/40/97/cf40976ea07e6b1c3f89ada6c439ce48.jpg",
    content: "KUNING",
    author: "LARVA",
    rating: 4,
  },
  {
    image: "https://yt3.googleusercontent.com/o1hRbLtWDZNXIdtMqyEdJ2SzyvS5kTfe_sOpY1uCcU_-p8_bgbcve0l3DOsJwvzC05IIyTjxmQ=s900-c-k-c0x00ffffff-no-rj",
    content: "LUCU",
    author: "RABIT",
    rating: 3,
  },
];

function getAllTestimonials() {
  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
      <img src="${testimonial.image}" class="profile-testimonial" />
      <p class="quote">"${testimonial.content}"</p>
      <p class="author">- ${testimonial.author}</p>
      <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

function getTestimonialsByRating(rating) {
  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (testimonial.rating === rating) {
      return true;
    }
  });

  const testimonialHTML = filteredTestimonials.map((testimonial) => {
    return `<div class="testimonial">
      <img src="${testimonial.image}" class="profile-testimonial" />
      <p class="quote">"${testimonial.content}"</p>
      <p class="author">- ${testimonial.author}</p>
      <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

getAllTestimonials();

const buttonRatings = [
  {
    name: "All",
    rating: "all",
  },
  {
    name: "1",
    rating: 1,
  },
  {
    name: "2",
    rating: 2,
  },
  {
    name: "3",
    rating: 3,
  },
  {
    name: "4",
    rating: 4,
  },
  {
    name: "5",
    rating: 5,
  },
];

function showButtonRatings() {
  const buttonRatingsHTML = buttonRatings.map((buttonRating) => {
    if (buttonRating.name === "All") {
      return `<button onclick="getAllTestimonials()" class="rating-btn">${buttonRating.name}</button>`;
    } else {
      return `<button onclick="getTestimonialsByRating(${buttonRating.rating})" class="rating-btn">
              ${buttonRating.name} <i class="fa-solid fa-star"></i>
            </button>`;
    }
  });

  document.getElementById("button-ratings").innerHTML = buttonRatingsHTML.join("");
}

showButtonRatings();
