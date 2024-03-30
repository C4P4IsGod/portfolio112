AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Greatsword",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221043501123239956/image.png?ex=66112460&is=65feaf60&hm=3dfffb1dbad413f9b71b4bf11b2d66d0b5781d582b647177fdca5e7293c33e9e&=&format=webp&quality=lossless&width=390&height=509",
  },
  {
    title: "Lava golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221757072035811368/image.png?ex=6613bcf1&is=660147f1&hm=b9725db27b7b56e2e262b52ebb1e52395fb91140bdb4059bc10bdd0e3b73448b&=&format=webp&quality=lossless&width=518&height=656",
  },
  {
    title: "Earth golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1222724027391676477/image.png?ex=6617417d&is=6604cc7d&hm=1131bda35b42645ea5b3d0b27260f1d26143babf7b4615e7dd34238952589452&=&format=webp&quality=lossless&width=586&height=574",
  },
  {
    title: "Ruin Blade",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1220988429836222494/image.png?ex=6610f116&is=65fe7c16&hm=3cd3f0502f3d1a10a275234b8ee9c643293179a0ad418f915a771187cedbf0cb&=&format=webp&quality=lossless&width=497&height=597",
  },
  {
    title: "Cutlass",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221543135499255951/image.png?ex=6612f5b2&is=660080b2&hm=f9400f7e9a8a1e3b562c311e969f7a63feb0a56cfe611fcbb9a3cd0688af4edc&=&format=webp&quality=lossless&width=401&height=385",
  },
  {
    title: "Elemental Blades",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221535662373736659/image.png?ex=6612eebc&is=660079bc&hm=301dbdbce98e3cba424cf2d37d7c30e4ac9e58a2de50f4ab22f50846b6c3d439&=&format=webp&quality=lossless&width=710&height=656",
  },
  {
    title: "Katana",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221325641421553674/image.png?ex=66122b24&is=65ffb624&hm=887412662c56f304796529ef273bb8b104b85e24d78573aa8a1e09ff4fbeae0c&=&format=webp&quality=lossless&width=988&height=179",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
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
            <ul class="menu-content"><br>
                </ul>
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
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
