<template>
  <img
    v-show="isLoading"
    src="https://media2.giphy.com/media/VFDeGtRSHswfe/giphy.gif?cid=ecf05e470u2259swpufzri8dqtsg25ouxyllygovkgt08g88&rid=giphy.gif&ct=g"
    alt="walking-dogs-loading" />
</template>

<script>
export default{
	computed : {
		isLoading(){
			return this.$store.state.isLoading
		}
	}
}
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

</style>