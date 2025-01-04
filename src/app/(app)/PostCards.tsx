'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { Post, Media } from 'payload-types'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const PostCards = ({ posts: initialPosts }: { posts: Post[] }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  return (
    <div className="flex flex-wrap gap-3">
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <Card className="md:max-w-72">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href={`/post/${post.slug}`}>
                <Image
                  src={(post.poster as Media)?.url ?? ''}
                  alt={(post.poster as Media)?.text ?? ''}
                  width={(post.poster as Media)?.width ?? 100}
                  height={(post.poster as Media)?.height ?? 100}
                />
              </Link>
              <p>{post.body}</p>
            </CardContent>
          </Card>
        </React.Fragment>
      ))}
    </div>
  )
}
