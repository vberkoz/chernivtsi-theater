import React from 'react'
import Router from 'next/router'
import Image from 'next/image'

export type SpectacleType = {
  id: string
  type: string
  title: string
  excerpt: string
  author: string
  duration: string
  published: string
}

const Spectacle: React.FC<{ spectacle: SpectacleType }> = ({ spectacle }) => {
  return (
    <div>
      <a onClick={() => Router.push("/spectacle/[id]", `/spectacle/${spectacle.id}`)}>
        <p>{spectacle.type}</p>
        <Image
          priority
          layout="responsive"
          objectFit="cover"
          src={`/img/${spectacle.id}.jpg`}
          height={130}
          width={100}
          alt={spectacle.id}
        />
        <h2>{spectacle.title}</h2>
        <p className='excerpt'>{spectacle.excerpt}</p>
      </a>
      <a href="#">{spectacle.author}</a>
      {/* <p>{spectacle.published}</p> */}
      <p>Duration: {spectacle.duration}</p>

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
        }
        .excerpt {
          min-height: 60px;
        }
      `} </style>
    </div>
  );
}

export default Spectacle;