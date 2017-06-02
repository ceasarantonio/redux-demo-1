/*
registrera sig
logga in, logga ut
tweet, (retweet)
söka
follow/unfollow
favourite
*/


// action constants
const REGISTER_USER = 'REGISTER_USER',
	  LOGIN = 'LOGIN',
	  LOGOUT = 'LOGOUT',
	  TWEET = 'TWEET',
	  SEARCH = 'SEARCH',
	  FOLLOW = 'FOLLOW',
	  UNFOLLOW = 'UNFOLLOW',
	  FAVOURITE = 'FAVOURITE',
	  REFRESH = 'REFRESH',
	  DATABASE_TWEETS_INCOMING: 'DATABASE_TWEETS_INCOMING';

// create actions using functions
function actionRegisterUser(login, password, email) {
	return {
		type: REGISTER_USER,
		login, //login: login,
		password,
		email
	}
}
function actionLogin(login, password) {
	return { type: LOGIN, login, password }
}
function actionLogout() {
	return { type: LOGOUT }
}
function actionTweet(text) {
	return { type: TWEET, text }
}
function actionSearch(searchString) {
	return { type: SEARCH, searchString }
}
function actionFollow(recipientLogin) {
	return { type: FOLLOW, recipientLogin }
}
function actionUnfollow(recipientLogin) {
	return { type: UNFOLLOW, recipientLogin }
}
function actionFavourite(tweetId) {
	return { type: FAVOURITE, tweetId}
}






