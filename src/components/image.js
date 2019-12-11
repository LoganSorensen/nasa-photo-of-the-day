import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./imageCard";

export default function Image() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                console.log(response);
                setImage(response.data.url);
            })
            .catch(error => {
                console.log("The data was not returned", error)
            });
    }, []);

    return (
        <div className="container">
            <div className="entry">
                <ImageCard imgUrl={image} />
            </div>
        </div>
    )
}
