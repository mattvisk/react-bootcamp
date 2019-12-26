import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const SocialProfile = props => {
    const { link, image } = props.socialProfile;
    return (
        <span>
            <a href={link}>
                <img src={image} alt='social-profile' style={{height:30, margin:5}} />
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h4>Let's Connect!</h4>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return(
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}  />
                )
            })
        }
    </div>
)

export default SocialProfiles;