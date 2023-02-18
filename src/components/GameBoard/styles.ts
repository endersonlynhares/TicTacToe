import styled from "styled-components";

export const BoardContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 15px;
    flex-direction: column;

    div{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    div + div{
        margin-top:20px;
    }
    
`

