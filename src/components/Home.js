import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
function Home() {
    return (
        <HomeContainer>
            <Content>
               <Title>
                   <img src="/images/Ellipse 1.png" alt="" />
                    <p>
                        Arm Travel
                    </p>
               </Title>
               <Middle>
                    <h1>Where do you want to go today?</h1>
                   <SearchContainer>
                        <SearchIcon/>
                        <form>
                            <input type = "search" />
                        </form>
                    </SearchContainer> 
               </Middle>
                <Bgimg/>
                   
               
               

            </Content>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
   overflow: hidden;
   height:100vh;
   display:flex;
   flex-direction:column;
   text-align:center;


`;
const Content = styled.div`
    box-sizing:border-box;
    display:flex;
    max-width:100vw;
    justify-content:center;
    width:100%;
    align-items:center;
    flex-direction: column;
    height:100%;
    position:relative;
`;
const Bgimg = styled.div`
    height:100%;
    background-image: url('https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80');
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:-1;
    opacity:0.65;

`;
const  Title = styled.div`
    position:absolute;
    top:0;
    left:0;
    margin-left:10px;
    padding:10px;
    display:flex;
    align-items:center;
    > p {
        margin-left:20px;
        color:white;
        font-weight:bold;
    }
    
`;
const Middle = styled.div``;

const SearchContainer = styled.div``;
