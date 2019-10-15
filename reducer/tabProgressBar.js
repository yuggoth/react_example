export default (progress = 0, action) => {
  const { payload } = action
  return action.type === 'PROGRESS' ? payload.progress : progress
}
