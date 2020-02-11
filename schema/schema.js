import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'
import {
  getPokemon,
  getPokemons,
  getPokemonsType,
  getPokemonsType2,
  mostHeaviest,
  mostLightest,
  mostTaller,
  mostSmaller
} from '../api/pokemon'

const PokemonType = new GraphQLObjectType({
  name: 'pokemon',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    type1: {
      type: GraphQLString
    },
    type2: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    weight: {
      type: GraphQLString
    },
    height: {
      type: GraphQLString
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemon: {
      type: new GraphQLList(PokemonType),
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return getPokemon(args.name)
      }
    },
    pokemons: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args) {
        return getPokemons()
      }
    },
    pokemonType: {
      type: new GraphQLList(PokemonType),
      args: {
        type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return getPokemonsType(args.type)
      }
    },
    pokemonType2: {
      type: new GraphQLList(PokemonType),
      args: {
        type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return getPokemonsType2(args.type)
      }
    },
    mostHeaviest: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args) {
        return mostHeaviest()
      }
    },
    mostLightest: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args) {
        return mostLightest()
      }
    },
    mostTaller: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args) {
        return mostTaller()
      }
    },
    mostSmaller: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args) {
        return mostSmaller()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
