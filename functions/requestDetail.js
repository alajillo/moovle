const axios  = require('axios')

exports.handler = async function(event){
	const option = JSON.parse(event.body)
	const { id } = option
	const {data} = await axios({
		url : `https://www.omdbapi.com?apikey=${process.env.API_KEY}&i=${id}&plot=short`,
		method : 'GET',
	})
	return {
		statusCode : 200,
		body :  JSON.stringify(data)
	}
}
