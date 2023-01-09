import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './entry/_entry_id@number'
import type { Methods as Methods1 } from './entry/search'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://zaubermaerchen.info/suteki_blog/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/entry'
  const PATH1 = '/entry/search'
  const GET = 'GET'

  return {
    entry: {
      _entry_id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      search: {
        /**
         * @returns Successful Response
         */
        get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
