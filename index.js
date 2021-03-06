/*

Characteristics of a Pure Function
1) They always return the same result is the same arguments are passed in
2) They depend only on the arguments passed into them
3) Never produce any side effects

*/




{
	type: 'ADD_TODO',
	todo: {
		id: 0,
		name: 'Learn Redux',
		complete: false,
	}
}



{
	type: 'REMOVE_TODO',
	id: 0,
}

{
	type: 'TOGGLE_TODO',
	id: 0,
}

{
	type: 'ADD_GOAL',
	goal: {
		id: 0,
		name: 'Run a Marathon',
	}
}

{
	type: 'REMOVE_GOAL',
	id: 0,
}


// Reducer function 
function todos (state = [], action){
	if(action.type === 'ADD_TODO'){
		return state.concat([action.todo])
	}

	return state
}



function createStore(reducer){
	// the store shoule have four parts
	// 1 the state
	// 2 get the state
	// 3 linst to changes on the state
	// 4 update the state

	let state 
	let listeners = []

	const getState = () => state

	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}

	const dispatch = (action) => {
		// call todo
		state = reducer(state, action)
		// loop over all listeners and invoke them
		listeners.forEach((listener) => listener())
	}

	return {
		getState,
		subscribe,
		dispatch,
	}
}


const store = createStore(todos)
store.dispatch({
	type: 'ADD_TODO',
	todo: {
		id: 0,
		name: 'Learn Redux',
		complete: false,
	}
})