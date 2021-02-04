
import { createStore } from 'redux'
import headerReduce from './reducers/headerReduce'

const store = createStore(headerReduce);


export default store;