import React from 'react'
import Router from 'next/router'
import Image from 'next/image'
import moment from 'moment'

export type PostType = {
  id: string
  title: string
  content: string
  published: string
}

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div>
      <a onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}>
        <Image
          priority
          layout="responsive"
          objectFit="cover"
          src={`/img/${post.id}.jpg`}
          height={30}
          width={100}
          alt={post.id}
        />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </a>
      <p>{moment(post.published).fromNow()}</p>

      <style jsx> {`
        a h2 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        a p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          min-height: 54px;
        }
      `} </style>
    </div>
  )
}

export default Post
