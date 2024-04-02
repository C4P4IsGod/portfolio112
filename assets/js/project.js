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
    githubLink: ""
  },
  {
    title: "Lava Golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221757072035811368/image.png?ex=6613bcf1&is=660147f1&hm=b9725db27b7b56e2e262b52ebb1e52395fb91140bdb4059bc10bdd0e3b73448b&=&format=webp&quality=lossless&width=467&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Earth Golem",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1222724027391676477/image.png?ex=6617417d&is=6604cc7d&hm=1131bda35b42645ea5b3d0b27260f1d26143babf7b4615e7dd34238952589452&=&format=webp&quality=lossless&width=479&height=469",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Bayonet",
    cardImage: "https://media.discordapp.net/attachments/1219839058742870038/1219919211523080192/image.png?ex=661647cd&is=6603d2cd&hm=9de7512b26fa39bbe8c1be57a8bba60c0291abe77b8a9c389bdd58190d785fa8&=&format=webp&quality=lossless&width=174&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Karambit",
    cardImage: "https://media.discordapp.net/attachments/1219839058742870038/1224031458482716702/image.png?ex=661c0321&is=66098e21&hm=acce6b402a72e10ae89a12a8bd5566e9cb8794d2e28029f89c1cc3fe5519d81f&=&format=webp&quality=lossless&width=482&height=459",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "USP-S",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224051430835359837/image.png?ex=661c15ba&is=6609a0ba&hm=c97796a124a421a7a37420a1469239d78b918b2cebeef729506b6ba72d3012f3&=&format=webp&quality=lossless&width=593&height=242",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Chest 1",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1223863164614082650/image.png?ex=661b6664&is=6608f164&hm=f0d4e7d3b2c215192de1d8b39fa35e8e316b0d648e70a96f442ba7826c90fb58&=&format=webp&quality=lossless&width=836&height=519",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Chest 2",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1223863164983185489/image.png?ex=661b6664&is=6608f164&hm=5cd447c75ef8c4b620a30665c489dca0f0787cf29ecc8c25033413a4a0b321a5&=&format=webp&quality=lossless&width=690&height=251",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Cutlass",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221543135499255951/image.png?ex=6612f5b2&is=660080b2&hm=f9400f7e9a8a1e3b562c311e969f7a63feb0a56cfe611fcbb9a3cd0688af4edc&=&format=webp&quality=lossless&width=540&height=519",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Elemental Blades",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1221535662373736659/image.png?ex=6612eebc&is=660079bc&hm=301dbdbce98e3cba424cf2d37d7c30e4ac9e58a2de50f4ab22f50846b6c3d439&=&format=webp&quality=lossless&width=639&height=591",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Ruin King's Blade",
    cardImage: "https://media.discordapp.net/attachments/1220988174633795584/1220988429836222494/image.png?ex=661a2b96&is=6607b696&hm=130ccad1581d92508f6930cc90fe8172c45627fb1eaea9635a210c9ca7ec2350&=&format=webp&quality=lossless&width=406&height=488",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "UGC 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "UGC 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "UGC 3",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Butterfly Knife",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224039748193091644/image.png?ex=661c0ad9&is=660995d9&hm=4ae16d1679f4c1376a4bc359db5246dc8106e4e6040a65896d7e059756979e48&=&format=webp&quality=lossless&width=475&height=308",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "AK-47",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224042500428136469/image.png?ex=661c0d69&is=66099869&hm=471f74960d17cfc918ea4e2dfc11177379efc7b0df29ece19d3464b4efcc29bb&=&format=webp&quality=lossless&width=535&height=170",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Death Hound",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224216423056932944/image.png?ex=661caf64&is=660a3a64&hm=95d54b1493496dab0d271ca982393dcbff912c56c059918486ecf06d22c87f72&=&format=webp&quality=lossless&width=524&height=441",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Tiger Mount",
    cardImage: "https://media.discordapp.net/attachments/1200854531420983468/1224215593893498950/image.png?ex=661cae9e&is=660a399e&hm=3450e0701ac4e22f99e79d66127437ee3e7007a7832627d6ab55b9f25b80df3a&=&format=webp&quality=lossless&width=481&height=321",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "AWP",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224166489918275666/image.png?ex=661c80e3&is=660a0be3&hm=1938b1239e8a1f83cead28979b3b434fbfc4cc724aefa06fee30643ea1f3e1a5&=&format=webp&quality=lossless&width=521&height=422",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "M4A4",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Pet 1",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224217614780338267/image.png?ex=661cb080&is=660a3b80&hm=2d4fb3ff67297912b1ccb50f31fdd4de50f14286f0a6be99d724cf57d00bc45e&=&format=webp&quality=lossless&width=585&height=512",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Pet 2",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224217881517232198/image.png?ex=661cb0bf&is=660a3bbf&hm=fdff2bf267570c425c5c47b6f34ad7d073b581992e345a7023a06245694228ed&=&format=webp&quality=lossless&width=338&height=313",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Deer",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Rabbit",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Bird",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
    {
    title: "Crystals",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Obelisk",
    cardImage: "https://media.discordapp.net/attachments/1206782636928929832/1224193033860550749/50be249c-98eb-4860-a014-33061f7cf799.png?ex=661c999b&is=660a249b&hm=29a6f93c9fb03af808544f2111481e554337234c3d112601caa458f15153320e&=&format=webp&quality=lossless&width=303&height=346",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Turtle",
    cardImage: "https://media.discordapp.net/attachments/1206782636928929832/1224193034074325042/image.png?ex=661c999b&is=660a249b&hm=f2bc25219068935480ec16f4eecf636bf79ef1bbd18f7538e01ca70e2042b88a&=&format=webp&quality=lossless&width=595&height=463",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Scroll",
    cardImage: "https://media.discordapp.net/attachments/1138239486527021087/1224202929246961777/image.png?ex=661ca2d2&is=660a2dd2&hm=bd9ce31afcb317b341c89350841228454635919eb9bc734a43b90f0bb6e2500b&=&format=webp&quality=lossless&width=728&height=485",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Low poly pet",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224205766693621781/image.png?ex=661ca577&is=660a3077&hm=76a9c429677a80ee3b4ece664f729b6124a1c574ede8948b961a17d9abc022c4&=&format=webp&quality=lossless&width=388&height=314",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Low poly sword",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224206668108140616/image.png?ex=661ca64e&is=660a314e&hm=a54a11e9da26003783125737680dddf548da93a9620c6675af36880c3b4ea92c&=&format=webp&quality=lossless&width=439&height=584",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Eludacator",
    cardImage: "https://media.discordapp.net/attachments/1200854531420983468/1224208303047835678/image.png?ex=661ca7d4&is=660a32d4&hm=5e6d488239c5517341bed39295dbbe0534dc8bdc158e2c0060771c65932b6567&=&format=webp&quality=lossless&width=359&height=533",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Orc Sword",
    cardImage: "https://media.discordapp.net/attachments/1200854531420983468/1224208302766821457/image.png?ex=661ca7d4&is=660a32d4&hm=f76731e248c244b19fb421a03c1d51782d329a063ef52ca831c35d3594d1c1bc&=&format=webp&quality=lossless&width=363&height=448",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Devil Mace",
    cardImage: "https://media.discordapp.net/attachments/1200854531420983468/1224208303303950346/image.png?ex=661ca7d4&is=660a32d4&hm=a61d57930cada7e5e47bc359c2da293181da843a8fe37133d26b7b0467c2ae7b&=&format=webp&quality=lossless&width=259&height=424",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Emerald Blade",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224212616721731624/image.png?ex=661cabd8&is=660a36d8&hm=4dc5a90731dbddaaa6c2bff35a965e74391d765465b164d181b6de7ba19f7998&=&format=webp&quality=lossless&width=255&height=485",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Cyber Axe",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224212616973652008/image.png?ex=661cabd8&is=660a36d8&hm=bd374f7832e91d63bbbd230fe3bd4d8b94a66641b725491c00e1c283e9c4fc44&=&format=webp&quality=lossless&width=281&height=522",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Demon Inquister",
    cardImage: "https://media.discordapp.net/attachments/1210216074885341225/1224212617241825300/image.png?ex=661cabd8&is=660a36d8&hm=d1575a07a7b57e66711a9340e93dad037adefa43fa10cb398de9261a61d3bcac&=&format=webp&quality=lossless&width=356&height=656",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Crystal Blade",
    cardImage: "https://media.discordapp.net/attachments/1204243917650927728/1220848249934712962/Screenshot_2023-12-18_032811-1.png?ex=6619a909&is=66073409&hm=690a876c2c8545a48c76c7f6a72b2d6e81064e14ace21a8418cf79eb278a924e&=&format=webp&quality=lossless&width=326&height=590",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "House 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "House 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Tree 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Tree 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Scythe",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Kunai 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Kunai 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Kunai 3",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Berserk Sword",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Fullbring Zangetsu",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Gaara Gorge",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Crown",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Gun",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Gun",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Gun",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Gun",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Axe 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Axe 2",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
  },
  {
    title: "Hat 1",
    cardImage: "",
    category: "Game Development",
    description: "A legendary sword only to be found by luckiest player of them all.",
    technologies: ["Substance Painter", "ZBrush", "3D Modeling"],
    previewLink: "https://en.hurawatch-official.com/movies/gran-turismo-2023-idvc100",
    githubLink: ""
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
