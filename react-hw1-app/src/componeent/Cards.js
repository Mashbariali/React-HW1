import React from 'react'

export default function Cards(props) {
  return (
    
    <div className='card'>
        <div className='card_body'>
            <img src={props.img} className="movie_image"/>
            <h3 className='movie_title'>{props.title}</h3>
            <h3 className='movie_story'>{props.story}</h3>
            <h3 className='movie_year'>{props.year}</h3>

        </div>

    </div>
  )
}


