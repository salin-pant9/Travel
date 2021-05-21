import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <Header>
                <img src="/images/Ellipse 2.png" alt="" />
                <h5>ARM Travel</h5>
            </Header>
            <Body>
               <BodyHeader>
                  <Title>
                    <h3>The Nantucket Hotel</h3>
                   
                    <p>https://nantuckethotel.com</p>
                  </Title>
                  <Button>
                        <p>Claim the profile</p>
                  </Button>
               </BodyHeader>

            </Body>
        </Container>
    )
}

export default Detail;

const Container = styled.div` 
    height:100%;
    width:100%;
    position:relative;
   
`;
const Header = styled.div`
   display:flex;
   align-items:center;
   padding:20px;
    height:60px;
    > img {
        margin-right:10px;
    }
    > h5 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 36px;


        color: #0F4C5C;

    }
`;
const Body = styled.div`
    display:grid;
    place-items:center;
    left:4vw;
    position:absolute;
    height:100vh;
    background: grey;
    width: 90vw;
    
   
`;
const BodyHeader = styled.div`
    display:flex;
    justify-content:space-between;
    position:absolute;
    top:0;
    left:auto;
    right:auto;
    margin-top:10px;
    padding:10px;
    
    
`;
const Title = styled.div`
    flex-direction:column;
    
   > h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
   }
   > p{
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin-left:5px;

    color: #687885;
   }
`;
const Button = styled.div`
    display:flex;
    align-items:center;
    border:1px solid lightgrey;
    border-radius:8px; 
    background-color:#E08E45;
    
    > button {
        
       
    }
`;