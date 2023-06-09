import React from 'react'


function Card(props) {
    return (
        <div className='w-80 mt-3 mr-6'>
            <img src={props.img} alt='img' />
            <p className='text-base text-center mt-3'>{props.title}</p>
        </div>
    )
}

export default Card