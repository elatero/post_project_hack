import { handleActions } from 'redux-actions'
// import { produce } from 'immer'
import { SingleState } from './types'

const initState: SingleState = {
  about: null,
  loading: true,
}

export default handleActions({}, initState)
