import React, { useState } from 'react'


const Home = () => {


  return (<section className="hero is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            {/* <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a> */}
            <span className="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item">
                Projects
              </a>
              <a className="navbar-item">
                Experience
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container">
        <p className="title main">
          {/* Bold and enlarge first name */}
          <span className="first">Reggie</span> Tachie-Menson
        </p>
        <p className="subtitle">
          Software Developer
        </p>
      </div>
    </div>
    {/* <?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"> */}
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M975 2139 c-218 -21 -409 -121 -586 -307 -128 -133 -184 -237 -234
-426 -50 -196 -55 -358 -14 -537 47 -205 241 -473 430 -595 94 -61 158 -88
296 -125 152 -40 301 -44 433 -11 47 11 110 26 141 32 70 14 184 67 264 125
93 66 201 189 288 325 88 140 121 230 137 373 23 192 -28 464 -117 627 -47 87
-87 136 -208 255 -145 142 -297 223 -475 253 -84 14 -265 20 -355 11z m143
-80 l3 -56 -43 -12 c-70 -21 -221 -95 -258 -128 -33 -29 -40 -31 -145 -35 -73
-3 -129 -12 -167 -25 l-58 -20 0 38 c0 33 7 44 66 98 39 35 101 78 152 104
145 74 230 96 362 94 l85 -2 3 -56z m287 31 c143 -41 331 -154 385 -230 20
-28 28 -90 12 -90 -5 0 -44 9 -87 20 -52 13 -111 20 -176 20 -60 0 -100 4
-105 11 -9 15 -167 118 -236 154 l-58 30 0 47 c0 34 5 50 18 58 25 16 163 5
247 -20z m-588 -450 c32 -97 51 -169 46 -176 -4 -6 -25 -33 -46 -60 -21 -27
-63 -100 -93 -162 -31 -62 -61 -115 -68 -116 -6 -2 -74 -13 -151 -25 l-139
-23 -20 24 c-63 77 -109 252 -88 336 29 110 122 269 182 312 45 32 164 60 249
57 l73 -2 55 -165z m874 136 c126 -27 178 -72 252 -221 56 -112 69 -168 56
-240 -12 -70 -64 -186 -102 -231 l-26 -31 -93 18 c-51 10 -122 21 -158 25
l-66 6 -49 105 c-27 58 -75 144 -107 193 l-58 88 49 103 c26 57 56 125 66 152
l18 47 76 0 c42 0 106 -7 142 -14z m-413 -313 c50 -5 57 -10 88 -52 19 -25 64
-105 101 -177 79 -158 84 -131 -59 -346 -115 -174 -92 -163 -336 -155 -190 6
-161 -9 -258 135 -66 97 -124 208 -124 237 0 33 105 235 154 297 31 39 54 58
73 61 47 7 304 7 361 0z m-1045 -125 c9 -72 42 -166 79 -224 l31 -49 1 -160
c1 -88 5 -167 9 -176 6 -12 -4 -21 -42 -39 -61 -28 -72 -22 -108 59 -46 104
-66 214 -65 361 1 169 17 249 52 267 36 18 37 18 43 -39z m1840 17 c38 -38 51
-322 21 -457 -19 -83 -60 -179 -96 -222 l-25 -29 -47 19 c-45 18 -47 20 -39
49 4 17 8 98 8 180 0 146 1 151 26 185 48 63 89 162 104 253 6 39 23 47 48 22z
m-680 -722 c33 -43 75 -96 94 -117 38 -46 40 -54 14 -104 -38 -73 -146 -163
-226 -187 -104 -32 -297 -25 -369 12 -44 23 -134 112 -161 158 -42 74 -41 91
8 148 24 29 64 79 89 112 l46 60 222 -2 223 -2 60 -78z m-970 7 c63 -66 123
-106 199 -134 59 -22 64 -27 81 -72 23 -61 56 -107 115 -161 46 -41 46 -42 28
-62 -25 -28 -48 -26 -128 8 -92 40 -193 109 -272 187 -75 74 -166 198 -166
225 0 17 59 58 85 59 6 0 32 -23 58 -50z m1508 0 c27 -15 24 -38 -16 -97 -86
-127 -216 -240 -350 -304 -112 -53 -165 -64 -209 -42 l-35 16 68 48 c71 50
123 110 141 164 9 26 19 34 64 48 69 22 158 81 220 145 52 53 56 54 117 22z"/>
</g>
</svg>

  </section>
  )
}

export default Home