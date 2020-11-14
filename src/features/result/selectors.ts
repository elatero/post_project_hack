import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import { AboutHero } from './types'

type AboutHeroSelector = (state: ReduxState) => AboutHero | null
type LoaderSelector = (state: ReduxState) => boolean

const getAboutHeroSelector: AboutHeroSelector = (state) => state.result.about
const getLoaderSelector: LoaderSelector = (state) => state.result.loading

export const aboutHeroSelector = createSelector(getAboutHeroSelector, (listItem) => listItem)
export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
