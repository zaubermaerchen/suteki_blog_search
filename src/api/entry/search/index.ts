/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query: {
      query: string
      from_date?: string | undefined
      to_date?: string | undefined
      authors?: string[] | undefined
      limit?: number | undefined
      offset?: number | undefined
    }

    status: 200
    /** Successful Response */
    resBody: Types.SearchEntryResponse
  }
}
