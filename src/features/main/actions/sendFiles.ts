import axios, { AxiosResponse } from 'axios'
import * as t from '../actionTypes'
import { settings } from 'config'

const { api } = settings

type Response = {
  count: number //count card
  next: string // API request list
  results: {
    name: string //name hero
    url: string //Api request hero
  }[]
}

type Payload = {
  list: {
    name: string
    url: string
  }[]
}

export type FeatchCardListAction = FSA<undefined, Payload, string>
type FetchCardList = () => MrxThunk<FeatchCardListAction>

export const sendFiles: FetchCardList = () => async (dispatch) => {
  dispatch({
    type: t.SEND_FILES,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios({
      method: 'GET',
      url: `${api}/pokemon?limit=0&offset=20`,
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    const { results } = data

    if (!results) {
      throw new Error("Can't get card list items!")
    }

    dispatch({
      type: t.SEND_FILES,
      payload: {
        list: [...results],
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.SEND_FILES,
      payload: error,
      error: true,
    })
  }
}
