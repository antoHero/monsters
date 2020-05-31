import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	} 
	//when this component mounts(renders onto the DOM for the first time), call this method 
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ monsters: users }))
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value })
	}
/*state is passed in to the component as a prop
*state lives in one location and is passed down as props
*/
  render() {

  	const { monsters, searchField } = this.state;
  	const filteredMonsters = monsters.filter(monster => 
  		monster.name.toLowerCase().includes(searchField.toLowerCase())
  	);

  	return (
  		<div className='App'>
  		<h1>Monsters</h1>
	  		<SearchBox 
	  			placeholder="Search monsters..."
	  			handleChange={ this.handleChange }
	  		/>
	  		<CardList monsters={filteredMonsters} />
  		</div>
  	);
  }
}

export default App;
