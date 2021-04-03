import styled from "styled-components";
import { MagnifyingGlass, Mic } from "./Icons";
import { useState } from "react";

const Container = styled.div`
    width: 50%;
    @media (max-width: 900px) {
        width: 0%;
        display: none;
    }
    display: flex;
    height: 50%;
    align-items: center;
    justify-content: center;
    padding-right: 1em;
`

const Input = styled.input`
    background: #121212;
    width: 100%;
    padding: 0.5em;
    color: #fff;
    border: none;
    &:focus {
        outline: none;
        box-shadow: none;
    }
    font-size: 16px;
    cursor: default;
`
const SearchWrapper = styled.div`
    width: 100%;    
    background: #121212;
    display: flex;

`

const MagWrapper = styled.div`
    background: #323232;
    padding: 0.5em 0.3em;
    width: 15%;
    display: flex;
    justify-content: center;
    fill: #818181;
    &:hover {
        fill: #fff;
    }
    
    transition: fill 0.3s;
    cursor: pointer;
`




const Center = () => {

    const [query, setQuery] = useState("");

    return (
            <Container>
                <SearchWrapper>
                    <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" onKeyPress={(key) => {
                        if(key.key === 'Enter') {
                            if(query && query.length > 0) {                                
                            }
                        }   
                    }}/>
                    <MagWrapper>
                        <MagnifyingGlass />
                    </MagWrapper>
                </SearchWrapper>
                <Mic />
            </Container>
    )
}

export default Center;