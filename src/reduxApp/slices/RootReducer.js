import { configureStore } from '@reduxjs/toolkit'
import CakeReducer from './Cakes.js'
import { increament, decreament, log} from './Cakes.js'

const store = configureStore({
    reducer: CakeReducer
  })

  let unSub = store.subscribe(() => console.log(store.getState()))

  store.dispatch(increament())
  store.dispatch(increament())
  store.dispatch(log())
  store.dispatch(decreament())
  store.dispatch(log())
  unSub();