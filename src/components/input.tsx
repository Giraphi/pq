import React, {useState} from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`
const StyledText = styled.div`
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    height: 50px;
    font-size: 25px;
`
const StyledButton = styled.div`
    margin-top: 25px;
    height: 50px;
    border: 1px solid white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const StyledResult = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const StyledLabel = styled.div`
    grid-column: 1;
    border-bottom: 1px solid white;
    padding: 5px;
`

const StyledNumber = styled.div`
    grid-column: 2;
    border-bottom: 1px solid white;
    padding: 5px;

`

export interface InputProps {
}

const defaultResult = {total: 0, bar: 0, first: 0, second: 0}

export default function Input(props: InputProps) {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState<{ total: number, bar: number, first: number, second: number }>(defaultResult);

    function handleUserInput(e: React.ChangeEvent<HTMLInputElement>) {
        setResult(defaultResult);
        setUserInput(e.target.value);
    }

    function handleButtonClick() {
        const total = Number(userInput);
        const bar = Math.floor(total / 3);
        const second = Math.floor((total - bar) / 3);
        const first = total - bar - second;

        setResult({
            total, bar, second, first
        })

    }

    return (
        <StyledRoot>
            <StyledText>
                Insgesamt eingesammelt:
            </StyledText>
            <StyledInput
                value={userInput}
                type={"number"}
                pattern="[0-9]*"
                onChange={handleUserInput}
            />
            <StyledButton onClick={handleButtonClick}>Verteilung Berechnen</StyledButton>

            <StyledResult>
                <StyledLabel>Total:</StyledLabel>
                <StyledNumber>{result.total}</StyledNumber>

                <StyledLabel>Bar:</StyledLabel>
                <StyledNumber>{result.bar}</StyledNumber>

                <StyledLabel>First Place:</StyledLabel>
                <StyledNumber>{result.first}</StyledNumber>

                <StyledLabel>Second Place:</StyledLabel>
                <StyledNumber>{result.second}</StyledNumber>
            </StyledResult>
        </StyledRoot>
    );
}