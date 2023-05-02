import React from 'react'
import ImagePerso from './ImagePerso';
const Personnage = (props) => {
  return (
    
    <div className='row no-gutters'>
        <div className='col-6'>
             <ImagePerso numImage={props.image}/>
             </div>
        <div className='col-6'>
            force : {props.force} <br />
            agilite : {props.agilite} <br />
            intelligence : {props.intelligence}
        </div>
    </div>
  )
}

export default Personnage;