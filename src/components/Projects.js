import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
    <div className="section" id="projects">
      <div className="container">

        <div className="columns">
          <div className="column is-half">
            <div className="tile project-tile">
              <div className="tile is-child project-header">
                {/* <figure className="image is-square">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="65" height="65" viewBox="0 0 606.000000 574.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Icon created by freepik
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,574.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M2870 5324 c-485 -44 -956 -233 -1320 -528 -102 -82 -292 -273 -370
                    -371 -266 -336 -440 -735 -507 -1165 -24 -161 -24 -529 0 -690 55 -355 182
                    -689 369 -973 388 -587 979 -966 1678 -1074 161 -24 529 -24 690 0 605 94
                    1137 394 1517 854 281 341 460 745 530 1193 24 161 24 529 0 690 -82 525 -312
                    986 -677 1350 -150 151 -235 221 -397 328 -281 185 -619 314 -963 367 -101 15
                    -454 28 -550 19z m563 -168 c369 -62 695 -201 992 -424 129 -97 372 -340 462
                    -462 326 -441 468 -924 441 -1495 -26 -566 -281 -1112 -704 -1507 -347 -324
                    -721 -512 -1186 -594 -192 -34 -553 -33 -746 0 -370 65 -685 200 -982 419
                    -122 90 -365 333 -462 462 -301 402 -448 844 -448 1357 -1 280 28 460 115 726
                    111 342 277 606 549 878 153 153 283 256 445 354 233 140 503 238 788 286 203
                    34 532 34 736 0z"/>
                      <path d="M1635 4341 c-76 -19 -146 -83 -165 -151 -6 -22 -10 -413 -10 -1022
                    l0 -988 -98 0 c-133 0 -136 -3 -130 -143 4 -82 9 -113 30 -157 32 -69 85 -122
                    157 -158 l56 -27 1056 -3 c683 -2 1065 1 1082 7 35 13 46 55 22 81 -18 20 -38
                    20 -1065 20 -1170 0 -1107 -4 -1174 70 -38 42 -56 92 -56 158 l0 42 640 0
                    c519 0 640 -2 640 -13 0 -7 12 -37 26 -65 19 -39 38 -59 72 -80 l47 -27 265
                    -3 c177 -3 283 0 318 8 70 15 126 67 144 133 l12 47 638 0 638 0 0 -54 c0 -63
                    -18 -111 -57 -150 -62 -62 -50 -61 -496 -64 l-407 -3 -16 -24 c-15 -23 -15
                    -27 0 -50 9 -14 27 -27 40 -31 13 -3 198 -4 412 -2 l389 3 55 26 c77 36 124
                    80 157 147 24 49 28 72 31 163 6 151 7 149 -128 149 l-110 0 -2 998 -3 998
                    -26 49 c-30 59 -88 104 -150 116 -54 10 -2792 10 -2834 0z m2867 -139 l33 -32
                    0 -993 0 -992 -1482 -3 -1483 -2 0 985 c0 1090 -3 1031 63 1060 27 12 255 14
                    1434 12 l1403 -2 32 -33z m-1112 -2145 c0 -23 -39 -56 -72 -62 -18 -3 -147 -5
                    -286 -3 l-254 3 -24 28 c-13 15 -24 32 -24 38 0 5 130 9 330 9 266 0 330 -3
                    330 -13z"/>
                      <path d="M1676 4118 c-14 -20 -16 -123 -16 -908 0 -785 2 -888 16 -908 l15
                    -22 1363 0 c1046 0 1365 3 1374 12 17 17 17 1819 0 1836 -9 9 -266 12 -1094
                    12 -1181 0 -1109 4 -1102 -57 2 -17 12 -32 28 -40 20 -10 246 -13 1048 -13
                    l1022 0 0 -820 0 -820 -1280 0 -1280 0 0 820 0 820 128 0 c144 0 175 10 180
                    53 6 54 -4 57 -204 57 -178 0 -183 -1 -198 -22z"/>
                    </g>
                  </svg>
                </figure> */}
                <div className="title project-title">
                  Projects
                </div>
                <p>
                  As part of the immersive course taken at General Assembly, I have been able to create a few projects utilising the languages and frameworks I'm familiar with.
                </p>
              </div>
            </div>

          </div>

        </div>
        {/* <div className="columns">
          <div className="column is-one-quarter"> */}
        <CarouselProvider
          naturalSlideWidth={90}
          naturalSlideHeight={160}
          visibleSlides={3}
          totalSlides={5}
          touchEnabled={true}
          dragEnabled={true}
          infinite={true}>
          <Slider>
            <div className="columns">
              <Slide index={0}>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="./top-image/tripbit-cropped.png" alt="tripbit-logo" />
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
                        Our final project full-stack app, built with a React.js frontend and a Django/Python backend.
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
                </div>
              </Slide>
              <Slide index={1}>
                <div className="column">
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
                      <div className="tech-display">{tech4}</div>
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
                </div>
              </Slide>
              <Slide index={2}>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="./top-image/park-my-bike.png" alt="park-my-bike-logo" />
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
                        A React.js app built for a class Hackathon. The project uses class structures and makes use of two APIs.
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
                </div>
              </Slide>
              <Slide index={3}>
                <div className="column">
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
                </div>
              </Slide>
              <Slide index={4}>
                <div className="column">
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
                </div>
              </Slide>
            </div>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>

        {/* </div>          
        </div> */}

        {/* <div className="columns"> */}
        {/* <div className="column"> */}

        {/* </div> */}


        {/* <div className="column"> */}

        {/* </div> */}


        {/* <div className="column"> */}

        {/* </div> */}

        {/* <div className="column"> */}

        {/* </div> */}

        {/* </div> */}


      </div>
    </div>
  )
}

export default Projects