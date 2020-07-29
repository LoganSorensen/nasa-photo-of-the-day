import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./imageCard";
import "bootstrap/dist/css/bootstrap.min.css";

const today = new Date();

export default function Image() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState({
    // year: "2020",
    // month: "07",
    // day: "20",
    year: `${today.getFullYear()}`,
    month: `${today.getMonth() + 1}`,
    day: `${today.getDate()}`,
  });
  const [makeRequest, setMakeRequest] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date.year}-${date.month}-${date.day}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response);
        setImage(response.data);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, [makeRequest, date.year, date.month, date.day]);

  const dateSelect = (e) => {
    console.log(e.target.value, e.target.name);
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const request = () => {
    setMakeRequest(!makeRequest);
  };

  return (
    <>
      <ImageCard
        key={image.id}
        imageUrl={image.hdurl}
        date={image.date}
        explanation={image.explanation}
        title={image.title}
        stateDate={date}
        setDate={setDate}
      />
      {/* <input placeholder="year" name="year" onChange={dateSelect}></input>
      <input placeholder="month" name="month" onChange={dateSelect}></input>
      <input placeholder="day" name="day" onChange={dateSelect}></input>
      <button onClick={request}>Click Me</button> */}
    </>
  );
}
