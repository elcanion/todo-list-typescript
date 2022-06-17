import styled from "styled-components";

type ContainerProps = {
    isDone: boolean;
}

export const Container = styled.div(({ isDone }: ContainerProps)=> (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${isDone ? 'line-through': 'initial'}
    }
`
));