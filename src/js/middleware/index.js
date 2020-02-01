import { ADD_ARTICLE } from '../constants/action-types'

const forbiddenWords = ['spam', 'money', 'Spam', 'Money']

let article = ''

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundword = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        )
        if (foundword.length) {
          return dispatch({ type: 'FOUND_BAD_WORD' })
        }
      }
      return next(action)
    }
  }
}

export function emptyTitle({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        article = action.payload.title
        if (article == '') {
          return dispatch({ type: 'NO_TITLE_FOUND' })
        }
      }
      return next(action)
    }
  }
}