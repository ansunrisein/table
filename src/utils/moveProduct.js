import * as firebase from 'firebase'
import {dissoc} from 'ramda'

export const moveProduct = product => (
    firebase.database().ref('ScentHunt').update({
        ['/newProducts/' + product.id]: null,
        ['/products/' + product.id]: dissoc('new', product)
    })
)