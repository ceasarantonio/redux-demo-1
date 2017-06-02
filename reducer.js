// example state
let initialState = {
	login: null,
	userView: 'register-page',  // register, login, main, search
	searchString: null,
	tweets: []
}
const store = createStore(rootReducer);
store.dispatch( actionRegisterUser(1, 2, 3) )

// returns the next state
function rootReducer(state = initialState, action) {
	
	switch( action.type ) {
		case REGISTER_USER:
			let newstate = Object.assign({}, state);
			newstate.login = action.login;
			return newstate;
		case LOGIN:
			// TODO
	}
}
	
	
	/*
registrera sig
logga in, logga ut
tweet, (retweet)
söka
follow/unfollow
favourite
*/