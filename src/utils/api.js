const APIUrl = "https://rickandmortyapi.com/api/character";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//fetching
async function fetchCharacter(url) {
    return await fetch(url)
                .then(response => response.json())
                .then(data => data);
}

//Obtener 3 personajes aleatoriamente consultando a la AOPI
async function getCharacters() {
    return [
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
    ];
}

export { getCharacters, randomNumber };