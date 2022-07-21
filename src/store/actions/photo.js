import { TAKE_PHOTO } from "./ActionsTypes"

export const takePhoto = (photo) => {
  return {
    type: TAKE_PHOTO,
    payload: photo
  }
}