import type { AWS } from '@serverless/typescript'

const functions: AWS['functions'] = {
  starwarsAPI: {
    handler: 'src/functions/starwarsAPI/index.handler',
    events: [
      {
        httpApi: {
          path: '/starwarsPeople',
          method: 'get',
        },
      },
    ],
  },
}

export default functions
