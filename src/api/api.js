

const getAllCharacters = async () =>{
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    return response.json();
} 
const getCharacterById = async (id) =>{
    const response  = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return response.json();
} 




export default {
    getAllCharacters,
    getCharacterById
}