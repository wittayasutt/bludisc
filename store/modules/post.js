import posts from '../../data/posts'
import { findIndex, remove } from 'lodash'

const state = {
	posts: [],
	cart: [],
	selectedID: -1,
	noTransition: false,
	minimizeCart: false
}

const getters = {
	getPosts: state => {
		return state.posts
	},
	getCart: state => {
		return state.cart
	},
	getSelectedID: state => {
		return state.selectedID
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
	setCart(state, post) {
		state.noTransition = false
		let cart = state.cart

		if (_.findIndex(cart, item => item.id === post.id) !== -1)
			cart = _.remove(cart, item => item.id !== post.id)
		cart.unshift(post)
		state.cart = cart
	},
	setSelectedID(state, id) {
		state.noTransition = false
		state.selectedID = id
	},
	removeItem(state, id) {
		state.noTransition = true
		let cart = state.cart

		cart = _.remove(cart, item => id !== item.id)
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
	addToCart: ({ commit }, post) => {
		commit('setCart', post)
	},
	selectID: ({ commit }, id) => {
		commit('setSelectedID', id)
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
