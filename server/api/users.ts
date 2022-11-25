// Private APIm only acces with $fetch
// DOCS: https://nuxt.com/docs/guide/directory-structure/server#api-routes
export default defineEventHandler(async (event) => {

  // handle context auth
  const { auth } = event.context
  

  // handle query params
  // const { name } = useQuery(event)
  const query = getQuery(event)
  const { name } = query

  // handle body
  const body = await readBody(event)
  const { age } = body

  // handle RuntimeConfig
  const config = useRuntimeConfig()
  console.log(config)

  // handle cookies
  const cookies = parseCookies(event)
  console.log(cookies)

  // handle ENVS
  const { apiBase } = config.public
  const { apiSecret } = config
  console.log(apiBase)
  console.log(apiSecret)

  return {
    message: `Hi there, ${name} with ${age} years old!`,
    user: auth
  }
})
