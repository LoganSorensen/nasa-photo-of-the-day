import React from "react";
import {Card, CardImgOverlay, CardImg, CardText, ButtonGroup, Button} from "reactstrap";
import {MyCardTitle, MyCardText, DateBox} from "./Styles";

const TextBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

const ImageCard = props => {
    return (
        <div className="img-card" key={props.id}>
            {/* <img alt="image of the day" src={props.imageUrl} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p> */}

            <Card>
                <CardImg 
                src={props.imageUrl} 
                alt="image of the day" 
                style={{height: "99vh", width: "99vw"}}
                />
                <CardImgOverlay style={TextBox}>
                    <MyCardText>
                        <MyCardTitle>{props.title}</MyCardTitle>
                        <CardText>{props.explanation}</CardText>
                    </MyCardText>
                    <ButtonGroup>
                        <Button>Previous Day</Button>
                        <DateBox><span>Date: {props.date}</span></DateBox>
                        <Button disabled>Next Day</Button>
                    </ButtonGroup>
                </CardImgOverlay>
            </Card>

        </div>
    );
};
export default ImageCard;
