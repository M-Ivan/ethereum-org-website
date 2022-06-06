import type { Lang } from "./utils/languages"

export type Intl = {
  language: Lang
  languages: Array<Lang>
  defaultLanguage: Lang
  routed: boolean
  originalPath: string
  redirect: boolean
}

export type Context = {
  slug: string
  relativePath: string
  intl: Intl
  language: Lang
  isOutdated: boolean
  isContentEnglish?: boolean
}
