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
  {
    title: "Lava Golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221757072035811368/image.png?ex=6613bcf1&is=660147f1&hm=b9725db27b7b56e2e262b52ebb1e52395fb91140bdb4059bc10bdd0e3b73448b&=&format=webp&quality=lossless&width=467&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Earth Golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1222724027391676477/image.png?ex=6617417d&is=6604cc7d&hm=1131bda35b42645ea5b3d0b27260f1d26143babf7b4615e7dd34238952589452&=&format=webp&quality=lossless&width=479&height=469",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Bayonet",
    cardImage: "https://media.discordapp.net/attachments/1219839058742870038/1219919211523080192/image.png?ex=661647cd&is=6603d2cd&hm=9de7512b26fa39bbe8c1be57a8bba60c0291abe77b8a9c389bdd58190d785fa8&=&format=webp&quality=lossless&width=174&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Karambit",
    cardImage: "https://media.discordapp.net/attachments/1219839058742870038/1224031458482716702/image.png?ex=661c0321&is=66098e21&hm=acce6b402a72e10ae89a12a8bd5566e9cb8794d2e28029f89c1cc3fe5519d81f&=&format=webp&quality=lossless&width=482&height=459",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "USP-S",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224051430835359837/image.png?ex=661c15ba&is=6609a0ba&hm=c97796a124a421a7a37420a1469239d78b918b2cebeef729506b6ba72d3012f3&=&format=webp&quality=lossless&width=593&height=242",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Chest 1",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1223863164614082650/image.png?ex=661b6664&is=6608f164&hm=f0d4e7d3b2c215192de1d8b39fa35e8e316b0d648e70a96f442ba7826c90fb58&=&format=webp&quality=lossless&width=836&height=519",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Chest 2",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1223863164983185489/image.png?ex=661b6664&is=6608f164&hm=5cd447c75ef8c4b620a30665c489dca0f0787cf29ecc8c25033413a4a0b321a5&=&format=webp&quality=lossless&width=690&height=251",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Cutlass",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221543135499255951/image.png?ex=6612f5b2&is=660080b2&hm=f9400f7e9a8a1e3b562c311e969f7a63feb0a56cfe611fcbb9a3cd0688af4edc&=&format=webp&quality=lossless&width=540&height=519",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Elemental Blades",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221535662373736659/image.png?ex=6612eebc&is=660079bc&hm=301dbdbce98e3cba424cf2d37d7c30e4ac9e58a2de50f4ab22f50846b6c3d439&=&format=webp&quality=lossless&width=639&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Ruin King's Blade",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1220988429836222494/image.png?ex=661a2b96&is=6607b696&hm=130ccad1581d92508f6930cc90fe8172c45627fb1eaea9635a210c9ca7ec2350&=&format=webp&quality=lossless&width=406&height=488",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "UGC 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "UGC 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "UGC 3",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Butterfly Knife",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224039748193091644/image.png?ex=661c0ad9&is=660995d9&hm=4ae16d1679f4c1376a4bc359db5246dc8106e4e6040a65896d7e059756979e48&=&format=webp&quality=lossless&width=475&height=308",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "AK-47",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224042500428136469/image.png?ex=661c0d69&is=66099869&hm=471f74960d17cfc918ea4e2dfc11177379efc7b0df29ece19d3464b4efcc29bb&=&format=webp&quality=lossless&width=535&height=170",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Shark",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: "https://github.com/example/greatsword"
  },
  {
    title: "Tiger Mount",
    cardImage: "",
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
