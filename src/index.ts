declare module 'utils' {
  export type Options = {
    optional: [],
    required: []
  }
  export type Argv = string[];
  export type ReturnOptions = {
    [key: string]: string
  }
  export type Ret = {
    args?: string[],
    options?: ReturnOptions,
    in?: any,
    out?: any
  }
  export function isSupportedFileExtension(extension: string): boolean;
  export function simpleProjectRootDir(): string;
  export function exists(path: string): boolean;
  export function parseArguments(processOrArgv: NodeJS.Process | Argv, printUsage?: Function, options?: Options): Promise<Ret>;
  export function isSupportedFileExtension(extension: string): boolean;
  export function simpleProjectRootDir(): string;
  export function exists(path: string): boolean;
}