# POKEDEX

[![Run on Repl.it](https://repl.it/badge/github/vdngaite/pokedex)](https://repl.it/github/vdngaite/pokedex)


## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

## Sample request

```
{
  pokemon(name:"Clefable"){
    name
    type1
    type2
    weight
    height
  },
  pokemons{
    name
    type1
    type2
    weight
    height
  },
  pokemonType(type:"Normal"){
    name
    type1
    type2
    weight
    height
  },
  pokemonType2(type:"Poison"){
    name
    type1
    type2
    weight
    height
  },
  mostHeaviest{
    name
  },
	mostLightest{
    name
  },
  mostTaller{
    name
    height
  },
  mostSmaller{
    name
    height
  }
}
```
