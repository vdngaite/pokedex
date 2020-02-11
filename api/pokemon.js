import fs from 'fs'

const getPokemons = () => {
  const pokedex = fs.readFileSync('./pokedex.json')
  return JSON.parse(pokedex)
}
const getPokemon = function(name) {
  const pokemons = getPokemons()
  return pokemons.filter((pokemon) => {
    return capitalize(pokemon.name) === capitalize(name)
  })
}

const getPokemonsType = function(type) {
  const pokemons = getPokemons()
  return pokemons.filter((pokemon) => {
    return capitalize(pokemon.type1) === capitalize(type)
  })
}

const getPokemonsType2 = function(type) {
  const pokemons = getPokemons()
  return pokemons.filter((pokemon) => {
    return capitalize(pokemon.type2) === capitalize(type)
  })
}

const mostHeaviest = function() {
  const pokemons = getPokemons()
  const weights = pokemons.map((p) => p.weight)
  const mostWeighty = Math.max.apply(Math.max, weights)
  return pokemons.filter((pokemon) => {
    return pokemon.weight == mostWeighty
  })
}

const mostLightest = function() {
  const pokemons = getPokemons()
  const weights = pokemons.map((p) => p.weight)
  const lightest = Math.min.apply(Math.min, weights)
  return pokemons.filter((pokemon) => {
    return pokemon.weight == lightest
  })
}

const mostTaller = function() {
  const pokemons = getPokemons()
  const heights = pokemons.map((p) => p.height)
  const taller = Math.max.apply(Math.max, heights)
  return pokemons.filter((pokemon) => {
    return pokemon.height == taller
  })
}

const mostSmaller = function() {
  const pokemons = getPokemons()
  const heights = pokemons.map((p) => p.height)
  const smaller = Math.min.apply(Math.min, heights)
  return pokemons.filter((pokemon) => {
    return pokemon.height == smaller
  })
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  const el = s.toLowerCase()
  return el.charAt(0).toUpperCase() + el.slice(1)
}

export {
  getPokemon,
  getPokemons,
  getPokemonsType,
  getPokemonsType2,
  mostHeaviest,
  mostLightest,
  mostTaller,
  mostSmaller
}
