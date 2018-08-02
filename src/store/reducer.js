import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

const reducers = {
  routing,
  form,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

console.log('reducer,req',req)

req.keys().forEach((key) => {
  console.log('reducer.jssdfsdfs',key)
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
