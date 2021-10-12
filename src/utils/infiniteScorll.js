export function setInfiniteScroll({target, threshold, callback}){
	const  options = {
		root : target,
		threshold
	}
	const observer = new IntersectionObserver(callback, options)
	observer.observe(target)
}

export function removeInfiniteScroll(target){
	IntersectionObserver.unobserve(target)
}