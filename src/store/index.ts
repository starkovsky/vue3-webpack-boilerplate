import { createStore } from 'vuex'

type State = { count: number }

const state: State = { count: 0 };

const mutations = {
    increment(state: State) {
        state.count++
    },
};

export const store = createStore({ state, mutations });
