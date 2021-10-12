import { createRouter, createWebHistory } from 'vue-router'
import Movies from './Movies'
import Home from './Home'
import NotFound from './NotFound'
export default createRouter({
	history: createWebHistory(),
	routes : [
		{ 
			path: '/movies/:keyword',
			name : 'movies',
			component : Movies
		},
		{
			path : '/',
			name : 'home',
			component : Home
		},
		{
			path : '/:notfound(.*)',
			component : NotFound
		}
	]
})
