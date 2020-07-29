import React from "react";
import {
  Card,
  CardImgOverlay,
  CardImg,
  CardText,
  ButtonGroup,
  Button,
} from "reactstrap";
import { MyCardTitle, MyCardText, DateBox } from "./Styles";

const TextBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 !important",
};

const daysPerMonth = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const ImageCard = (props) => {
  let stateYear = Number(props.stateDate.year);
  let stateMonth = Number(props.stateDate.month);
  let stateDay = Number(props.stateDate.day);

  const decrementDate = () => {
    if (props.stateDate.day > 1) {
      if (stateDay < 11) {
        props.setDate({ ...props.stateDate, day: `0${stateDay - 1}` });
      } else {
        props.setDate({ ...props.stateDate, day: `${stateDay - 1}` });
      }
    } else if (props.stateDate.month > 1) {
      if (stateMonth < 11) {
        props.setDate({
          ...props.stateDate,
          month: `0${stateMonth - 1}`,
          day: `${daysPerMonth[stateMonth - 1]}`,
        });
      } else {
        props.setDate({
          ...props.stateDate,
          month: `${stateMonth - 1}`,
          day: `${daysPerMonth[stateMonth - 1]}`,
        });
      }
    } else {
      props.setDate({ year: `${stateYear - 1}`, month: `12`, day: `31` });
    }
  };

  const incrementDate = () => {
    if (stateDay < daysPerMonth[stateMonth]) {
      if (stateDay > 8) {
        props.setDate({ ...props.stateDate, day: `${stateDay + 1}` });
      } else {
        props.setDate({ ...props.stateDate, day: `0${stateDay + 1}` });
      }
    } else if (stateMonth < 12) {
      if (stateMonth > 8) {
        props.setDate({
          ...props.stateDate,
          month: `${stateMonth + 1}`,
          day: "01",
        });
      } else {
        props.setDate({
          ...props.stateDate,
          month: `0${stateMonth + 1}`,
          day: "01",
        });
      }
    } else {
      props.setDate({ year: `${stateYear + 1}`, month: "01", day: "01" });
    }
  };

  const today = new Date();

  return (
    <div className="img-card" key={props.id}>
      <Card>
        <CardImg
          src={props.imageUrl}
          alt="image of the day"
          style={{ height: "100vh", width: "100vw" }}
        />
        <CardImgOverlay style={TextBox}>
          <MyCardText>
            <MyCardTitle>{props.title}</MyCardTitle>
            <CardText>{props.explanation}</CardText>
          </MyCardText>
          <ButtonGroup>
            <Button
              style={{ borderTopLeftRadius: "0" }}
              onClick={decrementDate}
            >
              Previous Day
            </Button>
            <DateBox>
              <span>Date: {props.date}</span>
            </DateBox>
            {stateYear === today.getFullYear() &&
            stateMonth === today.getMonth() + 1 &&
            stateDay === today.getDate() ? (
              <Button style={{ borderTopRightRadius: "0" }} disabled>
                Next Day
              </Button>
            ) : (
              <Button
                style={{ borderTopRightRadius: "0" }}
                onClick={incrementDate}
              >
                Next Day
              </Button>
            )}
          </ButtonGroup>
        </CardImgOverlay>
      </Card>
    </div>
  );
};
export default ImageCard;
