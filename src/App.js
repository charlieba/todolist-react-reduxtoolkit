import './App.css';
import './components/todos'
import { Todos } from './components/todos';
import { Goals } from './components/goals';
import  Menu  from './components/Menu/menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTaskAndGoal from './components/Form/form';
import Item from './components/Item/item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Menu/>
      
      
      { /*<Todos/> }
      { <Goals/> */}

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block'><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
        <div style={{ maxHeight: "1200px", 
        overflowY: "auto" }}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
