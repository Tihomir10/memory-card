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
  ary.push({id: i, link: images[key].default})
  i++
}

function Memory() {
  const [ array, setArray ] = useState(ary);

  return ( 
    <div>
      <img  src={array[6].link} />
    </div>
  )
}

export default Memory;