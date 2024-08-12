import MockAdapter from 'axios-mock-adapter'
import { instance } from '@/infrastructure/ApiService'

export const mockedInstance = new MockAdapter(instance)
