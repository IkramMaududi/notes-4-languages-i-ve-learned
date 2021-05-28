/**
 * useState is a hook
 * 1.it returns a pair - the current state value and a function that lets you update it
 * 2. Only call hook at the top level; don't call inside loops, conditions, nested function
 * 3. Only call hook from React function component  
 *       const sth = () => {}; 
 *       function sth() {};
*/


// example of hooks that renders a counter. When you click the button, it increments the value
import React, { useState } from 'react'; 
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

// the equiv class example
import React, { useState } from 'react';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  };
};

// using multiple state varibles
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
}



/*-----------------------------------------------------------------------------------------------------------------------------*/

// useEffect : similar to componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

// Effects without cleanup :  Network requests, manual DOM mutations, logging, etc 
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

// comparison of effects without clean-up using class component
import React, { useState, useEffect } from 'react';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }; 
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  };
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  };
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  };
};




// Effects with cleanup : counting time after sth has clicked, set up a subscription, show and hide sth, etc
import React, { useState, useEffect } from 'react';
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    };
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return 'Loading...';
  };
  return isOnline ? 'Online' : 'Offline';
};


// the comparison with class component
import React, { useState, useEffect } from 'react';
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  };
  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  };
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  };
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  };
  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    };
    return this.state.isOnline ? 'Online' : 'Offline';
  };
};



/** useEffect with optional second argument []
* it compares the current value of dependency and the value on previous render
* If they are not the same, effect is invoked.
* the dependency can be props or state
*/
useEffect(() => getToDo() , []);
