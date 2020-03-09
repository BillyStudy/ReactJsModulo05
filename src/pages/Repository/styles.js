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
        margin-top: 10px;
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

export const IssueList = styled.ul`
    list-style: none;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 0.3px solid #ddd;
    img{
        width: 40px;
        height: 40px;
        border: 0.3px solid #ccc;
        border-radius: 50%;
        
    }

    div{
        flex: 1;
        margin-left: 20px;

        strong{
            margin-top: 5px;
            font-size: 14px;
            color: #444;
            line-height: 1.4;
            text-align: center;
            max-width: 150px;

            a{
                text-decoration: none;
                color: #333;

                &:hover{
                    color: #3152bd;
                }
            }

            span{
                background-color: #eee;
                color: #333;
                padding: 2px 6px;
                border-radius: 5px;
                font-size: 12px;
                font-weight: 600;
                margin: 0px 3px;

                &:hover{
                    background-color: #ddd;
                }
            }
        }

        p{
            margin-top: 5px;
            font-size:12px;
            color: #aaa;
        }
    }

    

    li{
         padding: 15px 10px;
         display: flex;
         flex-direction: row;
         align-items: center;
         border: 0.4px solid #aaa;
         border-radius: 4px;

         & + li {
             margin-top: 10px;
         }
     }

     

     a{
         color: #3152bd;
         text-decoration: none;
     }
`;


