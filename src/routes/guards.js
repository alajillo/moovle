import router from './index'
import getMovieList from '~/utils/api_list'
import Store from '~/store'

router.beforeEach(async to=>{
	Store.dispatch('setIsEnd',false)
	const {keyword} = to.params
	if(!keyword) return
	const movieList = await getMovieList(keyword,1)
	Store.dispatch('changeMovieList',movieList)
})

