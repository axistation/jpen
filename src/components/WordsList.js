import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {words.map(word => {
          const { id, english, japanese, romaji, image, audio } = word
          const pathToImage = getImage(image)
          const slug = slugify(english, { lower: true })

          const audioUrl = audio.file.url

          const start = audioUrl => (
            <audio autoPlay src={`https://${audioUrl}`} />
          )

          return (
            <div className="card" onClick={start}>
              {/*<Link key={id} to={`/${slug}`}>*/}
              <Link key={id} to="#">
                <GatsbyImage
                  image={pathToImage}
                  className="img"
                  alt={english}
                />
                <p>
                  <b>{english}</b> | {japanese} | {romaji}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  .card {
    color: #fff;
  }
  .card:hover {
    opacity: 0.9;
  }
  .img {
    width: 100%;
  }
  p {
    padding-top: 0.6rem;
    font-size: 0.9rem;
  }
`

export default WordsList
