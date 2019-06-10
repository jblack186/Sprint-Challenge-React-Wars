import React from 'react';

function Char(props) {
return (
    <div>
        <h1>{props.attributes.name}</h1>
        <p>{props.attributes.birth_year}</p>

    </div>
)
}


export default Char;