export enum Tasks {
    // Other
    JOINED = 'JOINED',
    LEFT = 'LEFT',
    STARTED = 'STARTED',
    INITIALIZED = 'INITIALIZED',
    // Commands
    HELP = 'HELP',
    QUOTE = 'QUOTE',
    QUOTESTATS = 'QUOTESTATS',
    FIXLIST = 'FIXLIST',
    FIXQUOTE = 'FIXQUOTE',
    REINITIALIZE = 'REINITIALIZE',
}

export enum States {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    ERROR = ' ERROR ',
    ADD = '  ADD  ',
}

export enum Scopes {
    CLIENT = 'CLIENT',
    GUILD = 'GUILD',
    CHANNEL = 'CHANNEL',
}