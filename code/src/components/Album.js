import React from 'react';
import {Artist} from './Artist';
import dots from '../icons/dots.svg'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'

export const Album = (props) => { 
  return (
    // <div className='album-child'>   
    <div className='album-child'> 

        <a href={props.link} target='_blank'>
            <img src={props.image} alt="cover" className='cover-image'></img>
    
            <div className='overlay'>
                <img src={heart} alt='heart' className='icon-heart'></img>
                <img src={play} alt='play' className='icon-play'></img>
                <img src={dots} alt='dots' className='icon-dots' ></img>
            </div>
        </a>

        <div className='album-name'>
            < a href={props.link} target='_blank'>
                <h2>{props.name}</h2>
            </a>
        </div>
        
        <div className='artist-name'>
        {props.artists.map (artist => {
            return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} />
        })}
        </div>

    </div>
    // </div>

)
        // <div className = 'Album'>
        // <Cover />
        // <h2>Album: {props.data.name} </h2>
        // <Artist />
        // </div> 

};