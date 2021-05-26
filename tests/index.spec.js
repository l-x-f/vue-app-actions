import pathResolve from '../src/utils/pathResolve'

test('src/utils/pathResolve.ts', () => {
  expect(pathResolve.resolve('/home', '/index')).toBe('/index')
  expect(pathResolve.resolve('/home', 'index')).toBe('/home/index')
  expect(pathResolve.resolve('', 'index')).toBe('/index')
  expect(pathResolve.resolve('', '')).toBe('/')
  expect(pathResolve.resolve('/', '/')).toBe('/')
})
