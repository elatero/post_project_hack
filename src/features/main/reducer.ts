import { handleActions } from 'redux-actions'
// import { produce } from 'immer'

// import * as t from './actionTypes'
import { MainState } from './types'

const initState: MainState = {
  list: [],
  loading: true,
}

export default handleActions({}, initState)
