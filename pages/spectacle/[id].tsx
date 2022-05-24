import React from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'

import prisma from '../../lib/prisma'
import Layout from '../../components/Layout'
import { SpectacleType } from '../../components/Spectacle'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const spectacle = await prisma.spectacle.findUnique({
    where: { id: String(params?.id) }
  })
  spectacle.published = JSON.parse(JSON.stringify(spectacle.published))
  return { props: spectacle }
}

const Spectacle: React.FC<SpectacleType> = (props) => {
  return (
    <Layout>
      <section>
        <div className="header">
          
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
            <h1>{props.title}</h1>
            <p>{props.type}</p>
            <p>Author: {props.author}</p>
            <p>Duration: {props.duration}</p>
            <ReactMarkdown children={props.excerpt} />
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
        h1 {
          margin-top: 0;
        }
      `}</style>
    </Layout>
  )
}

export default Spectacle