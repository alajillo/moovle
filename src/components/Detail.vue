<template>
  <div
    v-if="isShow"
    class="container"
    @click.self="closeDetail">
    <div class="content">
      <img
        :src="highResolutionImage"
        onerror="this.onerror=null;this.src='https://media.vlpt.us/images/alajillo/post/1e14c162-7ef7-466b-abcb-142b1089cf96/null.png';"
        :alt="movieDetail.Title || '정보없음'" />
      <div class="meta-info">
        <h1>
          제목 : {{ movieDetail.Title }}
        </h1>
        <div ref="rating">
          평점  : {{ movieDetail.Ratings.length > 0 ? movieDetail.Ratings[0].Value : "N/A" }}
        </div>
        <p> 
          개봉일 : {{ movieDetail.Released || "정보없음" }}
        </p>
        <p> 
          제작자 : {{ movieDetail.Writer || "정보없음" }}
        </p>
        <p> 
          상영시간 : {{ movieDetail.Runtime || "정보없음" }}
        </p>
        <p class="plot">
          줄거리 : {{ movieDetail.Plot || "정보없음" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	computed : {
		isShow(){
			return this.$store.state.isShowDetail
		},
		movieDetail(){
			return this.$store.state.movieDetail
		},
		highResolutionImage(){
			return this.movieDetail.Poster.replace(/(?:SX300)+/,'SX700')
		}
	},
	methods : {
		closeDetail(){
			this.$store.dispatch('closeDetail')
		}
	}
}
</script>

<style lang="scss" scoped>
div.container {
	color : white;
  position: fixed;
	background: rgba(black,0.5);
  z-index: 1;
	left : 0;
  width: 100%;
  height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.content{
		display: flex;
		justify-content: flex-start;
		background: rgb(52, 58, 53);
		width : 70%;
		height: 50%;
		img{
			width : 50%;
			height: 100%;
			margin-right: 16px;
		}
		.meta-info{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			*{
				margin : 12px 0;
			}
			.plot{
				flex-grow: 1;
				text-overflow: ellipsis;
				overflow-y: hidden;
			}
		}
	}
}
</style>