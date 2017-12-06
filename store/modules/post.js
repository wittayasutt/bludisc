import posts from '../../data/posts'
import { find, findIndex, remove } from 'lodash'

const state = {
	posts: [],
	selectedPost: {},
	selectedID: -1,
	cart: [],
	trade: 'buy',
	navCollapse: false,
	noTransition: false,
	minimizeCart: false
}

const getters = {
	getPosts: state => {
		return state.posts
	},
	getSelectedPost: state => {
		return state.selectedPost
	},
	getSelectedID: state => {
		return state.selectedID
	},
	getCart: state => {
		return state.cart
	},
	getTrade: state => {
		return state.trade
	},
	getNavCollapse: state => {
		return state.navCollapse
	},
	getNoTransition: state => {
		return state.noTransition
	},
	getMinimizeCart: state => {
		return state.minimizeCart
	}
}

const mutations = {
	setPosts(state, posts) {
		state.posts = posts
	},
	setSeletedPost(state, id) {
		state.selectedPost = posts[2]
	},
	setSelectedID(state, id) {
		state.noTransition = false
		state.selectedID = id
	},
	setCart(state, post) {
		state.noTransition = false
		let cart = state.cart

		if (findIndex(cart, item => item.id === post.id) !== -1)
			cart = remove(cart, item => item.id !== post.id)
		cart.unshift(post)
		state.cart = cart
	},
	toggleNavCollapse(state, collapse) {
		if (collapse) {
			state.navCollapse = collapse
		} else {
			state.navCollapse = state.navCollapse ? false : true
		}
	},
	toggleTrade(state, trade) {
		if (trade) {
			state.trade = trade
		} else {
			if (state.trade === 'buy') {
				state.trade = 'sell'
			} else if (state.trade === 'sell') {
				state.trade = 'buy'
			}
		}
	},
	removeItem(state, id) {
		state.noTransition = true
		let cart = state.cart

		cart = remove(cart, item => id !== item.id)
		state.cart = cart

		if (this.selectedID === id) {
			this.selectedID = -1
		}
	},
	clickLeftArrow(state) {
		state.noTransition = true

		if (state.cart.length > 1) {
			let cart = state.cart

			const item = cart.pop()
			cart.unshift(item)
			state.cart = cart
		}
	},
	clickRightArrow(state) {
		state.noTransition = true

		if (state.cart.length > 1) {
			let cart = state.cart

			const item = cart.shift()
			cart.push(item)
			state.cart = cart
		}
	},
	setSizeCart(state) {
		if (state.cart.length > 0) {
			let minimizeCart = state.minimizeCart ? false : true
			state.minimizeCart = minimizeCart
		}
	}
}

const actions = {
	initPosts: ({ commit }) => {
		commit('setPosts', posts)
	},
	selectPost: ({ commit }, id) => {
		commit('setSeletedPost', id)
	},
	selectID: ({ commit }, id) => {
		commit('setSelectedID', id)
	},
	addToCart: ({ commit }, post) => {
		commit('setCart', post)
	},
	setNavCollapse: ({ commit }, collapse) => {
		commit('toggleNavCollapse', collapse)
	},
	setTrade: ({ commit }, trade) => {
		commit('toggleTrade', trade)
	},
	removeFromCart: ({ commit }, id) => {
		commit('removeItem', id)
	},
	clickLeft: ({ commit }) => {
		commit('clickLeftArrow')
	},
	clickRight: ({ commit }) => {
		commit('clickRightArrow')
	},
	switchSizeCart: ({ commit }) => {
		commit('setSizeCart')
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
