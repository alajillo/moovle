<template>
  <Loading />
  <Detail />
  <div class="app_inner">
    <h1 class="logo-title">
      <span
        v-for=" letter in logoName"
        :key="letter">{{ letter }}</span>
    </h1>
    <Search />
    <Router-view />
  </div>
</template>
<script>
import Search from '~/components/Search'
import Loading from '~/components/Loading'
import Detail from '~/components/Detail'

export default {
	components : {
		Search,
		Loading,
		Detail
	},
	data(){
		return{
			logoName : ['M','O','O','V','L','E']
		}
	}
}
</script>

<style lang = "scss" scoped >
.app_inner {
  margin : 0 auto;
  max-width: 800px;
  font-family: 'Roboto', sans-serif;
  font-size : 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.logo-title {
  margin : 70px auto;
  font-size : 60px;
  @for $i from 1 through 6 {
  span:nth-child(#{$i}) {
    color : list.nth($logo-color-list, $i);
    }
  }
}
</style>
