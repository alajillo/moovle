
function infiniteScroll(loadMoreContents){
	const displayedContentHeight = document.body.offsetHeight
	const windowHeight = window.innerHeight
	const scrollHeight = window.scrollY
	const isScrollReachedEnd = windowHeight + scrollHeight >= displayedContentHeight
	if(isScrollReachedEnd){
		loadMoreContents()
	}
}

export default infiniteScroll