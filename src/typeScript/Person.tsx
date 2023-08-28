/*
There is no typeScript on this file, there is propType "addons"
*/

import PropTypes from 'prop-types';
import './person.css';

const PrintPerson = (props)=>{	return (
		<>
		<h4>Name: {props.name} </h4>
		<h4> Age: {props.age} </h4>

		<h4> Email: {props.email} </h4>

		<h3> Friends </h3>
		<ul className="typescript" >
{			props.friends.map(
				(item, cle)=>{
					return (<li key={cle}> {item} </li>)
				}
			)}
		</ul>
		</>
		)
}

const TsPrintPerson = (props)=>{
	var name: String = "Oui";
	console.log(typeof(name));

	return (
	<>
		<h3> Name: {name} </h3>
		<h3> Age: {props.age} </h3>
	</>
	);
}

const Person = ()=>{



	return (
	<>
		<h1>Type Script</h1>
		<PrintPerson name={"joel"} age={19} email="joel@gmail.com" friends={["joel", "Sarah", "Viken"]} />
		<TsPrintPerson name={"Bobo"} age={67} />
	</>
		);
}

PrintPerson.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	age: PropTypes.number,
	friends: PropTypes.arrayOf(PropTypes.string),
};

export default Person;
