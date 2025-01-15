async function fetchMarvelData(marvelCharacter) {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?name=${marvelCharacter}&ts=1&apikey=a50524f98b2603ecfe9a30811bcd7f7e&hash=d7c624a0e64184c58f1f1434b9c776f4
`);
    const marvelData = await response.json();
    return marvelData;
}

document.addEventListener('DOMContentLoaded', async () => {
    const marvelData = await fetchMarvelData('Magneto');
    console.log(marvelData)
    const marvelInfoElement = document.getElementById('marvel-info');

    
    if (marvelData.data.results.length === 0) {
        marvelInfoElement.innerHTML = `<p>Character not found.</p>`;
        return;
    }

    const magneto = marvelData.data.results[0];

    marvelInfoElement.innerHTML = `
        <h2>${magneto.name}</h2>
        <img src="${magneto.thumbnail.path}.${magneto.thumbnail.extension}" alt="${magneto.name}">
        <h3>Description:</h3>
        <p>${magneto.description || 'No description available.'}</p>
    `;
});



