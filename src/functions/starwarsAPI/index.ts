import { formatJSONResponse } from '@libs/api-gateway'
import { APIGatewayProxyEvent } from 'aws-lambda'
import axios from 'axios'

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const res = await axios.get('https://swapi.dev/api/people/1/?format=json')

    if (!res.data) {
      return formatJSONResponse({
        statusCode: 400,
        data: { message: 'Data not found' },
      })
    }

    return formatJSONResponse({ data: res.data })
  } catch (error) {
    console.log('error', error)
    return formatJSONResponse({
      statusCode: 502,
      data: {
        message: error.message,
      },
    })
  }
}
