


// https://jsonplaceholder.typicode.com/users

// fetch + .then()
function getData(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.log(error))
}
// getData(5)
// getData().then(data => console.log(data))
// getData('https://jsonplaceholder.typicode.com/users')

//------------------------------------------
// fetch + async/await
async function getData1() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
}
// getData1()
//------------------------------------------
// axios + .then()
function getData2() {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(({data}) => console.log(data))
  .catch(err => console.log(error))
}
// getData2()
//https://reqres.in/api/users?page=1
//------------------------------------------
// axios + async/await
async function getData3() {
  try {
    const url = 'https://jsonplaceholder.typicode.com=/users'
    const { data } = await axios.get(url)
    console.log(data)

    const result = await axios.get(url+data.id)
  } catch(error) {
    console.log(error)
  }
  

}
getData3()

//--------------------------------------

// function getRates(currency) {
//   const url = `https://api.frankfurter.app/latest?from=${currency}`
//   return axios.get(url)
//   .then(({data}) => console.log(data.rates))
// }

async function getRates(currency) {
  const url = `https://api.frankfurter.app/latest?from=${currency}`
  console.log(url)
  // const url = `https://api.frankfurter.app/latest?to=${cur1},${cur2}`
  // const url = `https://api.frankfurter.app/currencies`
  try {
    // const url = `https://api.frankfurter.app/latest`
    const { data } = await axios.get(url)
    console.log(data.rates)
    return data.rates
  } catch(error) {
    console.log({error})
  }
}

// getRates('USD')


// Generic api call with axios
function functionName() {
  axios.get(`some-url-string`)
  .then(({data}) => console.log(data))
}









//'https://restcountries.eu/rest/v2/all'

// async function getAllCountries() {
//   const url = 'https://jsonplaceholder.typicode.com/users'
//   return fetch(url)
//   .then(res => res.json())
//   .then(data => data.filter(user => user.website.endsWith('org')))
//   .then(dotOrgWebSites => dotOrgWebSites)


//   // axios.get(url)
//   // .then(({data}) => console.log(data[0]))
//   // let { data } = await axios.get(url)
//   // return data
//   // let response = await fetch(url)
//   // let json = await response.json()
//   // console.log(json)
// }

// getAllCountries().then((data) => {
//   // let result = data.map(({name, email, phone}) => {
//   //   return {
//   //     name,
//   //     email,
//   //     phone
//   //   }
//   // })
//   console.log(data)
// })




// async function getAllCountries(url) {
//   const response = await axios.get(url)
//   return response.data
//     // .then(response => response.data)
// }


// const { name, age } = obj

// const getAllCountries = () => { 
//   const url = "https://restcountries.eu/rest/v2/all";
//   return axios.get(url).then((response) => { 
//     return response.data.map(({name, region, currencies}) => { 
//       return {name, region, currencies} 
//       }) 
//   }) 
// }

// getAllCountries("https://restcountries.eu/rest/v2/name/Afghanistan")
// .then(data => console.log(JSON.stringify(data)))


// getAllCountries('https://restcountries.eu/rest/v2/name/united')
// .then(data => console.log(data))

// https://restcountries.eu/rest/v2/all
// async function getAllCountries() {
//   const url = 'https://restcountries.eu/rest/v2/all'
//   let res = await fetch(url)
//   let data = await res.json()
//   let flags = data.map(country => country.flag)
//   display(flags)
// }

// getAllCountries()



// getAllCountries()
// .then(data => console.log(data))

async function getAllCountries() {
  const url = 'https://restcountries.com/v3.1/all'
  try {
    const { data } = await axios.get(url)
    // const res = await fetch(url)
    // const data = await res.json()
    let result = data.map(country => {
        return country.name.common
      })
    
    console.log(result)
  } catch(error) {
    console.log(error)
  }
  
}
getAllCountries()
// async function getAllCountries() {
//   const url = 'https://restcountries.eu/rest/v2/all'
//   const { data } = await axios.get(url)
//   return data.map(({name, region, currencies}) => {
//       return {name, region, currencies}
//     })
// }

// let promise = new Promise((resolve, reject) => {
//   reject('Im a promise')
// })

// promise
// .then(data => console.log(data))
// .catch(err => console.log(err))


// https://api.frankfurter.app/latest?from=USD 
//USE EUR
// function getRates(currency) {
//   const url = `https://api.frankfurter.app/latest?from=${currency}`
//   fetch(url)
//   .then(res => res.json())
//   .then(rates => console.log(rates))
// }

// function getRates(currency) {
//   const url = `https://api.frankfurter.app/latest?from=${currency}`
//   return fetch(url)
//   .then(res => res.json())
//   .then(data => data)
// }
//------------ THIS IS FOR THE BROWSER -----------------------
console.log('-----------------------')
// function getRates(currency) {
//   const url = `https://api.frankfurter.app/latest?from=${currency}`
//   return axios.get(url)
//   .then(res => res.data)
// }

// getRates('RON').then(rates => console.log(rates))




// const getRates = (baseCurrency) => { 
//   const base_url = "https://api.frankfurter.app/latest?from=";
//   const url = `${base_url}${baseCurrency}`; 
//   return axios.get(url).then(response => { 
//     return response.data
//     // return {
//     //   rates: response.data.rates,
//     //   date: response.data.date,
//     // } 
//   }) 
// }
// getRates('USD')
// .then(data => console.log(data))
// .catch(e => console.log(e))
//`https://api.openbrewerydb.org/breweries?by_state=${state}`

// function getBreweries(state) {
//  const url = `https://api.openbrewerydb.org/breweries?by_state=${state}`
//  fetch(url)
//  .then(res => res.json())
//  .then(data => console.log(data))
// }

// getBreweries('ohio')
//https://api.lyrics.ovh/v1/artist/title

// async function getPost(id) {
//   const url = `https://jsonplaceholder.typicode.com/posts/${id}`
//   // fetch(url)
//   // .then(res => res.json())
//   // .then(post => console.log(post))
//   const res = await fetch(url)
//   const post = await res.json()
//   // console.log(post)
// }

// getPost(55)

// function display(data) {
//   let html = '<ul>'
//   data.forEach(flag => {
//     html += `<li><p><img src="${flag}" /></p></li>`
//   })
//   html += '</ul>'
//   let main = document.querySelector('main').innerHTML = html
// }

// function getLyrics(artist, title) {
//   const url = `https://private-anon-ceaed0e07e-lyricsovh.apiary-mock.com/v1/${artist}/${title}`
//   fetch(url)
//   .then(res => res.json())
//   .then(lyrics => console.log(lyrics))
// }

// getLyrics('madona', 'girls just want to have fun')