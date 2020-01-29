import store from '../js/store/index'
import { addArticle } from '../js/actions/index'

window.store = store
window.addArticle = addArticle

store.subscribe(() => console.log('Look at dis!'))

store.dispatch( addArticle({ title: 'Hello there', id: 1 }))