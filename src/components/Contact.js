import React, { useState } from 'react'


const Contact = () => {


  return (
    <footer className="footer" id="contact">
      <div className="column">
        <div className="test-logo-c">
        <figure className="image is-square">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="65" height="65" viewBox="0 0 332.000000 330.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
            Icon created by Those Icons
            </metadata>
            <g transform="translate(0.000000,330.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M1495 3224 c-271 -41 -513 -132 -725 -273 -106 -70 -302 -259 -386
            -371 -74 -99 -179 -298 -222 -421 -17 -47 -43 -139 -58 -205 -27 -111 -28
            -133 -28 -334 0 -201 1 -223 28 -334 38 -162 77 -270 148 -407 146 -284 393
            -533 678 -682 604 -317 1330 -221 1840 242 248 225 414 524 491 882 33 151 33
            447 0 599 -45 214 -140 446 -243 599 -57 84 -157 199 -250 286 -207 194 -475
            332 -774 396 -77 17 -141 22 -284 24 -102 2 -198 1 -215 -1z m423 -108 c473
            -72 902 -390 1117 -826 156 -316 196 -701 109 -1045 -97 -380 -353 -720 -701
            -929 -130 -78 -295 -141 -464 -178 -88 -19 -134 -22 -299 -22 -166 0 -211 3
            -300 22 -462 101 -837 384 -1043 789 -120 236 -167 432 -167 698 0 411 153
            780 441 1066 193 192 407 316 683 394 152 44 443 58 624 31z"/>
            <path d="M2255 2449 c-242 -137 -702 -396 -1022 -576 -321 -181 -583 -331
            -583 -334 0 -3 71 -32 158 -64 86 -32 231 -86 322 -120 91 -35 170 -60 176
            -56 6 3 222 204 480 446 257 242 479 449 493 460 31 25 23 13 -279 -394 -124
            -167 -276 -371 -337 -455 l-113 -151 0 -282 c0 -156 2 -283 4 -283 3 0 329
            378 352 408 9 13 37 5 190 -51 98 -36 203 -75 233 -87 38 -15 56 -18 61 -10 4
            6 19 82 34 168 32 179 68 379 131 732 24 135 65 362 90 505 25 143 52 290 59
            328 10 48 10 67 2 66 -6 -1 -209 -113 -451 -250z"/>
            </g>
          </svg>
        </figure>
        <h3 className="title">Contact</h3>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="tile is-ancester is-vertical">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content has-text-centered">
                      {/* <p> */}
                        <a href="https://github.com/mr-anansi" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon devicon-github-plain fa-2x"/>
                          <span className="social">github.com/mr-anansi</span>
                        </a>  
                      {/* </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="column">
              <div className="tile is-ancester is-vertical">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content has-text-centered">
                      <i className="skills-icon fas fa-envelope fa-2x"></i>
                      <span className="social">
                        mrmenson@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="column">
              <div className="tile is-ancester is-vertical">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content has-text-centered">
                      {/* <p> */}
                        <a href="https://linkedin.com/in/reggiemenson" target="_blank" rel="noopener noreferrer">
                          <i className="skills-icon fab fa-linkedin fa-2x"/>
                          <span className="social">linkedin.com/in/reggiemenson</span>
                        </a>
                      {/* </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Contact



