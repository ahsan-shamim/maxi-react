import React, { Component } from 'react';
import styled from "styled-components";
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons:[
      {id:"p1",name:"Jhon Doe",age:26},
      {id:"p2",name:"Zill lew",age:27},
      {id:"p3",name:"Kabir",age:33},
      {id:"p4",name:"Suny",age:29},
      {id:"p5",name:"Brad",age:28}
    ],
    showPersons: false
  }

  // handler functions

  nameChangedHandler = (e,id) => {
    let {persons} = this.state;
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    })
    
    let person = {...persons[personIndex]};
    person.name = e.target.value;

    const personsClone = [...this.state.persons]
    personsClone[personIndex] = person;

    this.setState({persons:personsClone});
  }

  deletePersonHandler = (personIndex) => {
    const [...persons] = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    // styled components
    const Wrapper = styled.div`
      text-align: center;
    `;
    const Button = styled.button`
      background-color: blue;
      color: white;
      padding: 16px;
      cursor: pointer;
      border: 1px solid gray;

      &:hover {
        background: #33eeaa;
      }
      
    `;


    const Header = styled.div`
      text-align: center;
      padding: 10px 0;
      margin: 5px 0;
      background: #2e3e43;
      color: #fefefe;
    `;
    // end of styled components

    const {persons,showPersons} = this.state;


    let person = undefined;
    if(showPersons) {
      person=(
        <div>
          <Persons
            persons = {persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <Wrapper>
        <Header>
          <h1>React js app</h1>
        </Header>
        <Button
          onClick={this.togglePersonsHandler}>
        Toggle Persons
        </Button>
        {person}
      </Wrapper>
    );
  }
}

export default App;
