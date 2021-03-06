import React from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol><h4>Ingredients Name</h4>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Calories = {calories}</p>
            <img src={image} alt="" className={style.img} />
        </div>

    );
}

export default Recipe;