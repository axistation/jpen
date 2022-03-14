import React from "react"
import WordsList from "./WordsList"
import { graphql, useStaticQuery } from "gatsby"

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
          gatsbyImageData
        }
      }
    }
  }
`
const AllWords = () => {
  const data = useStaticQuery(query)
  const words = data.allContentfulWord.nodes

  return (
    <section className="">
      <WordsList words={words} />
    </section>
  )
}

export default AllWords
