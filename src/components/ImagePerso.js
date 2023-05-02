import React from 'react';
import ImagePerso1 from '../assets/images/persos/player1.png';
import ImagePerso2 from '../assets/images/persos/player2.png';
import ImagePerso3 from '../assets/images/persos/player3.png';

const imagePerso = (props) => {
    let imageToprint="";
     if(props.numImage === 1) imageToprint = ImagePerso1;
     else if(props.numImage === 2) imageToprint = ImagePerso2;
     else if(props.numImage === 3) imageToprint = ImagePerso3;

  return (
    <div>
        <img src = {imageToprint} alt='perso'/>
    </div>
  )
}

export default imagePerso;