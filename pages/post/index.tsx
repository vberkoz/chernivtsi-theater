import React from 'react'
import { GetStaticProps } from 'next'

import prisma from '../../lib/prisma'
import Layout from '../../components/Layout'
import PostCard, { PostType } from '../../components/Post'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany()
  posts.map(post => {
    post.published = JSON.parse(JSON.stringify(post.published))
  })
  return { props: { posts } }
}

type Props = {
  posts: PostType[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>Latest Posts</h1>
        </div>
        <div className="content">
          {props.posts.map(post => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            )
          })}
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 20px 0;
        }
        section .header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0;
        }
        section .content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 10px;
          row-gap: 30px;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
