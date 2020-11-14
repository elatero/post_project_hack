import { combineReducers } from 'redux'

import features from 'features'
import { MainState } from 'features/main/types'
import { SingleState } from 'features/result/types'

export type ReduxState = {
  main: MainState
  result: SingleState
}

const createRootReducer = combineReducers<ReduxState>({
  main: features.main.reducer,
  result: features.result.reducer,
})

export default createRootReducer
