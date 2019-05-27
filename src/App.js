import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component{
    //TODO : read the state from Mongodb for the id and get it as state object
    state = {
        persons:[
            {id: "sl044390", name:'sunil', age: 28, alive: true},
            {id: "hs000001", name:'hodor', age: 45, alive: false},
            {id: "js999999", name:'jon snow', age: 34, alive:true}
        ],
        showPersons: false
    }

    switchNameHandler = () => {
        this.setState(
            {
                persons:[
                {id: "sl044390", name:'Sunil L', age: 28, alive: true},
                {id: "hs000001", name:'Hodor Hodor', age: 60, alive: true},
                {id: "js999999", name:'Aegon Targearyn', age: 80, alive:true}
                ]
            }
        )
    }

    nameChangeHandler = (event) => {
        console.log(event.target.value);
    }

    togglePersonHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({
           showPersons : !doesShow
       })
    }

    clickHandler = (personIndex) => {
        let persona = this.state.persons.slice();
        console.log(personIndex);
        persona.splice(personIndex,1);
        console.log(persona);
        this.setState({persons: persona})
    }

    render(){
        return(
            <div className="App">
                <h1>Person Data Handling Using React</h1>
                <button onClick = {this.switchNameHandler}>Update Names </button>
                <button onClick = {this.togglePersonHandler}>Toggle Names</button>
                { this.state.showPersons === true ? 
                <div>
                    {/*filter only the alive characters and map them into the Person component*/}
                    {this.state.persons.filter(person => person.alive).map((person,index) => 
                                                                                    <Person key = {person.id} 
                                                                                    name = {person.name} age = {person.age} changed = {this.nameChangeHandler}
                                                                                    click = {() => this.clickHandler(index)}/>
                                                                            )} 
                </div> : null
                } 
            </div>
        )
    }
}

export default App;
