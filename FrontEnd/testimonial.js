const testimonials = [
  {
    name: "Magnus Carlsen",
    imageURL:
      "https://imagevars.gulfnews.com/2023/05/31/SPO-Magnus-Carlsen-1-1685549394955_1887292ac21_medium.jpg",
    testiTxt:
      "The photography skills are simply breathtaking! Each shot captures the essence of the moment with stunning clarity and creativity.",
  },

  {
    name: "Hikaru Nakamura",
    imageURL:
      "https://pbs.twimg.com/profile_images/1536725744029663234/GS1jjuXF_400x400.jpg",
    testiTxt:
      "Incredible communication throughout the entire process. I felt completely understood and the results exceeded my expectations!",
  },

  {
    name: "Viswanathan Anand",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmRtknNFJ7_yne8G57Acu9MKbWshsQTIGDw&s",
    testiTxt:
      "The level of detail and artistry in the photographs is absolutely amazing. Every picture tells a story with such beauty and precision.",
  },

  {
    name: "Big Show",
    imageURL:
      "https://destinationksa.com/wp-content/uploads/2015/10/big-show.jpg",
    testiTxt:
      "Amazing work! The communication was clear, and the final images were beyond what I could have imagined. A true professional in every sense.",
  },

  {
    name: "John Cena",
    imageURL:
      "https://phantom-marca.unidadeditorial.es/ae30823506bdb596eeaeab1a0464d690/resize/828/f/jpg/assets/multimedia/imagenes/2023/02/05/16755519728234.jpg",
    testiTxt:
      "The photos turned out beautifully! The attention to detail and the ability to capture raw emotion was simply unmatched.",
  },

  {
    name: "Brock Lesnar",
    imageURL:
      "https://preview.redd.it/what-unpopular-opinion-do-you-have-about-brock-lesnar-v0-7nr0kojigvda1.jpg?width=640&crop=smart&auto=webp&s=a548189e7c8ba2dca6c66fa095d9d3c7273f733a",
    testiTxt:
      "Absolutely stunning photography! The experience was seamless, and the photographer's communication skills made everything so easy.",
  },
];

const imgEl = document.querySelector("#pic");
const userTxtEl = document.querySelector("#user-txt");
const userNameEl = document.querySelector("#user-name");

const imgEl_2 = document.querySelector("#pic-2");
const userTxtEl_2 = document.querySelector("#user-txt-2");
const userNameEl_2 = document.querySelector("#user-name-2");

let index = 0;
let index2 = Math.ceil(testimonials.length / 2);

updateTestimonial();
updateTestimonial_2();

function updateTestimonial() {
  const { name, imageURL, testiTxt } = testimonials[index];

  imgEl.src = imageURL;
  userTxtEl.innerText = testiTxt;
  userNameEl.innerText = name;

  index++;

  if (index === Math.floor(testimonials.length / 2)) {
    index = 0;
  }
  setTimeout(updateTestimonial, 5000);
}

function updateTestimonial_2() {
  const { name, imageURL, testiTxt } = testimonials[index2];

  imgEl_2.src = imageURL;
  userTxtEl_2.innerText = testiTxt;
  userNameEl_2.innerText = name;

  index2++;

  if (index2 === testimonials.length) {
    index2 = Math.ceil(testimonials.length / 2);
  }
  setTimeout(updateTestimonial_2, 10000);
}
