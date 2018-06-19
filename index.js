// stopped at https://learn.tylermcginnis.com/courses/294390/lectures/4526633


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

function createStore(){
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
			listeners = listeners.filter((l) => !== listener)
		}
	}

	return {
		getState,
		subscribe,
	}
}
