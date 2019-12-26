import React, { Component } from 'react';
import PROJECTS from '../data/projects';


const Project = props => {

    const { title, image, description, link } = props.project;

    return (
        <div style={{ display: 'inline-block', width:300, margin:10}}>
            <h3>{title}</h3>
            <div className="project-image">
                <img src={image} alt='profile' />
            </div>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}


const Projects = () => (
    <div style={{margin:'60px 0'}}>
        <h2>Highlighted Projects</h2>
        <div style={{margin:'60px 0'}}>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

export default Projects;