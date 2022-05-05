import React from 'react';
import GlobalStyle from "./style/global-style";
import Input from "./components/input";
import styled from "styled-components";
import dog from './assets/dog.webp';
import "./style/font-faces.css";

const StyledRoot = styled.div`
    padding: 50px 5px;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledImage = styled.img`
    margin-top: 30px;
    width: 150px;
    margin-bottom: 30px;
`

function App() {
    return (
        <StyledRoot>
            <GlobalStyle/>
            <StyledContainer>
                <Input/>
            <StyledImage src={dog}/>
            </StyledContainer>
        </StyledRoot>
    );
}

export default App;
