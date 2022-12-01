const container = document.querySelector("#moreRow")
const headName = document.querySelector("#head__title")
const signOut = document.querySelector(".signOut")
window.addEventListener("load" , () => {

    if(localStorage.getItem("currentNinja")){
        const ninja = JSON.parse(localStorage.getItem("currentNinja"))
        headName.innerHTML = ninja.name

        console.log(ninja)
        container.innerHTML = `
        <div class="card" >
        <h2>${ninja.name}</h2>

      <img class="card-img" src="${ninja.image}" alt="">

          <div class="card-body">
         <p>
           <h4>Clan:</h4> <span>${ninja.clan}</span>
         </p>
         <p>
          <h4>Village:</h4> <span>${ninja.village}</span>
         </p>
         <p>
           <h4>Power:</h4> <span>${ninja.power}</span>
         </p>
        <p>
           <h4>Level:</h4> <span>${ninja.level}</span>
         </p>
       </div>
     </div>
        `
    }
})

signOut.addEventListener("click", () => {
  localStorage.setItem("isAuth", "false");
  window.open("../register.html", "_self");
});