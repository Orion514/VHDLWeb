

export default {
    namespaced: true,

    // 存储的数据
    state: ()=> ({
        computervhdl:{},
    }),

    mutations: {
        setComputervhdl(state, computervhdl) {
            state.computervhdl = computervhdl
        }
    },

    actions:{
        setComputervhdl({commit}, computervhdl) {
            commit('setComputervhdl', computervhdl)
        }
    }
}
