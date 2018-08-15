import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

	return (
		<div>
			{ 
				robots.map((user, i) => {
					return (
						<Card 
						key={i} //Use of key to minimize components to be refresh when something happens (eg: card removed)
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}/>
					);
				}) 
			}
		</div>
	);
}

export default CardList;