const axios  = require('axios')

exports.handler = async function(event){
	const option = JSON.parse(event.body)
	const {text, page} = option
	const {data} = await axios({
		url : `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=${text}&page=${page}`,
		method : 'GET',
	})
	return {
		statusCode : 200,
		body :  JSON.stringify(data)
	}
}