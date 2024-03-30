AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  {
    title: "Greatsword",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221043501123239956/image.png?ex=66112460&is=65feaf60&hm=3dfffb1dbad413f9b71b4bf11b2d66d0b5781d582b647177fdca5e7293c33e9e&=&format=webp&quality=lossless&width=390&height=509",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  // Add more projects here
];

// Function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, category }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <p class="category">Category: ${category}</p>
                <!-- Add more details such as description, technologies, links, etc. -->
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, i, skillcard, card, title, category;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");
  category = document.getElementsByClassName("category");

  // Loop through all project cards and hide those that don't match the search query
  for (i = 0; i < title.length; i++) {
    if (
      title[i].innerText.toUpperCase().includes(input) ||
      category[i].innerText.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
