import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

// import { robots } from './robots';
// Import do robots é diferente pq ele não é exportado como default, 
// então usamos os brackets {}
import './App.css';

class App extends Component {
    // O construtor habilita receber coisas que modifiquem a aplicação 
    // (SearchBox e a lista dos robos).
    // Esses dados ficam no parent component (construtor), podendo ser 
    // passados para todas as outras classes ou children.
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // Funções próprias devem ser criadas como arrowFunction
    onSearchChange = (event) => {
        // Sempre que for necessário mudar um state, usamos o "this.setState"
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })

        if (!robots.length) {
            return <h1 className='tc f1'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;