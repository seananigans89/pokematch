import React from 'react'

const FetchPokemon = () => {

    
        let pokeArray = [];
        for (let i = 0; i < 8; i++) {
          let pokeIndex = Math.floor(Math.random() * 151);
          $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`,
      
            method: "get",
          }).then((response) => {
            pokeArray.push(response.sprites.front_shiny);
            pokeArray.map((poke) => {
              $(`#mon${i}`).attr("src", poke);
            });
          });
        }
      ;
      getMons();
    return (
        <div>
            
        </div>
    )
}

export default FetchPokemon
