import { add, absMinus } from '../src/index'

jest.mock('../src/utils/number.util', () => ({
  minusNum: jest.fn((num1: number, num2: number) => {
    return -9
  }),
}))

describe('index.ts', () => {
  it('add', () => {
    const result = add(10, 5)
    expect(result).toEqual(15)
  })

  it('absMinus', () => {
    const result = absMinus(1, 10)
    expect(result).toEqual(9)
  })
})
