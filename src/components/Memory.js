import { useState } from 'react';

import Game from './Game'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

var array = []
var i = 0;

for (var key in images) {
  var name = images[key].default.replace('/static/media/', '')
  name = name.replace('_', ' ')
  name = name.substring(0, name.length - 13).toUpperCase()
  array.push({id: i, link: images[key].default, name})
  i++
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function Memory() {
  const [ idArray, setIdArray ] = useState([]);

  const [score, setScore] = useState(0);
  
  function handleClick(event) {
    if (idArray.includes(event.target.id)) {
     return setIdArray([]), setScore(0)
    }
    setIdArray([...idArray, event.target.id]);
    shuffle(array)
    setScore(score + 1)
  }

  return ( 
    <div>
      <div className='container'>
        <h4>Don't click the same image twice</h4>
        <h4>Score: {score}</h4>
      </div>
      <Game 
        array={array}
        score={score}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Memory;