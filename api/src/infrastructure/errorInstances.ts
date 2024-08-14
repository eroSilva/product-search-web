import axios, { AxiosError } from 'axios'

export const isServiceErrorInstance = axios.isAxiosError

export const createServiceErrorObject = (error: AxiosError) => ({
  status: error?.response?.status,
  payload: error?.response?.data,
})
