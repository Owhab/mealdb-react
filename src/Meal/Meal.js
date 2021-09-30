import React, { useState } from 'react';
import './Meal.css'

const Meal = (props) => {
    const {handleAddToList, meal} = props;
    

    
    
    return (
        <div className = 'meal'>
            <img className = 'meal-img' src={props.meal.strMealThumb} alt="" />
            <h1>Name: {props.meal.strMeal.slice(0, 20)} </h1>
            <h2>Area: {props.meal.strArea}</h2>
            <h2>Category: {props.meal.strCategory}</h2>
            <p>Making Instructions: {props.meal.strInstructions.slice(0, 100)}</p>
            <button onClick = {()=>handleAddToList(meal)}  className = 'add-btn'>Add to List</button>
        </div>
    );
};

export default Meal;