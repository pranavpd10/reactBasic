import { configureStore } from '@reduxjs/toolkit'
import CakeReducer from './Cakes.js'
import { increament, decreament, log} from './Cakes.js'
import UserReducer, {fetchUsers} from './AsyncUser.js'

const store = configureStore({
  reducer: {
    cake: CakeReducer,
    user: UserReducer
  }
})

  let unSub = store.subscribe(() => console.log(store.getState()))

  store.dispatch(increament())
  store.dispatch(increament())
  store.dispatch(log())
  store.dispatch(decreament())
  store.dispatch(log())
  store.dispatch(fetchUsers(1))
