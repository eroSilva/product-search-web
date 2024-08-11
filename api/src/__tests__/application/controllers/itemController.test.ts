import request from 'supertest'
import { mockedInstance } from '../../../infrastructure/ApiServiceMockAdapter'
import {
  itemsEntityFixture,
  itemsRepositoryFixture,
  itemRepositoryFixture,
  itemEntityFixture,
} from '../../../__fixtures__'

describe('application/controllers/itemController', () => {
  const app = require('../../../app')

  it('should return HTTP status 400 with a simple message when search param is not provided', async () => {
    await request(app)
      .get('/api/items')
      .expect(400, 'Missing required query parameter: search')
  })

  it('should return HTTP status 400 with a simple message when search param is provided without value', async () => {
    await request(app)
      .get('/api/items?search=')
      .expect(400, 'Missing required query parameter: search')
  })

  it('should return HTTP status 500 with an error payload when something went wrong in items service', async () => {
    mockedInstance.onGet('/sites/MLB/search?q=SOME_QUERY').reply(500, {
      content: 'error details',
    })

    await request(app)
      .get('/api/items?search=SOME_QUERY')
      .expect(500, {
        message: 'Error fetching in getItems',
        status: 500,
        payload: { content: 'error details' },
      })
  })

  it('should return HTTP status 200 with correctly response when search param is provided', async () => {
    mockedInstance
      .onGet('/sites/MLB/search?q=SOME_QUERY')
      .reply(200, itemsRepositoryFixture)

    await request(app)
      .get(`/api/items?search=SOME_QUERY`)
      .expect(200, itemsEntityFixture)
  })

  it('should return HTTP status 500 with an error payload when something went wrong in item service', async () => {
    mockedInstance.onGet('/items/SOME_ID').reply(500)

    await request(app)
      .get('/api/item/SOME_ID')
      .expect(500, { message: 'Error fetching in getItem', status: 500 })
  })

  it('should return HTTP status 404 with a message when something went wrong in item service', async () => {
    mockedInstance
      .onGet('/items/SOME_ID')
      .reply(404, { content: 'error details' })

    await request(app)
      .get('/api/item/SOME_ID')
      .expect(404, {
        message: 'Error fetching in getItem',
        status: 404,
        payload: { content: 'error details' },
      })
  })

  it('should return HTTP status 200 with correctly response when id is provided', async () => {
    mockedInstance.onGet('/items/SOME_ID').reply(200, itemRepositoryFixture)

    await request(app).get(`/api/item/SOME_ID`).expect(200, itemEntityFixture)
  })
})
