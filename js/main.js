const url = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonList = async url => {
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
}

const displayList = async () => {
  const data = await getPokemonList(url);
  const showCounter = document.getElementById('show-counter');

  showCounter.innerHTML = '20 especimen from ' + data.count;
  data.results.forEach(pokemon => {
    const li = document.createElement('li');
    const aLink = document.createElement('a');
    
    aLink.href = pokemon.url;
    aLink.appendChild(document.createTextNode(pokemon.name));
    li.appendChild(aLink);
    document.querySelector('.list').appendChild(li);
  });
}

displayList();