import './pokedex.css'
import PokemonContext from './PokemonContext'
import { useState, useEffect } from 'react'
import bulbasaurData from './defaults/bulbasaurData.json'
import bulbasaurChar from './defaults/bulbasaurChar.json'
import SearchBar from './SearchBar/SearchBar'

const Pokedex = () => {
  const [pokeData, setPokeData] = useState(bulbasaurData);
  const [pokeChar, setPokeChar] = useState(bulbasaurChar);
  const [pokemon, setPokemon] = useState({
    name: pokeData.name,
    height: pokeData.height,
    weight: pokeData.weight,
    abilities: pokeData.abilities[0].ability.name + ' & ' + pokeData.abilities[1].ability.name,
    type: pokeData.types[0].type.name,
    description: pokeChar.descriptions[7].description,
    sprite: pokeData.sprites.front_default,
    species: pokeData.species.name
  });

  pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokemon.type = pokemon.type[0].toUpperCase() + pokemon.type.slice(1);
  pokemon.abilities = pokemon.abilities.split(' & ').map(x => x[0].toUpperCase() + x.slice(1)).join(' & ');
  
  useEffect(() => {
    console.log(pokemon.name)
  }, [pokemon]);

  return (
    <PokemonContext.Provider value={{ pokeData, setPokeData, pokeChar, setPokeChar, pokemon, setPokemon }}>
        <div className="pokedex__container">
          <div className="searchbar__container">
            <SearchBar />
          </div>
          <div className="sprite__container">
            <img src={pokemon.sprite} alt={pokemon.species} height="170" />
          </div>
          <div className="stats__container">
            <strong>Name: </strong>{pokemon.name}<br/>
            <strong>Type: </strong>{pokemon.type}<br/>
            <strong>Height: </strong>{pokemon.height}<br/>
            <strong>Weight: </strong>{pokemon.weight}<br/>
            <strong>Description: </strong>{pokemon.description}<br/>
            <strong>Abilities: </strong>{pokemon.abilities}<br/>
          </div>
        </div>
      </PokemonContext.Provider>
    )
}

export default Pokedex;

// name: pokeData.name,
            // height: pokeData.height,
            // weight: pokeData.weight,
            // abilities: pokeData.abilities[0].ability.name + ' & ' + pokeData.abilities[1].ability.name,
            // type: pokeData.types[0].type.name,
            // description: pokeChar.descriptions[7].description,
            // sprite: pokeData.sprites.front_default