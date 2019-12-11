import React from "react";

const ImageCard = props => {
    return (
        <div className="img-card" key={props.id}>
            <img alt="image of the day" src={props.imageUrl} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};
export default ImageCard;
