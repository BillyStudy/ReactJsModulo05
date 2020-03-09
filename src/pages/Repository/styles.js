import styled, { keyframes, css } from 'styled-components';

export const Loading = styled.div`
    color: #eee;
    font-size: 30px;
    font-weight: bold;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 120px;
        border-radius: 50%;
        margin-top: 25px;
    }

    h1{
        font-size: 24px;
        margin-top: 10px;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #444;
        line-height: 1.4;
        text-align: center;
        max-width: 350px;
    }
`;


