import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const url = 'https://pokeres.bastionbot.org/images/pokemon';

  const [openCard, setopenCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 1, name: 'one' },
    { id: 6, name: 'six' },
    { id: 9, name: 'nine' },
    { id: 31, name: 'eleven' },
    { id: 14, name: 'forthen' },
    { id: 25, name: 'ninethen' },
  ];
  const pokemons1 = [
    { id: 3, name: 'three' },
    { id: 14, name: 'forthen' },
    { id: 31, name: 'eleven' },
    { id: 2, name: 'two' },
    { id: 25, name: 'ninethen' },
    { id: 9, name: 'nine' },
    { id: 6, name: 'six' },
    { id: 1, name: 'one' },
  ];

  const pairOfPokemons = [...pokemons, ...pokemons1];

  useEffect(() => {
    const firstmatch = pairOfPokemons[openCard[0]];
    const secondmatch = pairOfPokemons[openCard[1]];

    if (secondmatch && firstmatch.id === secondmatch.id) {
      setMatched([...matched, firstmatch.id])
    }
    if (openCard.length === 2) setTimeout(() => setopenCard([]), 1000);

    console.log({ matched });

  }, [openCard])



  const handleFlip = index => {
    setopenCard((opened) => [...opened, index])
  }

  return <div className='app'>
    <div className='cards'>
      {pairOfPokemons.map((pokemon, index) => {
        let flipCard;
        flipCard = false;

        if (openCard.includes(index)) flipCard = true;

        if (matched.includes(pokemon.id)) flipCard = true;

        return <div className={`pokemon-card ${flipCard ? 'flipped' : ''}`}
          key={index}
          onClick={() => handleFlip(index)}>
          <div className='inner'>
            <div className='front'>
              <img src={`${url}/${pokemon.id}.png`} alt='pokemon' width='100' />
            </div>
            <div className='back'></div>
          </div>
        </div>
      })}
    </div>
  </div>;
}


export default App;
