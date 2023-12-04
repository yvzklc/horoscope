import React from "react";
import "./main.scss";

const Main = ({data}) => {
  console.log(data);
  var x = data
   return (
    <div className="Main">
      <h2 className="title">WHO ARE YOU?</h2>
      <div className="cards">
        {data.map((item) => (
          <div className="card">
            <img className="card-image" src={item.image} alt="" />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-date">{item.date}</p>
            <span className="desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
