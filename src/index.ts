import { parseArguments as originalParseArguments, exists, isSupportedFileExtension, simpleProjectRootDir, withCreateStreams } from '@foo-dog/utils';


declare type Options = {
  optional: [],
  required: []
}

declare type Argv = string[];

declare type ReturnOptions = {
  [key: string]: string
}

declare type Ret = {
  args?: string[],
  options?: ReturnOptions,
  in?: any,
  out?: any
}

async function parseArguments(processOrArgv: NodeJS.Process | Argv, printUsage?: Function, options?: Options): Promise<Ret> {
  return originalParseArguments(processOrArgv, printUsage, options)
}

export { parseArguments, exists, isSupportedFileExtension, simpleProjectRootDir, withCreateStreams };