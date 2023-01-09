/* eslint-disable */
export type GetEntryResponse = {
  id: number
  date: string
  title: string
  text: string
  translation_text: string
  url: string
  authors: string[]
}

export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type SearchEntryResponse = {
  results?: SearchResultEntry[] | undefined
  count?: number | undefined
}

export type SearchResultEntry = {
  id: number
  date: string
  title: string
  text: string
  url: string
  authors: string[]
  score?: number | undefined
}

export type ValidationError = {
  loc: (Partial<string & number>)[]
  msg: string
  type: string
}
