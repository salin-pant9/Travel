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
   
`;
const Header = styled.div`
   position: absolute;
    width: 1619px;
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
    justify-content:center;
    background-color:white;
    border-radius:4px;
    border:1px solid #D2DDE4;
    width:563px;
    height:56px;
    box-sizing: border-box;
    margin-left:50px;
    >input {
        flex: 1;
        padding:10px;
        border-style:none;
        outline:none;
    }
    
`;
