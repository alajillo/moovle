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
    @click="getMoreMovies">
    get more movies
  </button>
</template>

<script>
import getMovies from '~/utils/api_list'
import Detail from './Detail'
import {setInfiniteScroll,removeInfiniteScroll} from '../utils/infiniteScorll'
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
		}
	},
	mounted(){
		// window.addEventListener('scroll',infiniteScroll.bind(null,this.getMoreMovies))    
		setInfiniteScroll({
			target : this.$refs.card,
			threshold : 0.5
		})
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
		border-radius: 4px;
		background: white;
		font-size : 2rem;
		transition: 0.3s ease-in-out;
   &:hover{
     transform: scale(1.2);
   }
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