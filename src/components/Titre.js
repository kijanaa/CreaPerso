import React from 'react';
import classes from './Titre.module.css';
const Titre = (props) => {
        const classesCss = `${classes.font_family} border border-dark bg-primary p-2 m-2 rounded text-white text-center `

  return (
    <h1 className={classesCss}>{props.children}</h1>
  )
}

export default Titre;