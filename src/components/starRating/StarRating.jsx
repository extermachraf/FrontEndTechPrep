
// the objective of this component is to create a star rating system that can be used in any other component that needs it
//  the star rating system will be a reusable component that will take in a prop of numberOfStars and will display the number 
// of stars that is passed in the prop and also the star rating system will be able to handle the number of stars 
// that is clicked on and also the number of stars that is hovered on

import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './starRating.css'

const StarRating = ({numberOfStars = 5}) => {
    //state to handle the rating
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    //function to handle the click event of the stars
    // this function will take in the rating value and set the rating to the value of the rating that is clicked on
    function handleClick(ratingValue){
        if(ratingValue === rating){
            setRating(0);
            return;
        }
        setRating(ratingValue);
    }

    //function to handle the hover event of the stars
    // this function will take in the rating value and set the hover to the value of the rating that is hovered on
    function handleMouseEnter(ratingValue){
        setHover(ratingValue);

    }

    //function to handle the mouse leave event of the stars
    // this function will set the hover to the value of the rating
    function handleMouseLeave(){
        setHover(rating);
    }
    //this will return the star rating system
    // it will map through the number of stars and display the stars
    // it will also handle the click, hover, leave event of the stars
    // it will also display the stars that are hovered on and clicked on
    return (
        <div className='star-rating'>
            {
                [...Array(numberOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar className={index <= (hover || rating) ? 'active' : 'inactive'}
                     key={index} size={80} onClick={() => handleClick(index)} onMouseMove={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}/>
                })
            }
        </div>
  )
}

export default StarRating
