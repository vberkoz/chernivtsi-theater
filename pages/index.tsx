import React from 'react'
import { GetStaticProps } from 'next'

import prisma from '../lib/prisma'
import Layout from '../components/Layout'
import PostCard, { PostType } from '../components/Post'
import SpectacleCard, { SpectacleType } from '../components/Spectacle'

export const getStaticProps: GetStaticProps = async () => {
  const spectacles = await prisma.spectacle.findMany({ take: 3 })
  spectacles.map(spectacle => {
    spectacle.published = JSON.parse(JSON.stringify(spectacle.published))
  })
  const posts = await prisma.post.findMany({ take: 3 })
  posts.map(post => {
    post.published = JSON.parse(JSON.stringify(post.published))
  })
  return {
    props: {
      spectacles,
      posts
    }
  }
}

type Props = {
  spectacles: SpectacleType[]
  posts: PostType[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>Closest Spectacles</h1>
          <a href="#">Show All Spectacles</a>
        </div>
        <div className="content">
          {props.spectacles.map(spectacle => {
            return (
              <div key={spectacle.id}>
                <SpectacleCard spectacle={spectacle} />
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <div className="header">
          <h1>Latest Posts</h1>
          <a href="#">Show All Posts</a>
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

export default Home
