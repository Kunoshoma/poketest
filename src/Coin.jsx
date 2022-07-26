import React, { useState } from "react" ;
import omote from "./omote.png"
import ura from "./ura.png";



function Coin() {
  let [num, setNum] = useState(0);
    return (
      <div>
        {num < 0.5 ? (
          <img src={omote} alt="" className="coin" />
        ) : (
          <img src={ura} alt="" className="coin" />
        )}
        <button
          className="bn29"
          onMouseDown={() => setNum((num = Math.random))}
        >
          コイン
        </button>
        <p>{num}</p>
      </div>
    );
}


export default Coin;
