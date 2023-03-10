import cn, { Argument } from 'classnames'

const getClassNameCreator =
  (debugClassNameEnabled: boolean) =>
  (name: string, ...args: Argument[]) =>
    cn(...args, { [`__${name}__`]: debugClassNameEnabled })

export default getClassNameCreator(import.meta.env.MODE !== 'production')
