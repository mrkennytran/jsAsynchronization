
// ******* CALLBACK *******
//setTimeout has a function as it's argument

/*
// Callback example 1 
setTimeout(() => {
  console.log('Waited 1 second')
}, 1000)
*/

/*
// Callback example 2 
const getPokemon = (id, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => 
      res.json())
    .then(data => {
      callback(data)
  })
}

getPokemon(9, function(pokemon){
  console.log(`Who's that Pokemon?!`);
  console.log(`It's ${pokemon.name}!`);
})
*/







// Nested Callback - Try to avoid the layer your code with callback functions - CALLBACK HELL or Pyramid of Doom 

/*
setTimeout(() => {
  console.log('10')
  setTimeout(() => {
    console.log('9')
    setTimeout(() => {
      console.log('8')
      setTimeout(() => {
        console.log('7')
        setTimeout(() => {
          console.log('6')
          setTimeout(() => {
            console.log('5')
            setTimeout(() => {
              console.log('4')
              setTimeout(() => {
                console.log('3')
                setTimeout(() => {
                  console.log('2')
                  setTimeout(() => {
                    console.log('1')
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
*/




// ****** PROMISE - evolved from callbacks ******* 
/*
// Promise example 1 
const myPromise = new Promise((resolve, reject) => { // Create promise 
  const number = 0;
  if (number == 0) {
    resolve();
  } else {
    reject();
  }
})

// Can chain a promise with then() when resolve() & catch() when reject()
myPromise.then(() => {
  console.log('Your code is a success!')
}).catch(() => {
  console.error('ERROR!!!')
})
*/


/*
// Promise example 2 
// Fetch with promises - https://pokeapi.co/
fetch('https://pokeapi.co/api/v2/pokemon/mewtwo') // Do not include semicolon until the end of this promise 
  .then((res) => res.json())        // Takes json as input to create a JS Object 
  .then((data) => console.log(data)) // promise chaining 
  .catch((err) => console.error(err))
*/

// ****** ASYNC/AWAIT - evolution of Promises ******

let catchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(`Who's that pokemon?! `)
    console.log(`It's ${data.name}!`);
  } catch (error) {
    console.error(error);
  }

}

catchPokemon(101); // plug a number from 1-1010 - Each number is associated with a specfic pokemon

