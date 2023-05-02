import React, { Component } from 'react';
import Button from './Button';
import Titre from './Titre';
import Personnage from './Personnage';

class CreateurPersonnage extends Component {
    render() {
        return (
         <div className='container'> 
                <Titre> Createur de personnage</Titre>
                <Personnage />
                <div>Armes</div>
                <div className='row no-gutters'>
                    <Button typeBtn=' btn btn-danger' css='col-6' clic={console.log("Update")}>Reinitialiser</Button>
                    <Button typeBtn=' btn btn-success' css='col-6' clic={console.log("Creaaar")}>Créer</Button>
                </div>
         </div>
    
        );
    }
}

export default CreateurPersonnage;
