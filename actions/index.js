export function progress(progress) {
  return {
    type: 'PROGRESS',
	payload: {progress}
  }
}
