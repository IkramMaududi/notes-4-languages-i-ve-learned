// inline styling in react
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color:"red", fontSize:"72px"}}>Big Red</div>
    );
  }
};

// another way to do inline styling
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}
class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  };
};

----------------------------------------------------------------------------
// toggle display (show and don't show a certain thing when button clicked)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  };
  toggleDisplay() {
    this.setState( state => ({ display: !state.display }) );
  };
  render() {
    if (this.state.display) {
        return (
          <div>
            <button onClick={this.toggleDisplay}>
                Toggle Display
            </button>
            <h1>
                Displayed!
            </h1>
          </div>
        );
    } else {
        return (
          <div>
            <button onClick={this.toggleDisplay}>
                Toggle Display
            </button>
          </div>
        );
    };
  };
};

// a shorter way to toggle display (alternating between show and hide) 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  };
  toggleDisplay() {
    this.setState( state => ({ display: !state.display }) );
  };
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         { this.state.display && <h1>Displayed!</h1> }
       </div>
    );
  };
};

--------------------------------------------------------------------
// using multiple else if as multiple ternary expression in jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  };
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  };
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        { this.state.userAge === '' ? buttonOne :
          this.state.userAge < 18 ? buttonThree : 
          buttonTwo
        }
      </div>
    );
  };
};
