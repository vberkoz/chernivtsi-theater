import React from 'react'
import { GetStaticProps } from 'next'

import prisma from '../../lib/prisma'
import Layout from '../../components/Layout'
import SpectacleCard, { SpectacleType } from '../../components/Spectacle'

export const getStaticProps: GetStaticProps = async () => {
  const spectacles = await prisma.spectacle.findMany()
  spectacles.map(spectacle => {
    spectacle.published = JSON.parse(JSON.stringify(spectacle.published))
  })
  return { props: { spectacles } }
}

type Props = {
  spectacles: SpectacleType[]
}

const Spectacle: React.FC<Props> = props => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>General Spectacles</h1>
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

export default Spectacle