import React, {Component} from 'react';
 
class Form extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			name: '',
			job: '',
		};
		this.state = this.initialState;
	};
	// event.target gets the element that is receiving onChange
	// name & value here refer to the value of the name & value attribute of the input tag
	handleChange = (event) => {
		const {name, value} = event.target; 
		this.setState({
			[name]: value,
		});
	};
	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.intitialState);
	}
	render() {
		const {name, job} = this.state;
		return (
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
				<label htmlFor="job">Job</label>
				<input type="text" name="job" id="job" value={job} onChange={this.handleChange}/>
				<input type="button" value="Submit" onClick={this.submitForm}/>
			</form>
		);
	};
};

export default Form;


// or in render it can be written like this too
<div>
    <h1>Add Post</h1>
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
        </div><br/>
        <div>
            <label>Body: </label><br/>
            <textarea name="body" onChange={this.handleChange} value={this.state.body}/>
        </div><br/>
        <button type="submit">Submit</button>
    </form>
</div>