import PropTypes from 'prop-types';
import './person.css';

const PrintPerson = (props)=>{
	return (
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

const Person = ()=>{



	return (
	<>
		<h1>Type Script</h1>
		<PrintPerson name={"joel"} age={19} email="joel@gmail.com" friends={["joel", "Sarah", "Viken"]} />
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
