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
               <Bodybody>
                    <BgImg>
                        <img src="/images/Rectangle 601.png" alt="" />
                    </BgImg>
               </Bodybody>
               <BodyInfo>
                   <Left>
                       <h3>Hotel Information</h3>
                       <p>Offering spa treatments, 21 Broad is located in Nantucket. Guests at the property can enjoy the shared outdoor courtyard and fire pit. A private bathroom with a vitamin C shower is included in each guest room. An iPad, iPod docking station and flat-screen cable TV are provided. Nantucket’s 21 Broad has a 24-hour front desk. Free WiFi access is available. The Whaling Museum is just 2 minutes’ walk from the property. Steamship Authority Nantucket Terminal is 4 minutes’ walk. This is our guests' favourite part of Nantucket, according to independent reviews. We speak your language </p>
                   </Left>
                   <Right>
                       <h3>Headquater</h3>
                       <p>Al Barsha, Dubai </p>
                   </Right>
               </BodyInfo>
               <Last>
                   <Top>
                        <h2>Destination we offer</h2>
                        <p>Claim this profile and add the destination that you offer.</p>
                        <Buttonbottom>
                            <span>Claim here</span>
                        </Buttonbottom>
                   </Top>
                   <Bottom>
                        <h2>Our Holiday Packages</h2>
                        <p>Claim this profile and add the destination that you offer.</p>
                        <Buttonbottom>
                        <span>Claim here</span>
                        </Buttonbottom>
                   </Bottom>
               </Last>

            </Body>
        </Container>
    )
}

export default Detail;

const Container = styled.div` 
    height:100%;
    width:100%;
    /* position:relative; */
   
`;
const Header = styled.div`
   display:flex;
   align-items:center;
   position:sticky;
   top:0px;
   padding:20px;
    height:60px;
    width:100%;
    background-color:white !important;
    z-index:100;
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
    display:flex;
    align-items:center;
    justify-content:center;
    
    left:4vw;
    top:50px;
    position:relative;
    height:100vh;
    
    max-width: 90vw;
    
   
`;
const BodyHeader = styled.div`
    top:0;
    position:absolute;
    display:flex;
    flex-direction:column;
    
    margin:10px; padding: 10px;
    align-items:center;
    @media(min-width:968px){
        flex-direction:row;
       
        
    }
    
    
`;
const Title = styled.div`
    
   
    > h3 {
        margin-bottom:10px;
        margin-left:-5px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 36px;
    }
    > p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        margin-left:30px;
        color: #687885;
        cursor:pointer;
        
    }
    @media(min-width:968px){
        position:absolute;
        left:-35em;
    }
   
`;
const Button = styled.div`
   margin-top:20px;
   border:1px solid lightgrey;
   padding:15px 60px;
   border-radius:8px;
   background-color:#E08E45;
   color:white;
   cursor:pointer;
   >p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
   
   }
   @media(min-width:968px){
       position:absolute;
       width:245px;
        left:20em;
       
        
   }
`;
const Bodybody = styled.div`
    margin-top:15px;
`;

const BgImg = styled.div`
    margin-top:12px;
    max-width:90vw;
    margin-top:-8rem;
    
   > img {
       object-fit:cover;
       width:100%;
       height:100%;
       @media(min-width:968px){
           margin-top:5rem;
           height: 388px;
       }
   }
`;
const BodyInfo = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    top:27em;
    bottom:0;
    @media(min-width:968px){
        flex-direction:row;
    }
`;
const Left = styled.div`
   position: absolute;
    width: 197px;
    height: 31px;
    left: -200px;
    top: 0px;
    > p{
        margin-top:20px;
        flex-wrap:nowrap;
       
        width: 80vw;
        height: 292px;  
        color: #495057;
    }
    @media(min-width:968px){
        margin-top:20rem;
        top:-10rem;
        left:-36rem;
        > p {
        flex-wrap:nowrap;
        
        max-width: 50vw;
        height: 292px;  
        color: #495057;
        flex:0.5;
        }
        
    }
`;
const Right = styled.div`
    position:absolute;
    top:50vh;
    left:-200px;
    > p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #495057;
    }
    @media(min-width:968px) {
        position:absolute;
        top:11rem;
        left:18rem;
    }
`;
const Last = styled.div`
    position:absolute;
    bottom:0;
    top:130vh;
    left:30px;
    display:flex;
    flex-direction:column;
    @media(min-width:968px){
        top:50rem;
    }
`;
const Top = styled.div`
    >p {
        position: absolute;
        width: 80vw;
        height: 22px;
        left: 0px;
        margin-bottom:100px;
    }
    span {
        padding:20px;
        width:100%;
    }
`;
const Bottom = styled.div`
    > p {
        margin-bottom:10px;
    }
`;

const Buttonbottom = styled.div`
    margin-top:25px;
    border:1px solid lightgray;
    border-radius:8px;
    background-color:#E08E45;
    width:10rem;
    padding:15px 20px;
    > span {
        text-align:center;
        color:white;
    }
    margin-bottom:1rem;
`;
