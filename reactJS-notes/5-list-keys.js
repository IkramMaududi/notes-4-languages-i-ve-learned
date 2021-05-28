// The basics of transforming an array to a list in react
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map( number => <li>{number}</li> );

ReactDOM.render( <ul>{listItems}</ul>, document.getElementById('root') );


// Another way to get the above done
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map( number => <li>{number}</li> );
  return ( <ul>{listItems}</ul> );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render( <NumberList numbers={numbers} />, document.getElementById('root') );



// Using a key so that the warning won't show up
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map( number =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return ( <ul>{listItems}</ul> );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render( <NumberList numbers={numbers} />, document.getElementById('root') );


----------------------------------------------------------------------------------
// Keys should be given to the elements inside the array to give the elements a stable identity
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

/*
** The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. 
** Most often you would use IDs from your data as keys 
*/
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

// When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);