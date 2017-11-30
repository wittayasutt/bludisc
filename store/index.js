import Vuex from 'vuex'

import post from './modules/post'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			post
		}
	})
}

export default createStore
