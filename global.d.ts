export {}

declare global {
  type Toolkit = {
    github: InstanceType<typeof import('@actions/github/lib/utils.js').GitHub>
    context: import('@actions/github/lib/context.js').Context
    core: typeof import('@actions/core')
    exec: typeof import('@actions/exec')
    glob: typeof import('@actions/glob')
    io: typeof import('@actions/io')
    fetch: typeof import('node-fetch')
    __original_require__: NodeRequire
  }
}