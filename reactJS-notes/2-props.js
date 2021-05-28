// passing Props from functional component to class component
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};
class Calendar extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={date()}/>
      </div>
    );
  };
};

// passing Props from class component to class component
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div>
            <p>
            Your temporary password is: <strong>{this.props.tempPassword}</strong>
            </p>
        </div>
    );
  };
};
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>
          We've generated a new temporary password for you.
          </h3>
          <h3>
          Please reset this password from your account settings ASAP.
          </h3>
          <ReturnTempPassword tempPassword={'asfesgragsfg'} />
        </div>
    );
  };
};


// passing from class to class
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    };
  };
  render() {
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  };
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  };
};



// passing real input data between 2 class and a parent class
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
       </div>
    );
  }
};
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



---------------------------------------------------------------------------------------------------

// Pass an array as props
const List = (props) => {
  return (
     <p>{props.tasks.join(", ")}</p>
    );
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["running", "sleeping"]} />
        <h2>Tomorrow</h2>
        <List tasks={["playing guitar", "training", "cooking"]} />
      </div>
    );
  };
};


/* //Expected Result
To Do Lists
Today
running, sleeping

Tomorrow
playing guitar, training, cooking*/

---------------------------------------------------------------------------------------------------

// Setting defaultProps and PropTypes to define the props you expect (prop-types is now npm library)
import PropTypes from 'prop-types';

const Items = (props) => {
  return (
    <h1>
      Current Quantity of Items in Cart: {props.quantity}
    </h1>
  ); 
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <Items />
  };
};





/*
** A stateless functional component is any function you write which accepts props and returns JSX. 
** A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). 
** A stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.
*/
