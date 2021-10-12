import { createStore } from 'vuex'
import getDetail from '~/utils/api_detail'
const Store  = createStore({ 
	state(){
		return{
			movieList : [],
			userName : 'alajillo',
			errorMessage : '',
			isResponseSuccess : '',
			isLoading : false,
			isEnd : false,
			isShowDetail : false,
			movieDetail : '',
			pageCount : 1,
		}
	},
	mutations : {
		setMovieList(state,newList){
			state.movieList = newList
			state.isResponseSuccess = true
		},
		setErrorMessage(state,e){
			state.errorMessage = e
			state.isResponseSuccess = false
		},
		setLoading(state,newValue){
			state.isLoading = newValue
		},
		setIsEnd(state,newValue){
			state.isEnd = newValue
		},
		setShowDetail(state,newValue){
			state.isShowDetail = newValue
		},
		setDetailMovie(state,newValue){
			state.movieDetail = newValue
		},
		setPageCount(state,newValue){
			state.pageCount = newValue
		}
	},
	actions : {
		changeMovieList({commit},newList){
			commit('setPageCount',1)
			if(newList.Response === 'True'){
				commit('setMovieList',newList.Search)
			}else{
				commit('setErrorMessage',newList.Error)
			}
		},
		loadMoreMovieList({state,commit},newList){
			const {pageCount, movieList} = state
			commit('setPageCount',pageCount+1)
			const isEndRendered = movieList[movieList.length-1].Title === '끝!!'
			if(isEndRendered){
				commit('setIsEnd',true)
				return
			}
			if(newList.Response === 'False'){
				newList = {
					Search : [{
						Title : '끝!!',
						Poster : 'https://media.vlpt.us/images/alajillo/post/6a4c28a0-db55-47ad-af9d-969531dc52ce/end-image.png'
					}]
				}
			}
			const refreshList = [...movieList, ...newList.Search]
			commit('setMovieList',refreshList)
		},
		startLoading({commit}){
			commit('setLoading',true)
		},
		finishLoading({commit}){
			commit('setLoading',false)
		},
		setIsEnd({commit},newValue){
			commit('setIsEnd',newValue)
		},
		async selectMovie({commit},newId){
			const newDetail = await getDetail(newId)
			commit('setDetailMovie',newDetail)
			commit('setShowDetail',true)
		},
		closeDetail({commit}){
			commit('setShowDetail',false)
		},
	}
})

export default Store