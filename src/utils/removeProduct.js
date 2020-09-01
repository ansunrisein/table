import * as firebase from 'firebase'

export const removeProduct = product => (
    firebase.database().ref('ScentHunt/newProducts/' + product.id).remove()
)