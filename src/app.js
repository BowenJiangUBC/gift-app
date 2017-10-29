import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './components/Gender';
import Age from './components/Age';
import Relationship from './components/Relationship';
import {updateGradient} from './style/background'

export default class App extends React.Component{
	componentWillMount(){
		this.setState({
			gender: "",
			renderGender: true,
			age: "",
			renderAge: false,
			relationship: "",
			renderRel:false
		})
	};

	onGenderClick = (gender) => {
		event.preventDefault();
		this.setState(
			{
				gender: gender,
				renderGender:false,
				renderAge: true
			}
		)
	};



	onAgeClick = (age) => {
		event.preventDefault();
		this.setState(
			{
				age: age,
				renderAge:false,
				renderRel: true
			}
		)
	};



	onRelClick = (relationship) => {
		event.preventDefault();

		this.setState(
			{
				relationship: relationship,
				renderRel:false,
			}
		);
	};



	render(){

		setInterval(updateGradient,10);

		return(
			<div>
				{ this.state.renderGender ?
					<Gender
					onClick={this.onGenderClick}
					/>
					: null
				}


				{ this.state.renderAge ?
					<Age
						onClick={this.onAgeClick}
					/>
					: null
				}

				{ this.state.renderRel ?
					<Relationship
						onClick={this.onRelClick}
					/>
					: null
				}

        	</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));