import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import data from "./data.js";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selecthostingOption, setselecthostingOption] = useState([]);
  const hostingChange = (e) => {
    e.preventDefault();
    setselecthostingOption([...selecthostingOption, e.target.id]);
    alert("item saved");
    document.getElementById(e.target.id).disabled = true;
  };

  useEffect(() => {
    console.log(selecthostingOption);
  }, [selecthostingOption]);
  //ps جربت اعمل السيف اني اعمل ليست وزبطت الليست بس مش زابط اخدها ع صفحة السيف واعمل رندر الها
  return (
    <div>
      <input
        style={{ marginLeft: -200 }}
        type="text"
        id="myInput"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search..."
        title="Type in a name"
      />
      {data
        .filter((uni) => {
          if (search === "") {
            return uni;
          } else if (
            uni.name.toLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return uni;
          }
        })
        .map((uni) => (
          <div style={{ float: "left", margin: 60, marginTop: 120 }}>
            <img src={uni.url} className="image" alt={uni.name} />
            <h6 className="info">{uni.name}</h6>
            <h6 className="info">
              <Link
                to={`/Home/details/${uni.name}`}
                state={{ uni }}
                style={{ color: "#232946", textDecoration: "none" }}
              >
                For more details : {uni.name}
              </Link>
            </h6>
            <h6 className="info">
              <input
                type="button"
                id={`${uni.name}`}
                onClick={hostingChange}
                value={`save ${uni.name}`}
                style={{
                  color:'#232946',
                  backgroundColor:'#d4d8f0',
                  cursor: "pointer",
                  outline: "none",
                  borderRadius:20,
                  borderColor:'#232946'
                }}
              />
            </h6>
          </div>
        ))}
    </div>
  );
};
export default Home;
