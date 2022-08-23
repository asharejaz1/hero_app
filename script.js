//API docs = https://superheroapi.com/index.html

const imgDiv = document.getElementById('image')
const ranBtn = document.getElementById('btn')
const searchInp = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchButton')


//access token given to access the API
const accessToken = '3376946752585563'
const baseURL = `https://superheroapi.com/api.php/${accessToken}`

//inner Function displaying SuperHero details
const heroInfo = (string) => {

   //name
      imgDiv.innerHTML = `<h4 id='mainName'>${string.name} </h4>`

  //work
      imgDiv.innerHTML += `<p class ='work'> ${string.work.occupation} </p>`
  
  //image
      imgDiv.innerHTML += `<img id='mainImg' src='${string.image.url}'/> `

     

      
      
      //power stats
      imgDiv.innerHTML += `<p class='stats' id='firstStat'> Combat : ${string.powerstats.combat} </p>`
      imgDiv.innerHTML += `<p class='stats'> Durability : ${string.powerstats.durability} </p>`
      imgDiv.innerHTML += `<p class='stats'> Intelligence : ${string.powerstats.intelligence} </p>`
      imgDiv.innerHTML += `<p class='stats'> Power : ${string.powerstats.power} </p>`
      imgDiv.innerHTML += `<p class='stats'> Speed : ${string.powerstats.speed} </p>`
      imgDiv.innerHTML += `<p class='stats'> Strength : ${string.powerstats.strength} </p>`

}

//superHero by Random
const superHeroApiRandom = (id) => {
 fetch(`${baseURL}/${id}`)
    .then(response => response.json())
    .then(json => {
      
      const hero = json 
      heroInfo(hero)
      
    })

}

//superHero by Search
const superHeroApiSearch = (name) => {
  console.log(name)
  //https://superheroapi.com/api/access-token/search/name
  fetch(`${baseURL}/search/${name}`)
  .then(response => response.json())
  .then(json => {

    const hero = json.results[0] 
    heroInfo(hero)
    
  })
}

//random hero button function
ranBtn.onclick = () => {
  let newId = Math.floor( (Math.random()*100) * 7.31)
  console.log(newId)
  superHeroApiRandom(newId)
}

//search button function
searchBtn.onclick = () => {
  superHeroApiSearch(searchInp.value)
}


