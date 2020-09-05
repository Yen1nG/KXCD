import React, {Component} from 'react';
import * as questions from './questionsJson.json';

class  App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.search = this.search.bind(this);
	}
	
	search(e) {
		var term = e.target.value;
	}
	
	render() {
		var searchResults = null;
		
		return (
		<div className="App">
			<input type="text" onChange={this.search} />
				{searchResults}
		</div>
  );
	}
}

export default App;
