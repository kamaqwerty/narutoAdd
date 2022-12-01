const database = [
  {
      id:1,
      name:'Naruto Uzumaki',
      power:'Nine tails',
      village:'Konoha',
      level:'7th Hokage',
      clan:'Uzumaki',
      image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
  },
  {   
      id:2,
      name:'Sasuke Uchiha',
      power:'Rinnegan + MS',
      village:'Konoha',
      level:'Shadow Hokage',
      clan:'Uchiha',
      image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
  },
  {
      id:3,
      name:'Kakashi Hatake',
      power:'Purple Chidori + MS',
      village:'Konoha',
      level:'6th Hokage',
      clan:'White Claw',
      image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
  },
  {
      id:4,
      name:'Minato Namikaze',
      power:'Rasengan + Yellow flash Fuuijin',
      village:'Konoha',
      level:'4th Hokage',
      clan:'Namikaze',
      image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
  },
  {
      id:5,
      name:'Itachi Uchiha',
      power:'MS + Genjutsu',
      village:'Konoha',
      level:'Unlimited',
      clan:'Akatsuki',
      image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
  },
  {
      id:6,
      name:'Madara Uchiha',
      power:'MS + Six Path',
      village:'Konoha',
      level:'Destroyer',
      clan:'Akatsuki',
      image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
  },
  {
      id:7,
      name:'Hashirama Senju',
      power:'Wood Style + Regeneration',
      village:'Konoha',
      level:'God of War',
      clan:'Senju',
      image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
  },
  {
      id:8,
      name:'Pain (Tendo)',
      power:'Six path',
      village:'Hidden Rain',
      level:'God',
      clan:'Akatsuki',
      image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
  },
  {
      id:9,
      name:'Commando A',
      power:'Light shield',
      village:'Hidden Cloud',
      level:'4th Hokage',
      clan:'Lighter',
      image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
  },
  {
      id:10,
      name:'Gaara',
      power:'Shukakus Land',
      village:'Hidden Land',
      level:'5th Kazekage',
      clan:'Land',
      image:'https://i.gifer.com/C393.gif'
  },
  {
      id:11,
      name:'Kisame Hoshikage',
      power:'White Shark + Water Style',
      village:'Hidden Rain',
      level:'Untail bijuu',
      clan:'Akatsuki',
      image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
  },
  {
      id:12,
      name:'Killer B',
      power:'Eight Tail + Katana',
      village:'Hidden Cloud',
      level:'Rap God',
      clan:'Lighter',
      image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
  },    
  
]

const container = document.querySelector(".row")
const  select = document.querySelector(".select")
const  search = document.querySelector(".search")
const header = document.querySelector(".header")
const signOut = document.querySelector(".signOut")
const input = document.querySelectorAll("#addInput")
const bars = document.querySelector(".bars")
const sideBar =  document.querySelector(".sidebar")
const submit = document.querySelector(".submit")
const error = document.querySelector(".error")


window.addEventListener("load", () => {
  if(!localStorage.getItem("ninjas")){
    localStorage.setItem("ninjas", JSON.stringify(database))
  }else{
    const ninjas = JSON.parse(localStorage.getItem("ninjas"))

    const addIDtoNinjas = ninjas.map((item, index) => {
      return{...item, id: index}
    })

    localStorage.setItem("ninjas", JSON.stringify(addIDtoNinjas))

    const newBases = JSON.parse(localStorage.getItem("ninjas"))

    card(newBases)

  }
} )


signOut.addEventListener("click", () => {
  localStorage.setItem("isAuth", "false");
  window.open("../register.html", "_self");
});



function card (base){
  const template = base.map(({name, image, id}) => {
    return `
    <div class="card" >
      <h2>${name}</h2>

      <img class="card-img" src="${image}" alt="">
      <button class="more" onclick="setCurrentNinja(${id})"> More </button>
    </div>
    `
  })?.join("")
  container.innerHTML = template;
}

function setCurrentNinja (id) {

    const ninja = JSON.parse(localStorage.getItem("ninjas"))
        localStorage.setItem("currentNinja",JSON.stringify(ninja[id]))
        window.open("../more.html", "_self")
}


select.addEventListener("change", e => {
  var event = e.target.value;

  if(event === "name"){
    search.setAttribute("placeholder", "Search by Name...")
    search.classList.add("nameColor")
    search.classList.remove("villageColor")
    search.classList.remove("clanColor")
  }else if(event === "clan"){
    search.setAttribute("placeholder", "Search by Clan...")
    search.classList.add("clanColor")
    search.classList.remove("nameColor")
    search.classList.remove("villageColor")
  }else{
    search.setAttribute("placeholder", "Search by Village...")
    search.classList.add("villageColor")
    search.classList.remove("clanColor")
    search.classList.remove("nameColor")
  }
})

const ninjas = JSON.parse(localStorage.getItem("ninjas"))

search.addEventListener("input" , e => {
  var event = e.target.value.toLowerCase();
  var selectedValue = select.value;


  if(selectedValue === "name"){
    const filtered = ninjas.filter(item => item.name.toLowerCase().includes(event))
    card(filtered)
  }else if(selectedValue === "clan"){
    const filtered = ninjas.filter(item => item.clan.toLowerCase().includes(event))
    card(filtered)
  }else{
    const filtered = ninjas.filter(item => item.village.toLowerCase().includes(event))
    card(filtered)
  }
})


// window.addEventListener("scroll", ( ) =>{
//   if(window.screenY > 200){
//     header.classList.add("sticky")
//   }
// })


bars.addEventListener("click", e => {
  e.preventDefault()


  bars.classList.toggle("activeBars")
  sideBar.classList.toggle("active")
})




submit.addEventListener("click", () => {
 
  if (input[0].value !== "" && 
  input[1].value !== "" && 
  input[2].value !== "" && 
  input[3].value !== "" && 
  input[4].value !== "" && 
  input[5].value !== ""){
    const data = {
      name: input[0].value,
      clan: input[1].value,
      level: input[2].value,
      power: input[3].value,
      village: input[4].value,
      image: input[5].value
    }
    const ninjas = JSON.parse(localStorage.getItem("ninjas"))

    localStorage.setItem("ninjas", JSON.stringify([...ninjas, data]))
    window.location.reload()
  }
  else {
    error.innerHTML = "Все поля должны быть заполнены!";
  }

})



