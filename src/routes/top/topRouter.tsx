import fetch from 'isomorphic-unfetch'
import { routeAsync } from 'retil-router'

import { AppRequest } from 'src/utils/routing'

import { TopPage } from './topPage'

export const router = routeAsync(async (_req: AppRequest) => {
  const pageResponse = await fetch(`http://localhost:3000/api/page?slug=top`)
  const page = await pageResponse.json()

  return (
    <TopPage page={page} />
  )
})
