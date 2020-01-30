import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Projects = () => {


  return (
    <div className="section">
      <div className="container">

        <div className="columns">
          <div className="column">
            <section className="title">
              Projects
            </section>
          </div>

          <div className="column is-one-quarter">
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
                      <img src="../images/4-user-icon.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">TripBit</p>
                    <p className="subtitle is-6">Project-4</p>
                  </div>
                </div>
                <div className="content">
                  Our final project full-stack app, built with a React.js frontend and a Django/Python backend.
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="columns">
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
                      <i className="fas fa-users fa-2x"></i>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">the-kitchen</p>
                    <p className="subtitle is-6">Project-3</p>
                  </div>
                </div>
                <div className="content">
                  Our first full stack app, built with a React.js frontend and an Node/Express backend. Components were created with React Hooks.
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
                    <figure className="image is-48x48 fa-2x">
                      <i className="fas fa-user-friends"></i>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Park-My-Bike</p>
                    <p className="subtitle is-6">Project-2</p>
                  </div>
                </div>
                <div className="content">
                  A React.js app built for a class Hackathon. The project uses class structures and makes use of two APIs.
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
                      <i className="fas fa-user fa-2x"></i>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">Heroes-VS-Villains</p>
                    <p className="subtitle is-6">Project-X</p>
                  </div>
                </div>
                <div className="content">
                  A React.js project created as an additional project to practice React principles and API integration.
                </div>
              </div>
            </div>
          </div>

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
                      <i className="fas fa-user fa-2x"></i>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Invasion</p>
                    <p className="subtitle is-6">Project-1</p>
                  </div>
                </div>
                <div className="content">
                  A recreation of Space Invaders using HTML, CSS3 and Vanilla JavaScript.
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