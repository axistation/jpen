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
          const { id, english, japanese, romaji, image } = word
          const pathToImage = getImage(image)
          const slug = slugify(english, { lower: true })
          return (
            <div className="card">
              <Link key={id} to={`/${slug}`}>
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
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    margin: 1rem 0;
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
    margin-top: 0.6rem;
  }
`

export default WordsList
