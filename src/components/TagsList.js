import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

import styled from "styled-components"

const TagsList = ({ words }) => {
  const newTags = setupTags(words)
  return (
    <Wrapper>
      <div className="menubar">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 0.8rem;
    text-decoration: none;
  }

  .menubar a:hover {
    background-color: #eee;
  }
`

export default TagsList
