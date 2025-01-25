import React, { useState } from 'react';
import "./home.css";

export default function HomeNotification() {
    const[animated,setanimated]=useState(false);
    const handleClick = () => {
        setanimated(true);
        // Remove the 'clicked' class after the animation ends (2s duration)
        setTimeout(() => setanimated(false), 2000); // 2s = animation duration
      };

  return (
    <div className="home-page">
          
      <div className="main" onClick={()=>{handleClick()}}>
      <h1 className="">Home Icon using keyframes <br></br><p style={{fontSize:"18px" ,color:"#861fed"}}>click to animate</p> </h1>
        <svg
          width="298"
          height="288"
          viewBox="0 0 298 288"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Building */}
          <g className={`building ${animated?"active":""}`}>
            <path
              d="M60.0056 39.9456L143.92 6.77939C147.857 5.22349 152.232 5.19219 156.191 6.69161L200.022 23.2944C206.629 25.7972 211 32.1263 211 39.1921V255C211 264.389 203.389 272 194 272H150H56.1446C46.4174 272 38.6735 263.853 39.1664 254.139L49.2761 54.8941C49.6138 48.239 53.8084 42.3949 60.0056 39.9456Z"
              fill="white"
              stroke="black"
              strokeWidth="10"
            />
          </g>

          {/* Sub-Building */}
          <g className={`sbuild ${animated?"active":""}`}>
            <path
              d="M242.05 13.3473L176.661 31.3186C159.884 35.9296 148.011 50.857 147.295 68.2415L140.506 232.989C139.57 255.707 157.734 274.636 180.472 274.636H252.65C274.742 274.636 292.65 256.727 292.65 234.636L292.65 51.9171C292.65 25.5096 267.513 6.34901 242.05 13.3473Z"
              fill="whitesmoke"
              stroke="#080505"
              strokeWidth="10"
            />
          </g>

          {/* Windows */}
          <g className="windows">
            <rect x="236" y="85" width="29" height="28" className={`win1 ${animated?"active":""}`} fill="#0B0B0B" />
            <rect x="173" y="85" width="29" height="28" className={`win2 ${animated?"active":""}`} fill="#0B0B0B" />
          </g>

          {/* Home Structure */}
          <g className={`home ${animated?"active":""}`}>
            <path
              d="M13.4 216.745V211.745C5.87707 211.745 2.9763 201.949 9.28641 197.853L112.333 130.961L215.38 197.853C221.69 201.949 218.79 211.745 211.267 211.745V216.745H206.267V262.199C206.267 273.245 197.312 282.199 186.267 282.199H112.333H38.4C27.3543 282.199 18.4 273.245 18.4 262.199V216.745H13.4Z"
              fill="white"
              stroke="black"
              strokeWidth="10"
            />
          </g>

          {/* Door */}
          <g className={`door ${animated?"active":""}`}>
            <path
              d="M96 239.5C96 231.492 102.492 225 110.5 225V225C118.508 225 125 231.492 125 239.5V278H96V239.5Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
