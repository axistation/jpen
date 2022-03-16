import React, { useState, useEffect, useRef } from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  const myAudio = useRef(null)

  // State for the list
  const [list, setList] = useState([...words.slice(0, 10)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(words.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < words.length
      const nextResults = isMore
        ? words.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < words.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <Wrapper>
      <div className="wrapper">
        {list.map(word => {
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
      <div className="loadmore">
        {hasMore ? (
          <div className="btn" onClick={handleLoadMore}>
            load more
          </div>
        ) : (
          <div className="nomore">what this space</div>
        )}
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
  .loadmore {
    text-align: center;
    padding: 2rem;
  }
  .btn {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 6px;
    color: #24292e;
    background-color: #fafbfc;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    :hover {
      background-color: #f3f4f6;
      border-color: #1b1f2326;
      transition-duration: 0.1s;
    }
  }
`

export default WordsList
