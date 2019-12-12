import styled from "styled-components";
import {CardImgOverlay} from "reactstrap"

export const MyCardTitle = styled.p`
    color: white;
    font-size: 2rem;
`

export const MyCardText = styled.div`
    color: white;
    width: 50%;
    background-color: rgba(128, 128, 128, 0.8);
    padding: 0 1% 1%;
    border-radius: 20px;
    textShadow: "1px 1px 1px black"
`

export const DateBox = styled.div`
    color: white;
    background-color: #6c757d;
    padding: 6px 12px;
`

// export const MyCardOverlay = styled(CardImgOverlay)`
// display: flex,
// flex-direction: column,
// justify-content: center,
// align-items: center,
// `