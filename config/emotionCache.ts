import createCache, { type Cache } from '@emotion/cache'

const createEmotionCache = (): Cache => {
  return createCache({ key: 'css', prepend: true })
}

export default createEmotionCache
