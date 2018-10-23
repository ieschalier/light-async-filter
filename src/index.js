export default originalArray => async resolver => {
  const promiseResolve = await Promise.all(
    originalArray.map(async v => {
      try {
        const result = await resolver(v)
        return result
      } catch (e) {
        return undefined
      }
    }),
  )

  return promiseResolve.filter(v => !!v)
}
