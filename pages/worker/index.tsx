import React from 'react'
import { GetStaticProps } from 'next'
import prisma from '../../lib/prisma'

import Layout from '../../components/Layout'
import WorkerThumb, { WorkerType } from '../../components/Worker'

export const getStaticProps: GetStaticProps = async () => {
  const workers = await prisma.worker.findMany()
  return { props: { workers } }
}

type Props = {
  workers: WorkerType[]
}

const Worker: React.FC<Props> = props => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>Management</h1>
        </div>
        <div className="content">
          {props.workers.map(worker => {
            if (worker.department === 'Management') {
              return (
                <div key={worker.id}>
                  <WorkerThumb worker={worker} />
                </div>
              )
            }
          })}
        </div>
      </section>
      <section>
        <div className="header">
          <h1>Artistic</h1>
        </div>
        <div className="content">
          {props.workers.map(worker => {
            if (worker.department === 'Artistic') {
              return (
                <div key={worker.id}>
                  <WorkerThumb worker={worker} />
                </div>
              )
            }
          })}
        </div>
      </section>
      <section>
        <div className="header">
          <h1>Actors</h1>
        </div>
        <div className="content">
          {props.workers.map(worker => {
            if (worker.department === 'Actors') {
              return (
                <div key={worker.id}>
                  <WorkerThumb worker={worker} />
                </div>
              )
            }
          })}
        </div>
      </section>
      <section>
        <div className="header">
          <h1>Orchestra</h1>
        </div>
        <div className="content">
          {props.workers.map(worker => {
            if (worker.department === 'Orchestra') {
              return (
                <div key={worker.id}>
                  <WorkerThumb worker={worker} />
                </div>
              )
            }
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
          grid-template-columns: repeat(4, 1fr);
          column-gap: 10px;
          row-gap: 30px;
        }
      `}</style>
    </Layout>
  )
}

export default Worker