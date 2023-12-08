import React from 'react';
import pb from '../lib/pocketbase';

export default function Card(input) {
  let data = input.data;

  const dataMoves = data.moves;
  const moves = [];
  for (const element in dataMoves) {
    if (dataMoves.hasOwnProperty(element)) { 
        moves.push(<li className="move" key={element}>{dataMoves[element]}</li>);
    }
  } 


  const handleListForTradeClick = () => {
    // Toggle the isListedForTrade status when the button is clicked
    const updatedIsListed = data.isListedForTrade === undefined ? false : !data.isListedForTrade;
    console.log("Before update:", data.isListedForTrade);
    console.log("Updated isListedForTrade:", updatedIsListed);

    // Update the data object with the new isListedForTrade value
    data = { ...data, isListedForTrade: updatedIsListed };

    console.log("After update:", data.isListedForTrade);
    input.handleListForTrade(data.id, updatedIsListed);
  };

  const handleBuyPokemon = async (pokemonId) => {
    try {
      // Fetch the Pokémon record
      const pokemonRecord = await pb.collection('pokemon').getOne(pokemonId);
      const sellerUserId = pokemonRecord.field; // Replace 'userId' with the actual field name in your Pokémon collection

      console.log("Seller User ID:", sellerUserId);
  
      if (!sellerUserId) {
        console.error("Seller's user ID is undefined in Pokémon record");
        alert("Error: Seller's user ID is missing in the Pokémon record.");
        return;
      }
  
      // Fetch the seller's user record THE ERROR IS AT THIS LINE
      const sellerRecord = await pb.collection('users').getOne(sellerUserId);
  
      // Fetch buyer's record (assuming buyerId is available in your auth store)
      const buyerId = pb.authStore.model.id;
      const buyerRecord = await pb.collection('users').getOne(buyerId);
  
      // Check if buyer has enough currency
      if (buyerRecord.wallet < pokemonRecord.price) {
        alert('Not enough currency to complete the purchase.');
        return;
      }
  
      // Update buyer's wallet (deduct the price)
      await pb.collection('users').update(buyerId, { wallet: buyerRecord.wallet - pokemonRecord.price });
  
      // Update seller's wallet (add the price)
      await pb.collection('users').update(sellerUserId, { wallet: sellerRecord.wallet + pokemonRecord.price });
  
      // Transfer Pokémon ownership
      await pb.collection('pokemon').update(pokemonId, { userId: buyerId });
  
      alert('Pokémon purchase successful!');
  
    } catch (error) {
      console.error("Error during purchase", error);
      alert("Failed to purchase Pokémon");
    }
  };
  
  
  

  if (input.store === true) {
    return (
      <div className="card store" >
        <div className="top-bar" >
          <div className="name">
            <p>Name</p>
            {`${data.name}`}
          </div>
          <div className="level-container">
            <p>LV.</p>
            <div className="level">
              {`${data.level}`}
            </div>
          </div>
        </div>
                  
        <div className="pic-container">
          <div>
            <img className="img__pokemon" src={`${data.image_url}`} alt={`${data.name}`}/>
          </div>
        </div>
  
        <div className="description">
          <div className="price-container">
            <p className="card-labels">Price</p>
            <div className="price">
              {`${data.price}`}
            </div>
          </div>
          <div className="type-container">
            <p className="card-labels">Type(s)</p>
            <div className="type">
              {`${data.type}`}
            </div>
          </div>
  
          <div className="abilities-container">
            <p className="card-labels">Moves</p>
            <div>
              <div className="ability">
                <ul>
                  {moves}
                </ul>
              </div>
            </div>
          </div>
                          
          <div className="hp-container">
            <p className="card-labels">Hit Points</p>
            <div className="hp">
              {`${data.hp}`}
            </div>
          </div>
        </div>
        <button className="card-button" onClick={() => handleBuyPokemon(data.id)}>
          Buy
        </button>


      </div>
    );
  } else {
    return (
      <div className="card" >
        <button className="card-button" onClick={() => input.removePokemon(data.id)}>Remove</button>
        {input.store && (
        <button className="card-button" onClick={() => handleBuyPokemon(data.id)}>
          Buy
        </button>)}
        <button className="card-button" onClick={handleListForTradeClick}>
          {data.isListedForTrade ? "Unlist from Trade" : "List for Trade"}
        </button>
        <div className="top-bar" >
          <div className="name">
            <p>Name</p>
            {`${data.name}`}
          </div>
          <div className="level-container">
            <p>LV.</p>
            <div className="level">
              {`${data.level}`}
            </div>
          </div>
        </div>
  
        <div className="pic-container">
          <div>
            <img className="img__pokemon" src={`${data.image_url}`} alt={`${data.name}`}/>
          </div>
        </div>
  
        <div className="description">
          <div className="price-container">
            <p className="card-labels">Price</p>
            <div className="price">
              {`${data.price}`}
            </div>
          </div>
          <div className="type-container">
            <p className="card-labels">Type(s)</p>
            <div className="type">
              {`${data.type}`}
            </div>
          </div>
  
          <div className="abilities-container">
            <p className="card-labels">Moves</p>
            <div>
              <div className="ability">
                <ul>
                  {moves}
                </ul>
              </div>
            </div>
          </div>
                          
          <div className="hp-container">
            <p className="card-labels">Hit Points</p>
            <div className="hp">
              {`${data.hp}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
