import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return true;
    const { name, genres, followers, images } = artist;

    return (
        <div>
            <h3>{name}</h3>
            <img 
                style={{width:300, borderRadius:'50%', objectFit:'cover', margin:'0 0 20px'}} 
                src={images[0] && images[0].url} 
                alt="artist-profile" 
            />
            <p>{followers.total} followers</p>
            <p>{genres.join(', ')}</p>

        </div>
    )
}

export default Artist;