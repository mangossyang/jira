export const cleanObject = (obj) => {
  const result = { ...obj }

  for (const key in obj) {
    if (isFalse(obj[key])) {
      delete result[key]
    }
  }
  return result
}
const isFalse = (v) => (v === 0 ? false : !v)

export const debounce = (func, delay = 2000) => {
  let timer
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
