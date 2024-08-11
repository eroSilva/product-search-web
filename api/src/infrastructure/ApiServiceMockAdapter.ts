import MockAdapter from 'axios-mock-adapter'
import { instance } from './ApiService'

export const mockedInstance = new MockAdapter(instance)
