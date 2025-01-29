 import React from 'react'
 import "./google.css";
 export default function Googlebar() {
   return (
     <div style={{display:"flex", alignItems:'center', justifyContent:"center"}} >    <h1 style={{color:"white",textAlign:"center", marginBlock:"100px" ,display:"flex", alignItems:'center'}}>Google voice Animation bar using property </h1>  
        <div class="googlelineAnimate">
     <div class="linebar blur"></div>
     <div class="linebar"></div>
   </div>
   </div>
   )
 }
 