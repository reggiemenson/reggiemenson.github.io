import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import LaptopIcon from './svg/LaptopIcon'

const Projects = () => {
  const [tech1, setTech1] = useState('')
  const [tech2, setTech2] = useState('')
  const [tech3, setTech3] = useState('')
  const [tech4, setTech4] = useState('')
  const [tech5, setTech5] = useState('')

  function highlight(e) {
    switch (e.target.getAttribute('value')) {
      case 'tech1':
        setTech1(e.target.getAttribute('name'))
        break
      case 'tech2':
        setTech2(e.target.getAttribute('name'))
        break
      case 'tech3':
        setTech3(e.target.getAttribute('name'))
        break
      case 'tech4':
        setTech4(e.target.getAttribute('name'))
        break
      case 'tech5':
        setTech5(e.target.getAttribute('name'))
        break
    }
  }

  function reset() {
    setTech1('')
    setTech2('')
    setTech3('')
    setTech4('')
    setTech5('')
  }

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="tile project-tile">
              <div className="tile is-child project-header">
                <div className="columns">
                  <div className="column is-one-quarter empty">
                  </div>
                  <div className="column is-two-quarters">
                    <figure className="image is-square">
                      <LaptopIcon />
                    </figure>
                    <h3 className="subtitle">Online</h3>
                    <p>
                      As part of the immersive course taken at General Assembly, I have been able to create a few projects utilising the languages and frameworks I'm familiar with.
                    </p>
                  </div>
                  <div className="column is-one-quarter empty">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarouselProvider
          naturalSlideWidth={75}
          naturalSlideHeight={160}
          visibleSlides={screen.width > 1050 ? 3 : screen.width > 450 ? 2 : 1}
          totalSlides={5}
          touchEnabled={true}
          dragEnabled={true}>
          <div className="controls">
            <div className="directions">
              <ButtonBack className="buttonS"><i className="fa fa-chevron-left" /></ButtonBack>
            </div>
            <div className="directions">
              <ButtonNext className="buttonS"><i className="fa fa-chevron-right" /></ButtonNext>
            </div>
          </div>
          <Slider>
            <Slide index={0}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./top-image/tripbit-map.png" alt="tripbit-logo" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="./top-image/4-user-icon.png" alt="four-team-icon" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">TripBit</p>
                      <p className="subtitle is-6">Project-4</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                      <div className="column is-narrow">
                        <a href="https://github.com/mr-anansi/tripbit" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon devicon-github-plain fa-2x" />
                          <p>ReadMe</p>
                        </a>
                      </div>
                      <div className="column is-narrow">
                        <div>
                          <a href="https://tripbit4.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <i className="skills-icon fab fa-chrome fa-2x" />
                            <p>Website</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content descrip">
                    Our final project full-stack app - built with a React.js frontend and a Django/Python backend.
                    <br />
                    <br />
                  </div>
                  <div className="tech-display">{tech5}</div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item tech-used">
                    <i className="proskill devicon-html5-plain" value='tech5' name='HTML5' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-css3-plain" value='tech5' name='CSS3' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-react-original" value='tech5' name='React.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-babel-plain" value='tech5' name='Babel' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill fab fa-yarn" value='tech5' name='Yarn' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-webpack-plain" value='tech5' name='Webpack' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-django-plain" value='tech5' name='Django' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-python-plain" value='tech5' name='Python' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-postgresql-plain" value='tech5' name='PostgreSQL' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-heroku-original" value='tech5' name='Heroku' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-trello-plain" value='tech5' name='Trello' onMouseEnter={highlight} onMouseLeave={reset}></i>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./top-image/the-kitchen-cropped.png" alt="the-kitchen-logo" />
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
                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                      <div className="column is-narrow">
                        <a href="https://github.com/mr-anansi/the-kitchen" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon devicon-github-plain fa-2x" />
                          <p>ReadMe</p>
                        </a>
                      </div>
                      <div className="column is-narrow">
                        <div>
                          <a href="https://the-kitchen-p3.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <i className="skills-icon fab fa-chrome fa-2x" />
                            <p>Website</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content descrip">
                    Our first full stack app - built with a React.js frontend and an Node/Express backend. Components were created with React Hooks.
                  </div>
                  <div className="content tech-display">{tech4}</div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item tech-used">
                    <i className="proskill devicon-html5-plain" value='tech4' name='HTML5' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-css3-plain" value='tech4' name='CSS3' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-react-original" value='tech4' name='React.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-babel-plain" value='tech4' name='Babel' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill fab fa-npm" value='tech4' name='NPM' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-webpack-plain" value='tech4' name='Webpack' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-express-original" value='tech4' name='Express.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-nodejs-plain" value='tech4' name='Node.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-mongodb-plain" value='tech4' name='MongoDB' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-heroku-original" value='tech4' name='Heroku' onMouseEnter={highlight} onMouseLeave={reset}></i>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./top-image/park-my-bike(large).png" alt="park-my-bike-logo" />
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
                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                      <div className="column is-narrow">
                        <a href="https://github.com/mr-anansi/park-my-bike" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon devicon-github-plain fa-2x" />
                          <p>ReadMe</p>
                        </a>
                      </div>
                      <div className="column is-narrow">
                        <div>
                          <a href="https://reggiemenson.com/park-my-bike" target="_blank" rel="noopener noreferrer"><i className="skills-icon fab fa-chrome fa-2x" />
                            <p>Website</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content descrip">
                    A React.js app built for a class 48-hour Hackathon. The project uses class structures and makes use of two APIs.
                  </div>
                  <div className="tech-display">{tech3}</div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item tech-used">
                    <i className="proskill devicon-html5-plain" value='tech3' name='HTML5' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-css3-plain" value='tech3' name='CSS3' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-react-original" value='tech3' name='React.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-babel-plain" value='tech3' name='Babel' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill fab fa-npm" value='tech3' name='NPM' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-webpack-plain" value='tech3' name='Webpack' onMouseEnter={highlight} onMouseLeave={reset}></i>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./top-image/heroes-vs-villains-cropped.png" alt="heroes-vs-villains-logo" />
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
                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                      <div className="column is-narrow">
                        <a href="https://github.com/mr-anansi/heroes-vs-villains" target="_blank" rel="noopener noreferrer"><i className="skills-icon devicon-github-plain fa-2x" />
                          <p>ReadMe</p>
                        </a>
                      </div>
                      <div className="column is-narrow">
                        <div>
                          <a href="https://reggiemenson.com/heroes-vs-villains" target="_blank" rel="noopener noreferrer"><i className="skills-icon fab fa-chrome fa-2x" />
                            <p>Website</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content descrip">
                    A React.js project created as an additional project to practice React principles and API integration.
                    <br />
                    <br />
                  </div>
                  <div className="tech-display">{tech2}</div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item tech-used">
                    <i className="proskill devicon-html5-plain" value='tech2' name='HTML5' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-css3-plain" value='tech2' name='CSS3' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-react-original" value='tech2' name='React.js' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-babel-plain" value='tech2' name='Babel' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill fab fa-npm" value='tech2' name='NPM' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-webpack-plain" value='tech2' name='Webpack' onMouseEnter={highlight} onMouseLeave={reset}></i>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./top-image/invasion-cropped.png" alt="invasion-game-screen" />
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
                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                      <div className="column is-narrow">
                        <a href="https://github.com/mr-anansi/invasion" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon devicon-github-plain fa-2x" />
                          <p>ReadMe</p>
                        </a>
                      </div>
                      <div className="column is-narrow">
                        <div>
                          <a href="https://reggiemenson.com/invasion" target="_blank" rel="noopener noreferrer">
                            <i className="skills-icon fab fa-chrome fa-2x" />
                            <p>Website</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content descrip">
                    A recreation of Space Invaders using HTML, CSS3 and Vanilla JavaScript.
                    <br />
                    <br />
                  </div>
                  <div className="tech-display">{tech1}</div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item tech-used">
                    <i className="proskill devicon-html5-plain" value='tech1' name='HTML5' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-css3-plain" value='tech1' name='CSS3' onMouseEnter={highlight} onMouseLeave={reset}></i>
                    <i className="proskill devicon-javascript-plain" value='tech1' name='JavaScript' onMouseEnter={highlight} onMouseLeave={reset}></i>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default Projects