import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
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
        </SearchContainer>
    )
}

export default Search;

const SearchContainer = styled.div`
    background-color:white;
    width:100vw;
    height:100vh;
    position:relative;
    overflow-x:hidden;
    display:flex;
   
`;
const Header = styled.div`
   position: absolute;
    width: 100vw;
    height: 100px;
    left: 0px;
    top: 0px;
    margin-top:-20px;
    display:flex;
    align-items:center;
    
    
`;

const Headerleft = styled.div`
    display:flex;
    align-items:center;
    margin:20px;
    > img {
        margin-right:10px;
        height:31px;
        width:52px;
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

const HeaderMiddle = styled.div`
   display:flex;
   align-items:center;
   flex:0.3;
   border:1px solid #0F4C5C;
   border-radius:4px;
   outline:none;
   width:100vw;
    justify-content:flex-end;
    box-sizing:border-box;
    > input {
        flex: 1;
        border-style:none;
        outline:none;
        padding:10px;
        font-size:15px;
        
    }
    >.MuiSvgIcon-root {
        font-size:20px;
        color: #687885;
    }
`;
