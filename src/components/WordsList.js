import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  const [filteredWords] = useState(words)
  const [searchField, setSearchField] = useState("")
  const myAudio = useRef(null)

  const newWords = filteredWords.filter(word => {
    return (
      word.english.toLowerCase().includes(searchField) ||
      word.japanese.toLowerCase().includes(searchField) ||
      word.romaji.toLowerCase().includes(searchField)
    )
  })

  return (
    <Wrapper>
      <div className="search-container">
        <input
          className="search-box"
          type="search"
          placeholder="search english, japanese, or romaji"
          onChange={event => {
            const searchField = event.target.value.toLowerCase()
            setSearchField(searchField)
          }}
        />
      </div>

      <div className="wrapper">
        {newWords.map(word => {
          const { id, english, japanese, romaji, image, audio } = word

          const pathToImage = getImage(image)
          const audioUrl = audio.file.url

          const handPlayAudio = () => {
            myAudio.current.src = `http:${audioUrl}`
            myAudio.current.play()
          }

          return (
            <div
              className="card"
              onClick={handPlayAudio}
              onKeyDown={handPlayAudio}
              key={id}
            >
              <audio ref={myAudio} src={""} />
              {/*<Link key={id} to={`/${slug}`}>*/}
              <GatsbyImage image={pathToImage} className="img" alt={english} />
              <p>
                <b>{english}</b> | {japanese} | {romaji}
              </p>
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
  .search-container {
    margin: 0 0 1.6rem 0;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 0.3rem 0.5rem;
    border: 1px solid #999;
    border-radius: 0;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #bbb;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #bbb;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #bbb;
    }
    text-transform: none;
  }
`

export default WordsList
