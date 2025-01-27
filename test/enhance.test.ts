import { afterEach, beforeEach, it } from 'vitest'
import { toSimplified, toTraditional } from '../src/index'
import { setupEnhance } from '../src/enhance'
import { simplifiedPhrasesMap, traditionalPhrasesMap } from '../src/cache'

beforeEach(() => {
  setupEnhance()
})

afterEach(() => {
  simplifiedPhrasesMap.clear()
  traditionalPhrasesMap.clear()
})

it('enhance converter', ({ expect }) => {
  const s = '主人何为言少钱，径须酤取对君酌。'
  const res = '主人何爲言少錢，徑須酤取對君酌。'
  expect(toSimplified(res, true)).toBe(s)
  expect(toTraditional(s, true)).toBe(res)
})

it('phrases', ({ expect }) => {
  const s = '王妃后来成为了王后'
  const res = '王妃後來成爲了王后'
  expect(toSimplified(res, true)).toBe(s)
  expect(toTraditional(s, true)).toBe(res)
})
