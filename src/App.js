import React, {Component} from 'react';
import * as questions from './questionsJson.json';
import * as _ from 'lodash';

class  App extends Component {
	constructor(props) {
		super(props);
		this.state = {matches: []};
		this.updateTerm = this.updateTerm.bind(this);
		this.search = this.search.bind(this);
	}
	
	updateTerm(e) {
		var term = e.target.value;
		
		this.setState({term: term});
		
	}
	
	search() {
		var term = this.state.term;
		
		var matches = _.filter(questions.default, function(datum){
			return _.includes(datum.question, term) || _.includes(datum.shortQuestion, term)
		});
		
		this.setState({matches: matches});
	}
	
	render() {
		var searchResults = null;
		
		if (this.state.matches.length > 0) {
			searchResults = _.map(this.state.matches, function(datum){
				return <div><h3>{datum.question}</h3><p>{datum.answer}</p></div>
			});
		}
		
		return (
		<div className="App">
			<input type="text" onChange={this.updateTerm} />
			<button onClick={this.search}>検索</button>
				{searchResults}
		</div>
  );
	}
}

export default App;
