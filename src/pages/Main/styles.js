import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background-color: #fafafa;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 20px;
        display:flex;
        align-items: center;
        flex-direction: row;
        
        svg{
            margin-right: 10px
        }
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    } 
    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({ type: "submit", disabled: props.loading }))`
    background-color: #3152bd;
    border: 0;
    padding: 0 20px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading &&
        css`
        svg{
            animation: ${rotate} 1.5s linear infinite;
        }
    `
    }
    
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li{
         padding: 15px 0;
         display: flex;
         flex-direction: row;
         justify-content: space-between; 
        
        & + li {
            border-top: 0.1px solid #ddd;
        }
     }

     

     a{
         color: #3152bd;
         text-decoration: none;
     }
`;