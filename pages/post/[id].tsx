import React from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'

import prisma from '../../lib/prisma'
import Layout from '../../components/Layout'
import { PostType } from '../../components/Post'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: { id: String(params?.id) }
  })
  post.published = JSON.parse(JSON.stringify(post.published))
  return { props: post }
}

const Post: React.FC<PostType> = (props) => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>{props.title}</h1>
        </div>
        <div className="content">
          <div>
            <Image
              priority
              layout="responsive"
              objectFit="cover"
              src={`/img/${props.id}.jpg`}
              height={70}
              width={50}
              alt={props.id}
            />
          </div>
          <div>
            <ReactMarkdown children={props.content} />
          </div>
        </div>
      </section>
      <style jsx>{`
        body {
          overflow-y: scroll;
        }
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
          grid-template-columns: 1fr 2fr;
          column-gap: 50px;
          row-gap: 30px;
        }
      `}</style>
    </Layout>
  )
}

export default Post
