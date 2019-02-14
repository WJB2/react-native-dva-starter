import globalService from "./../services/globalService";

export default {

    namespace : 'global',

    state: {
        test:'测试',
        data:[],
    },

    effects: {
        * queryDictList({payload},{call,put,select}){
            const data=yield call(globalService.findDictList,payload);
            console.log(data)
            yield put({
                type:'updateState',
                payload:{
                    data:data.data,
                }
            })
        }
    },

    reducers: {
        updateState(state, {payload}){
            return {...state, ...payload};
        }
    }
}