import React from 'react';

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



  return (
    // <div className="collection">
      <div className="card" >
          <button className="card-button" onClick={() => input.removePokemon(data.id)}>Remove</button>
          {/* <button className="card-button">Edit</button> */}
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
              {/* <button className="card-button">Add pic of pokemon</button> */}
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
                  {/* <button className="card-button">New move</button> */}
              </div>
              
              <div className="hp-container">
                  <p className="card-labels">Hit Points</p>
                  <div className="hp">
                  {`${data.hp}`}
                  </div>
              </div>

          </div>
      </div>
    //</div>
  );
}