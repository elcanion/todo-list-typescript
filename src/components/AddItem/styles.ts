import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .plus {
        margin: 0 10px;
        font-weight: bold;
    }

    input {
        border: none;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 1em;
        flex: 1;
    }
`;