import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Projects = () => {


  return (
    <div className="section">
      <div className="container">

        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="../images/invasion.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Invasion</p>
                    <p className="subtitle is-6">Project-1</p>
                  </div>
                </div>
                <div className="content">
                  A recreation of Space Invaders using HTML, CSS3 and Vanilla JavaScript. Used basic techniques to recreate a simple game structure and get familiar with the language. Task was completed in a week.
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="../images/park-my-bike.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Park-My-Bike</p>
                    <p className="subtitle is-6">Project-2</p>
                  </div>
                </div>
                <div className="content">
                  A React.js app built for a class Hackathon. The project uses class structures and makes use of two APIs. Took on the navigating role and researched add-ins to enhance our products final version.
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="../images/the-kitchen.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">the-kitchen</p>
                    <p className="subtitle is-6">Project-3</p>
                  </div>
                </div>
                <div className="content">
                  Our first full stack app, built with a React.js frontend and an Node/Express backend. Components were created with React Hooks. I took the lead on the back-end allowing my team members to concentrate on the content that we created ourselves and the user experience.
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="../images/tripbit.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <i className="fas fa-users"></i>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">TripBit</p>
                    <p className="subtitle is-6">Project-4</p>
                  </div>
                </div>
                <div className="content">
                  Our final project full-stack app, built with a React.js frontend and a Django/Python backend. I suggested working on the project’s back and front end from the onset and promoted the use of Trello. I took the lead on user path, authorisation and conditional access. I also volunteered across the app on debugging issues.
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="../images/heroes-vs-villains.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Heroes-VS-Villains</p>
                    <p className="subtitle is-6">Project-X</p>
                  </div>
                </div>
                <div className="content">
                  A React.js project created as an additional project to practice React principles and API integration. I integrated API calls with simple logic to create a game with a decent amount of changing content.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects