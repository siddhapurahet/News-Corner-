import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [data, setData] = useState("");
  const FetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=80341ce997034709bbdf74f677de70d7`
          : "https://newsapi.org/v2/everything?q=apple&from=2024-02-08&to=2024-02-08&sortBy=popularity&apiKey=80341ce997034709bbdf74f677de70d7"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    FetchData();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3 style={{ textAlign: "center" }}>TOP HEADLINES</h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {data
          ? data.map((items, index) => (
              <div key={items.url}>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-1">{items.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Image not found"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p>{items.content}</p>
                  <Link to={items.url} target="blank">
                    View More
                  </Link>
                </div>
              </div>
            ))
          : "LOADING..."}
        ;
      </div>
    </div>
  );
};

export default FetchData;
