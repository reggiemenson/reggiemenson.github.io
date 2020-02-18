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
    <div className="section">
      <div className="container">

        <div className="columns">
          <div className="column">
            <div className="tile project-tile">
              <div className="tile is-child project-header">

              <div class="columns">
  <div class="column is-one-quarter empty">
  </div>
  <div class="column is-two-quarters">
  <figure className="image is-square">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="65" height="65" viewBox="0 0 336.000000 336.000000"
                    preserveAspectRatio="xMidYMid meet">
                      <metadata>
                      Icon created by freepik
                      </metadata>
                    <g transform="translate(0.000000,336.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1429 3275 c-271 -43 -521 -148 -734 -312 -196 -149 -397 -400 -490
                    -610 -239 -544 -179 -1137 164 -1617 144 -201 347 -374 576 -489 388 -195 823
                    -227 1235 -90 541 179 948 638 1066 1199 24 114 28 151 28 319 0 218 -15 325
                    -71 500 -74 230 -201 441 -373 619 -263 272 -560 426 -928 481 -119 18 -356
                    18 -473 0z m486 -100 c403 -63 780 -305 1007 -646 86 -129 104 -164 154 -286
                    114 -283 137 -645 60 -941 -97 -371 -349 -709 -679 -911 -141 -86 -357 -169
                    -512 -196 -674 -117 -1327 211 -1633 822 -159 316 -196 696 -103 1059 39 154
                    100 288 198 437 331 502 906 755 1508 662z"/>
                    <path d="M684 2620 c-25 -13 -49 -35 -62 -59 -22 -39 -22 -40 -22 -700 l0
                    -661 -49 0 c-27 0 -61 -4 -75 -10 -25 -9 -26 -13 -26 -82 0 -83 20 -137 66
                    -180 64 -60 38 -58 812 -58 635 0 711 2 723 16 9 11 10 20 2 32 -9 16 -72 17
                    -725 22 -666 5 -716 6 -741 23 -39 25 -67 75 -67 120 l0 37 425 0 c397 0 426
                    -1 431 -17 14 -43 31 -68 59 -85 27 -16 54 -18 237 -18 l207 0 35 30 c19 17
                    38 44 41 60 l7 30 424 0 424 0 0 -40 c0 -50 -20 -91 -57 -116 -25 -17 -54 -19
                    -308 -24 l-280 -5 0 -30 0 -30 268 -3 c169 -1 283 2 309 8 52 14 120 82 136
                    136 14 49 16 143 2 164 -6 10 -32 16 -84 18 l-76 4 0 665 c0 731 3 698 -62
                    745 l-33 23 -950 3 c-937 2 -951 2 -991 -18z m1946 -80 c20 -20 20 -33 20
                    -680 l0 -660 -990 0 -990 0 2 659 c3 632 4 660 22 680 l19 21 949 0 c935 0
                    948 0 968 -20z m-740 -1427 c0 -3 -7 -15 -17 -25 -14 -16 -35 -18 -204 -18
                    -157 0 -190 3 -203 16 -9 8 -16 20 -16 25 0 5 91 9 220 9 121 0 220 -3 220 -7z"/>
                    <path d="M740 2474 c-6 -15 -10 -249 -10 -594 0 -345 4 -579 10 -594 l10 -26
                    908 0 c693 0 911 3 920 12 17 17 17 1199 0 1216 -9 9 -185 12 -729 12 -642 0
                    -718 -2 -730 -16 -9 -11 -10 -20 -2 -32 9 -16 69 -17 707 -20 l696 -2 -2 -548
                    -3 -547 -852 -3 -853 -2 0 550 0 550 95 0 c80 0 96 3 104 18 6 11 6 24 0 35
                    -9 15 -27 17 -135 17 -124 0 -124 0 -134 -26z"/>
                    </g>
                  </svg>
                </figure>
                <h3 className="subtitle">Online</h3>
                <p>
                  As part of the immersive course taken at General Assembly, I have been able to create a few projects utilising the languages and frameworks I'm familiar with.
                </p>
  </div>
  <div class="column is-one-quarter empty">
  </div>
</div>

                
              </div>
            </div>

          </div>

        </div>
        {/* <div className="columns">
          <div className="column is-one-quarter"> */}
        <CarouselProvider
          naturalSlideWidth={75}
          naturalSlideHeight={140}
          visibleSlides={3}
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
                        Our final project full-stack app - built with a React.js frontend and a Django/Python backend.
                        <br/>
                        <br/>
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
                        <br/>
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
                        <br/>
                        <br/>
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
                        <br/>
                        <br/>
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