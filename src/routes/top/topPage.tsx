import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import * as React from 'react'

import { SignUpForm } from 'src/components/signUpForm'

export function TopPage(props: any) {
  const {
    mdxSource,
    title
  } = props.page

  const content = hydrate(mdxSource, {
    components: {
      SignUpForm
    }
  })
  
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        {content}
      </main>
    </div>
  )
}
