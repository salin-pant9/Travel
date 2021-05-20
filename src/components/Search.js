import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Image from './Image';
function Search() {
    return (
        <SearchContainer>
            <Header>
                <Headerleft>
                    <img src="/images/Ellipse 2.png" alt="" />
                    <h5>Arm Travel</h5>
                </Headerleft>
                <HeaderMiddle>
                    < SearchIcon />

                    <input type = "search" placeholder="Thailand" />
                    <button type="submit" hidden>Search</button>
                </HeaderMiddle>
            </Header>
            <Body>
                
                   
                <BgImg>
                    <img src="images/image 1.png" alt="" />
                </BgImg>
                    
                    
                <Wrap>
                    <Image onclick source="images/Frame 5.png"/>
                    <Image source="images/Frame 6.png"/>
                    <Image source="images/Frame 7.png"/>
                    <Image source="images/Frame 8.png"/>
                    <Image source="images/Frame 8.png"/>
                    <Image source="images/Frame 10.png"/>
                    <Image source="images/Frame 11.png"/>
                    <Image source="images/Frame 12.png"/>
                    <Image source="images/Frame 13.png"/>

                </Wrap>
                    
                
            </Body>
        </SearchContainer>
    )
}

export default Search;

const SearchContainer = styled.div`
    background-color:white;
    width:100vw;
    height:100vh;
    /* position:relative; */
    overflow-x:hidden;
   
   
   
`;
const Header = styled.div`
   position: sticky;
    z-index:100;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 0px;
    margin-top:-20px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;

    
`;

const Headerleft = styled.div`
    display:flex;
    align-items:center;
    margin:20px;
    flex:0.3;
   
    > img {
        margin-right:10px;
        height:31px;
        width:52px;
        
    }
    > h5 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 36px;
        color: #0F4C5C;
        
       

    }
    
`;

const HeaderMiddle = styled.div`
   display:flex;
   align-items:center;
   flex:0.7;
   border:1px solid #0F4C5C;
   border-radius:4px;
   outline:none;
   max-width: 563px;
    position:relative;
    min-width:2vw;
    justify-content:center;
    box-sizing:border-box;
    margin-left:5vw;
    
    margin-right:auto;
        > input {
        flex: 1;
        border-style:none;
        outline:none;
        padding:10px;
        font-size:15px;
      
        
        
    }
    >.MuiSvgIcon-root {
        font-size:18px;
        color: #687885;
        margin-left:10px;
        
    }
   
    
`;

    
const Body = styled.div`
    display:flex;
   
    /* flex-wrap:nowrap; */
    align-items:center;
    
    width:100vw;
    height:100vh;
`;



const BgImg = styled.div`
    
  display:flex;
  flex:0.5;
  flex-wrap:nowrap;
  width:100%;
  max-width:80vw;
  height:100vh;
  > img {
      object-fit:cover;
      width:600px !important;
      height:auto!important;
     
  }

    
    


`;


const Wrap = styled.div`
     display:grid;
     width:100vw;
     height:100vh;
     grid-template-columns:repeat(3,minmax(0,1fr)) ;
     grid-gap:20px;
     margin-top:20px;
`;