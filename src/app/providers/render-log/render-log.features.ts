type LogCaseWithMessage = { color: string; message?: string }

type LogCaseWithMessageGetter = {
  color: string
  getMessage?: (p?: unknown) => string
}

type LogCase = LogCaseWithMessage | LogCaseWithMessageGetter

const firstRenderingCase: LogCase = { color: 'lightgreen' }

const secondRenderingCaseByStrictMode: LogCase = {
  color: 'lightgreen',
  message: ' - repeat by strict-mode',
}

const extraRenderingCase: LogCase = {
  color: 'orange',
  getMessage: (repeatsCount = '') => ` - extra repeats (${repeatsCount})!`,
}

const getLogCases = (isInBuild: boolean): [LogCase, LogCase, LogCase] => [
  firstRenderingCase,
  isInBuild ? extraRenderingCase : secondRenderingCaseByStrictMode,
  extraRenderingCase,
]

type CacheRecord = { repetitionsCount: number; timestamp: number }
const cache: Record<string, CacheRecord> = {}

const setCache = (key: string, repetitionsCount: number): void => {
  cache[key] = { repetitionsCount, timestamp: Date.now() }
}

const getCache = (key: string): CacheRecord | null => cache[key] || null

const timeToLive = 500
const getUpdatedRepetitionsCount = (key: string): number => {
  const updatedRepetitionsCount =
    getCache(key) && Date.now() - getCache(key)!.timestamp < timeToLive
      ? getCache(key)!.repetitionsCount + 1
      : 0

  setCache(key, updatedRepetitionsCount)
  return updatedRepetitionsCount
}

type GetRenderLog = (p: {
  cacheKey: string
  isInBuild: boolean
}) => (...args: unknown[]) => void

export const getRenderLog: GetRenderLog = ({ cacheKey, isInBuild }) => {
  const repetitionsCount = getUpdatedRepetitionsCount(cacheKey)

  const currentCase =
    getLogCases(isInBuild)[repetitionsCount > 2 ? 2 : repetitionsCount]

  return (...args) => {
    const argsAsString = args.length
      ? ` ⟶ ${args.map((p) => `${p}`).join(', ')}`
      : ''

    const { message } = currentCase as LogCaseWithMessage
    const { getMessage } = currentCase as LogCaseWithMessageGetter
    const currentCaseMessage =
      message || (getMessage && getMessage(repetitionsCount)) || ''

    const totalMessage: [string, string] = [
      `%c • ${cacheKey + currentCaseMessage + argsAsString}`,
      `color:${currentCase.color}`,
    ]

    console.log(...totalMessage) // eslint-disable-line no-console
  }
}
