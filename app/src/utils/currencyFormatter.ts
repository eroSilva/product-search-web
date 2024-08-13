interface CurrencyFormatterProps {
  currency: string
  value: number
}

const CURRENCY_FORMAT_TYPES: Record<string, string> = {
  BRL: 'pt-BR',
  USD: 'en-US',
}

export const currencyFormatter = ({
  currency,
  value,
}: CurrencyFormatterProps): string => {
  return new Intl.NumberFormat(CURRENCY_FORMAT_TYPES[currency], {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
