import { useState } from 'react';

import Game from './Game'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

var ary = []
var i = 0;

for (var key in images) {
  var name = images[key].default.replace('/static/media/', '')
  name = name.replace('_', ' ')
  name = name.substring(0, name.length - 13).toUpperCase()
  ary.push({id: i, link: images[key].default, name})
  i++
}

function Memory() {
  const [ array, setArray ] = useState(ary);
  
  console.log(array)

  return ( 
    <div>
      <Game array={array} />
    </div>
  )
}

export default Memory;