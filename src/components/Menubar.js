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
      <div className="center menubar">
        <TagsList words={words} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar {
    background-color: #fefefe;
    overflow: auto;
    white-space: nowrap;
    border-top: 0.2px solid #dedede;
    border-bottom: 0.2px solid #efefef;
  }
`

export default Menubar
