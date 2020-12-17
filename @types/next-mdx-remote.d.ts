declare interface NextMDXRemoteOptions {
  components: { [name: string]: any }
}

declare module 'next-mdx-remote/hydrate' {
  function hydrate(source: string, options: NextMDXRemoteOptions): React.ReactNode

  export default hydrate
}

declare module 'next-mdx-remote/render-to-string' {
  function renderToString(source: string, options: NextMDXRemoteOptions): Promise<string>

  export default renderToString
}
