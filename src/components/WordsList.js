import React, { useRef } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  const myAudio = useRef(null)

  return (
    <Wrapper>
      <div className="wrapper">
        {words.map(word => {
          const { id, english, japanese, romaji, image, audio } = word
          const pathToImage = getImage(image)
          const audioUrl = audio.file.url

          const start = () => {
            myAudio.current.src = `http:${audioUrl}`
            myAudio.current.play()
          }

          return (
            <>
              <div className="card" onClick={start} key={id}>
                <audio ref={myAudio} src={""} />

                {/*<Link key={id} to={`/${slug}`}>*/}

                <GatsbyImage
                  image={pathToImage}
                  className="img"
                  alt={english}
                />
                <p>
                  <b>{english}</b> | {japanese} | {romaji}
                </p>
              </div>
            </>
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
    color: #333;
  }
  .card:hover {
    opacity: 0.9;
    cursor: pointer;
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
