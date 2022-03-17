import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"
import { GrReturn } from "react-icons/gr"

import styled from "styled-components"

const TagsList = ({ words }) => {
  const newTags = setupTags(words)
  return (
    <Wrapper>
      <div className="menubar">
        <Link className="back" to="/">
          <GrReturn size=".9rem" />
        </Link>
        <div className="rest">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 0.6rem;
    text-decoration: none;
  }

  .menubar a:hover {
    background-color: #eee;
  }
  .back {
    background: #fff;
    position: sticky;
    left: 0;
  }
  .rest {
    display: inline-block;
  }
`

export default TagsList
