import { NextApiRequest, NextApiResponse } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'

import { SignUpForm } from 'src/components/signUpForm'
import { getSanityContent } from 'src/utils/sanity'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug as string

  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        pages: allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          slug {
            current
          }
          content
        }
      }
    `,
    variables: {
      slug,
    },
  })

  const page = data.pages[0]

  const mdxSource = await renderToString(page.content, {
    // wrap components so we can record the ones that are actually used
    // during the render, then return the listed of required components
    // so that we can load them as part of the page loading code.
    components: {
      SignUpForm,
    },
  })

  res.statusCode = 200
  res.json({
    title: page.title,
    mdxSource,
  })
}
