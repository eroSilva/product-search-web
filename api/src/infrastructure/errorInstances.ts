import axios from 'axios'

export const isServiceErrorInstance = axios.isAxiosError

export const serviceErrorInstance = (message: string, error: unknown) => {
  if (isServiceErrorInstance(error)) {
    throw {
      message: message,
      status: error?.response?.status,
      payload: error?.response?.data,
    }
  } else {
    throw new Error(message)
  }
}

export const isCustomErrorInstance = (error: unknown): error is CustomError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'status' in error &&
    'payload' in error
  )
}

export interface CustomError {
  message: string
  status: number
  payload: unknown
}
