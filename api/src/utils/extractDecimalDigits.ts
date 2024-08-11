export const extractDecimalDigits = (value: number): number => {
  const patter = /\.(.*)/
  const [, decimals] = String(value).match(patter) || []
  const result = decimals?.padEnd(2, '0') || '0'

  return parseInt(result)
}
