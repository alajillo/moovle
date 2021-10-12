<template>
  <ul v-if="isResponseSuccess">
    <MovieCard />
  </ul>
  <p v-else>
    {{ errorMessage }}
  </p>
</template>

<script>
import MovieCard from '~/components/MovieCard'
export default{
	components : {
		MovieCard
	},
	computed : {
		errorMessage(){
			return this.$store.state.errorMessage
		},
		isResponseSuccess(){
			return this.$store.state.isResponseSuccess
		}
	}
}
</script>

<style lang="scss" scoped>
	ul, p{
		margin :  20px;
		font-size: 2rem;
	}
	ul {
		display: grid;
		grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
		grid-auto-rows: repeat(auto,200px);
		gap : 8px;

	}
</style>
