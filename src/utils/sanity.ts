interface GetSanityContentOptions {
  query: string
  variables?: any
}

export async function getSanityContent({ query, variables = {} }: GetSanityContentOptions) {
  const { data } = await fetch(
    'https://rwv7dazh.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  ).then((response) => response.json());

  return data;
}