import './App.scss';
import './components/todos'
 import { Todos } from './components/todos';
 import { Goals } from './components/goals';
import  Menu  from './components/Menu/menu'
import FormTaskAndGoal from './components/Form/form';
import Item from './components/Item/item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { changeOption } from './reducers/optionSlice';

function App() {
  const todos = useSelector((state) => state.todos.value);
  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.value);


  return (
    <div className="App">
      <Menu/>
      {/*<Todos/> 
      <Goals/>*/} 

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
          <div className='scrolling'>
            {option==='tasks' &&
                todos.map((todo, index)=>(
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate}/>
   
                 ))
            }      
           {option==='goals' &&
                goals.map((goal, index)=>(
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate}/>
   
                 ))
            }      
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
