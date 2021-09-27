export const ADD = 'add'
export const COMPLETE = 'complete'
export const DELETE = 'delete'

export function AddAC(payload) {
  return {
    type: ADD,
    payload,
  }
}
export function CompleteAC(payload) {
  return {
    type: COMPLETE,
    payload,
  }
}
export function DeleteAC(payload) {
  return {
    type: DELETE,
    payload,
  }
}