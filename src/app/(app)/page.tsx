import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { PostCards } from './PostCards'

const Page = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  })

  const posts = await payload.find({
    collection: 'posts',
  })
  return (
    <>
      <main className="mt-5">
        <PostCards posts={posts.docs} />
      </main>
    </>
  )
}

export default Page
