/// <reference types="node" resolution-mode="require"/>
import { exists, isSupportedFileExtension, simpleProjectRootDir, withCreateStreams } from '@foo-dog/utils';
declare type Options = {
    optional: [];
    required: [];
};
declare type Argv = string[];
declare type ReturnOptions = {
    [key: string]: string;
};
declare type Ret = {
    args?: string[];
    options?: ReturnOptions;
    in?: any;
    out?: any;
};
declare function parseArguments(processOrArgv: NodeJS.Process | Argv, printUsage?: Function, options?: Options): Promise<Ret>;
export { parseArguments, exists, isSupportedFileExtension, simpleProjectRootDir, withCreateStreams };
