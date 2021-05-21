import styled from "styled-components";
import './App.css';
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Search from "./components/Search";
import Detail from "./components/Detail";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path = '/search/1' exact>
            <Detail />
          </Route>
          <Route path = '/search'>
            <Search/>
          
          </Route>
          <Route path='/'exact>
            <Home />
          </Route>
        </Switch>
      </Router>
       
    </Container>
      
    
  );
}

export default App;

const Container = styled.div`
 
  
`;
