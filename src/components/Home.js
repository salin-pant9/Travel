import React,{useState} from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
function Home() {
    const history = useHistory();
    const [input,setInput] = useState('');
    const handleSearch = () => {
        

        history.push('/search');
    }
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
                            <input type = "search" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for location"/>
                            <button type="Submit" focus hidden onClick={handleSearch} >Search</button>
                        </form>
                       
                    </SearchContainer> 
                    <p>Trending:France,Switzerland</p>
               </Middle>
                <Bgimg/>
                   
               
               

            </Content>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
   overflow: hidden;
   color:transparent;
   height:100vh;
   display:flex;
   width:100vw;
   flex-direction:column;
   text-align:center;
  background-color: rgba(0,0,0,0.5);
   
   

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
    opacity:0.85;
   

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
    > img {
        height:31px;
        width:52px;
    }
    
`;
const Middle = styled.div`
    >h1 {
        color:white;
        font-size:30px;
    }
    > p {
        color:white;
        position:absolute;
        
        padding:5px;
        
    }

`;

const SearchContainer = styled.div`
    display:flex;
    padding:10px;
    justify-content:center;
    align-items:center;
    border:1px solid white;
    background-color:white;
    margin-top:15px;
    margin-bottom:5px;

    > .MuiSvgIcon-root{
        color:grey;
        font-size:20px;
        margin-right:5px;
    } 
    >form {
        display:flex;
        flex:1;
       > input {
           flex:1;
           border-style:none;
           outline:none;
           font-weight:15px;
       }
    
        
    }
`;
