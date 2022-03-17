import React from "react"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulWord(sort: { fields: english, order: ASC }) {
      nodes {
        id
        english
        japanese
        romaji
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Menubar = () => {
  const data = useStaticQuery(query)
  const words = data.allContentfulWord.nodes
  return (
    <Wrapper>
      <div className="menubar center sticky">
        <TagsList words={words} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar {
    background-color: #fff;
    overflow: auto;
    white-space: nowrap;
  }
  .back {
    display: block;
    color: #333;
    padding: 0.6rem;
    text-decoration: none;
  }
  .back:hover {
    background-color: #eee;
  }
`

export default Menubar
