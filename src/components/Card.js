import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        // Tc = Text Center --- Bg-light-green = cor background --- dib = display block
        // br3 - pa3 - ma2 = border radius, pading e margin
        // grow = efeito ao passar o mouse --- shadow-5 = sombra
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;