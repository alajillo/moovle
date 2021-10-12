const infiniteScroll = (callback,target)=>{
	let observer = new IntersectionObserver( ()=> {
		callback()
		observer.observe(target)
	},{
		root : null,
		threshold : 0.2
	})
	observer.observe(target)
}
export default infiniteScroll