<template>
  <form
    ref="search-form"
    @submit.prevent="handleSubmit">
    <div class="search-input-bar">
      <input
        ref="search-input"
        class="search-input"
        placeholder="영화를 검색해주세요" />
      <span class="material-icons keyboard">
        keyboard
      </span>
    </div>
    <button>
      <span class="material-icons">
        search
      </span>
    </button>
  </form>
</template>

<script>

export default{
	methods : {
		handleSubmit(){
			const inputElement = this.$refs['search-input']
			const newInput = inputElement.value
			if(!newInput.trim()){
				inputElement.value = ''
				return
			}
			this.$router.push({
				name : 'movies',
				params : {
					keyword : newInput
				}
			})
			inputElement.value = ''
		}
	}
}
</script>

<style lang= "scss" scoped>
form {
  margin : 0 20px;
  display : flex;
  justify-items: center;
  .search-input-bar {
    flex-grow: 1;
    position: relative;
  }
  .search-input {
    width : 100%;
    padding : 4px;
    font-size : 2rem;
  }
  button {
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .keyboard {
      position: absolute;
      right : 4px;
      top : 10px;
    }
  }

</style>
