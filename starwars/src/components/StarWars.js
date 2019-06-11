import React from 'react';
import ReactDOM from "react-dom";
import Char from './Char';

function StarWars(props) {
    return (
        <div>
            {console.log(props)}
      {props.item.map(attr => {
          return <Char attributes={attr} />
      })}
        </div>
    )
}

export default StarWars;