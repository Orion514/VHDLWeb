

export default {
    namespaced: true,

    // 存储的数据
    state: ()=> ({
        computervhdl:{},
        tbtestdict:[],
    }),

    mutations: {
        setComputervhdl(state, computervhdl) {
            state.computervhdl = computervhdl
        },
        setTbtestdict(state, tbtestdict) {
            state.tbtestdict = tbtestdict
        }
    },

    actions:{
        setComputervhdl({commit}, computervhdl) {
            commit('setComputervhdl', computervhdl)
        },
        setTbtestdict({commit}, tbtestdict) {
            commit('setTbtestdict', tbtestdict)
        }
    }
}
