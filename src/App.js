import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import Login from './components/Pages/Login/Login';
import UserProfile from './components/Pages/UserProfile/UserProfile';
import Slams from './components/Pages/Slams/Slams';
import Slam from './components/Pages/Slam/Slam';
import Home from './components/Pages/Home/Home';
import ProtectedRoute from './components/Pages/ProtectedRoute/ProtectedRoute';

// components
import Navigation from './components/Molecules/Navigation/Navigation';
import { Container } from 'semantic-ui-react';
import AddEditSlam from './components/Pages/AddEditSlam/AddEditSlam';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: true,
			currentUser: {}
		};
	}

	handleSuccessfulLogin() {
		this.setState({
			isAuthenticated: true
		});
		console.log(this.state);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Container style={{ marginTop: '2em' }}>
						<Navigation
							isAuthenticated={this.state.isAuthenticated}
							currentUser={this.state.currentUser}
							handleLogout={() => {
								this.setState({
									isAuthenticated: false
								});
							}}
						/>
					</Container>

					<Container style={{ marginTop: '3em' }}>
						<Route path="/" exact component={Slams} />
						<Route path="/slams" component={Slams} />
						<Route path="/home" component={Home} />
						<ProtectedRoute
							path="/user-profile"
							component={UserProfile}
							isAuthenticated={this.state.isAuthenticated}
						/>
						<ProtectedRoute
							path="/add-edit-slam"
							component={AddEditSlam}
							isAuthenticated={this.state.isAuthenticated}
						/>
						<Route path="/slam/:id" component={Slam} />
						<Route
							path="/login"
							render={props => (
								<Login
									{...props}
									successfulLogin={this.handleSuccessfulLogin.bind(
										this
									)}
								/>
							)}
						/>
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
