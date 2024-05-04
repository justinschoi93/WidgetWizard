import './searchbar.css';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import axios from 'axios';
import pokeball from '../../../../assets/images/pokeball.png'

const SearchBar = () => {

    const { pokeData, setPokeData, 
        setPokeChar, 
        setPokemon} = useContext(PokemonContext);

    const pokeAxios = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/'
    })
    
    const handler = (async (e) => {
        e.preventDefault();
        const newPokeData = await fetchPokeData(`pokemon/${e.target[0].value.toLowerCase()}`);
        const newPokeChar = await fetchPokeChar(`characteristic/${newPokeData.id}`)

        console.log(newPokeData)
        console.log(newPokeChar)

        setPokemon({
            name: newPokeData.name,
            height: newPokeData.height,
            weight: newPokeData.weight,
            abilities: newPokeData.abilities[0].ability.name + ' & ' + pokeData.abilities[1].ability.name,
            type: newPokeData.types[0].type.name,
            description: newPokeChar.descriptions[7].description,
            sprite: newPokeData.sprites.front_default,
            species: newPokeData.species.name
        })
    })

    const fetchPokeData = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            setPokeData(response.data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const fetchPokeChar = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            setPokeChar(response.data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className="searchbar__form" onSubmit={handler}>
            <input className="searchbar__input" type="text" placeholder="Search..." />
            <button className="searchbar__button" type="submit">
                <img src={pokeball} alt="pokeball" className="searchbar__button-img" />
            </button>
        </form>
    )
}

export default SearchBar;