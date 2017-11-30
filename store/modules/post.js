import posts from '../../data/posts'
import { findIndex, remove } from 'lodash'

const state = {
	posts: [],
	cart: [],
	selectedID: -1
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
	}
}

const mutations = {
	setPosts(state, posts) {
		state.posts = posts
	},
	setCart(state, post) {
		let cart = state.cart

		const index = _.findIndex(cart, item => item.id === post.id)

		if (index === -1) {
			cart.unshift(post)
			state.cart = cart
		} else {
			cart = _.remove(cart, item => item.id !== post.id)

			cart.unshift(post)
			state.cart = cart
		}
	},
	setSelectedID(state, id) {
		state.selectedID = id
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
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
