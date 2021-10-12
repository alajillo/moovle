import Store from '~/store'
async function getMovies(text,page = 1){
	const {isEnd, isLoading, isShowDetail} = Store.state
	if(isEnd || isLoading || isShowDetail) return
	Store.dispatch('startLoading')
	const movieList = await fetch('/.netlify/functions/requestList',{
		method : 'POST',
		body : JSON.stringify({text,page})
	}).then(res=>res.json())
	Store.dispatch('finishLoading')
	return movieList
}

export default getMovies