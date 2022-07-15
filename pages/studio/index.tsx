import React from 'react'

import Layout from '../../components/Layout'

type Props = {

}

const Studio: React.FC<Props> = (props) => {
  return (
    <Layout>
      <section>
        <div className="header">
          <h1>Studio</h1>
        </div>
        <div className="content"></div>
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

export default Studio