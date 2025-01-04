'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'

export async function addPostAction(postData: { title: string; body: string; poster: File }) {
  const payload = await getPayloadHMR({ config: configPromise })

  const arrayBuffer = await postData.poster.arrayBuffer()
  const posterBuffer = Buffer.from(arrayBuffer)

  const posterMedia = await payload.create({
    collection: 'media',
    data: {
      text: `${postData.title} Poster`,
    },
    file: {
      data: posterBuffer,
      name: `${postData.title}.jpg`,
      mimetype: 'image/jpeg',
      size: posterBuffer.byteLength,
    },
  })

  const blogPost = await payload.create({
    collection: 'posts',
    data: {
      title: postData.title,
      body: postData.body,
      poster: posterMedia.id,
    },
  })

  revalidatePath('/')
  return blogPost
}
