import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MathJax from 'react-mathjax2'

class App extends React.Component {
	
constructor(props){
	super(props);
	this.state = {name : ''};
	this.txtReff = React.createRef();
    this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
	var latexSyntax=this.txtReff.current.value;
	this.setState({name: latexSyntax});
    event.preventDefault();
}

render(){
	
	return (			
			<div className="App">
				<h1>Latex Convertor</h1>
				
				<div><textarea rows="5" cols="80" ref={this.txtReff} onChange={this.handleClick} /></div>

				<div>				
					<MathJax.Context input='tex'>
						<div>
							<MathJax.Node>{this.state.name}</MathJax.Node>
						</div>
					</MathJax.Context>
				</div>
			</div>
	);
}

}

export default App;
