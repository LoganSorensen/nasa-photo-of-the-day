import React from "react";
import {Card, CardImgOverlay, CardImg, CardTitle, CardText} from "reactstrap";
import {MyCardTitle, MyCardText, MyCardOverlay} from "./Styles";


const ImageCard = props => {
    return (
        <div className="img-card" key={props.id}>
            {/* <img alt="image of the day" src={props.imageUrl} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p> */}
            <Card>
                <CardImg src={props.imageUrl} alt="image of the day"/>
                
                <CardImgOverlay style={{MyCardOverlay}}>
                    <MyCardTitle>{props.title}</MyCardTitle>
                    <MyCardText>{props.explanation}</MyCardText>
                </CardImgOverlay>
            
            </Card>

        </div>
    );
};
export default ImageCard;
