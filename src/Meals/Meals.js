import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [list, setList] = useState([]);


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => setMeals(data.meals))

    },[])

    const handleAddToList = (meal) =>{
        const newList = [...list, meal];
        setList(newList);


    }

    return (
        <div className = 'meals-container'>
            
            <div className="meals">
            
            {
                meals.map(meal => 
                    <Meal
                    key = {meal.idMeal}
                    meal = {meal}
                    handleAddToList = {handleAddToList}
                    >

                    </Meal>
                    
                    )
            }
            </div>
            
            <Cart
            list = {list}
            ></Cart>

            

            
        </div>
    );
};

export default Meals;