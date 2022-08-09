import { TAKE_PHOTO } from "./ActionsTypes"
import api_client from '../../config/api_client'


export const DetectPhoto = (imageName) => {
  return dispatch => {
    api_client.post('detect-object', {
      imageName,
      optionals: {
        maxLabels: 5,
        minConfidence: 75
      }
    }).then(res => {
      dispatch({
        type: TAKE_PHOTO,
        payload: res.data
      })
    }).catch(err => {console.error(err)})
  }
}

export const takePhoto = (photo) => {
  return dispatch => {
    api_client.post('/save-image').then(res => {
      dispatch(DetectPhoto(res.data.imageName))
    }).catch(err => {console.error(err)})
  }
}
