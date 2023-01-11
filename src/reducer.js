function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

// state = changeState(state, action);
// console.log(state)
// state = changeState(state, action);
// console.log(state)
// state = changeState(state, action);
// console.log(state)

function render() {
  document.body.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  render();
  return state;
}

console.log(dispatch({ type: "counter/increment"}));

console.log(dispatch({ type: "counter/increment"}));

console.log(dispatch({ type: "counter/increment"}));

console.log(dispatch({ type: "counter/increment"}));