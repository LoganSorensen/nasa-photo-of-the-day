import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./imageCard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response);
                setImage(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error)
            });
    }, []);

    return (
        // <div className="container">
        <>
            <ImageCard 
            key={image.id}
            imageUrl={image.hdurl}
            date={image.date}
            explanation={image.explanation}
            title={image.title}
            />
            </>
        // </div>
    )
}
