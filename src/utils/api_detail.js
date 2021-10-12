import Store from '~/store'
async function getDetail(id){
	const {isLoading} = Store.state
	if(isLoading) return
	Store.dispatch('startLoading')
	const movieList = await fetch('/.netlify/functions/requestDetail',{
		method : 'POST',
		body : JSON.stringify({id})
	}).then(res=>res.json())
	Store.dispatch('finishLoading')
	return movieList
}

export default getDetail