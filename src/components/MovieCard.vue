<template>
  <li
    v-for="item in list"
    :key="item.imdbID">
    <img 
      :id="item.imdbID"
      ref="card"
      onerror="this.onerror=null;this.src='https://media.vlpt.us/images/alajillo/post/1e14c162-7ef7-466b-abcb-142b1089cf96/null.png';"
      :src="item.Poster"
      :alt="item.Title"
      @click="showDetail" />
  </li>
  <button 
    v-show="!isLoading"
    ref="loadMore"
    @click="getMoreMovies">
  </button>
</template>

<script>
import getMovies from '~/utils/api_list'
import Detail from './Detail'
import infiniteScroll from './infiniteScroll'

export default {
	components : [
		Detail
	],
	computed : {
		list(){
			return this.$store.state.movieList
		},
		pageCount(){
			return this.$store.state.pageCount
		},
		isLoading(){
			return this.$store.state.isLoading
		}
	},
	mounted(){
		infiniteScroll(this.getMoreMovies,this.$refs.loadMore)   
	},
	methods : {
		async getMoreMovies(){
			const {keyword} = this.$route.params
			const moreList = await getMovies(keyword,this.pageCount)
			this.$store.dispatch('loadMoreMovieList',moreList)
		},
		showDetail(e){
			const {id} = e.target
			this.$store.dispatch('selectMovie',id)
		}
	}
}
</script>

<style lang="scss" scoped>
	button {
		background: none;
		border : none;
	}
 li {
  width : 150px;
  height: 200px;
  margin : 10px;
	position: relative;
 }
 img {
   width : 100%;
   height: 100%;
   font-size: 1rem;
   transition: 0.3s ease-in-out;
   &:hover{
     transform: scale(1.2);
   }
 }
</style>