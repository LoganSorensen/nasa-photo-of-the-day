import React from "react";

const ImageCard = props => {
    return (
        <div className="img-card" key={props.id}>
            <img alt="image of the day" src={props.imgUrl} />
            <h2>Image of the Day</h2>
        </div>
    );
};
export default ImageCard;
