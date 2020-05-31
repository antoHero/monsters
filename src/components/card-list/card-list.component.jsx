import React from 'react';
import { Card } from '../card/card.component';


import './card-list.styles.css';

/*props are parameters that we get from our functional component
*props children are what you pass in-between the brackets of a component that gets called
*/

export const CardList = props => (
	<div className='card-list'>
		{props.monsters.map(monster=> (
			<Card key={monster.id} monster={monster}/> 
		))}
	</div>
);
