const pokemonLista = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 20
let offset = 0
const maxPokemons = 151



function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}" >
                <span class="number">#${pokemon.numer}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
        ).join('')
        pokemonLista.innerHTML += newHtml
      })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    const qntRegistro = offset + limit
    if(qntRegistro >= maxPokemons){
        const novoLimite = maxPokemons - offset
        loadPokemonItens(offset, novoLimite)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
        loadPokemonItens(offset, limit)
    }
})


