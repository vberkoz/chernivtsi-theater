import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

export type WorkerType = {
  id: string
  name: string
  position: string
  department: string
  bio: string
}

const Worker: React.FC<{ worker: WorkerType }> = ({worker}) => {
  return (
    <a onClick={() => Router.push('/worker/[id]', `/worker/${worker.id}`)}>
      <Image
        priority
        layout="responsive"
        objectFit="cover"
        src={`/img/${worker.id}.jpg`}
        height={70}
        width={50}
        alt={worker.id}
      />
      <h2>{worker.name}</h2>
      <p>{worker.position}</p>
    </a>
  )
}

export default Worker