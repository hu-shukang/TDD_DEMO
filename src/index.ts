import { minusNum } from './utils/number.util'

export const add = (num1: number, num2: number) => {
  return num1 + num2
}

export const absMinus = (num1: number, num2: number) => {
  return Math.abs(minusNum(num1, num2))
}
