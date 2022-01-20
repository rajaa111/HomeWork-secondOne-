import React from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
function Details() {
  let uni = useLocation();
  console.log(uni);

  return (
    <div >
      <img
        src={uni.state.uni.url}
        className="detailimage"
        alt={uni.state.uni.name}
      />
      <div className = "moreinfo">
      <h4> Name : <p style = {{fontSize : 16, fontFamily: "Times New Roman Times serif",display:'inline'	}}>{uni.state.uni.name}</p></h4>
        <h4 >web page : <p style = {{display:'inline'	}}><a href={uni.state.uni.web_pages} target= "_blank" style={{ fontSize: 15, textDecoration: 'none'}}>
          {uni.state.uni.name}
          </a></p>
        </h4>
      
        <h4>Describtion : <p style = {{fontSize : 16, fontFamily: "Times New Roman Times serif",display:'inline'	}}>{uni.state.uni.description}</p></h4> 
      </div>
    </div>
  );
}
export default Details;
