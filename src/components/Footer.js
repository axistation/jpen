import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="full-width center">
          &copy; {new Date().getFullYear()} <span>axistation</span>. Built with{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer {
    height: 2rem;
    background: #efefef;
  }
  div {
    line-height: 2rem;
    vertical-align: middle;
  }
  a {
    text-decoration: underline;
  }
`
export default Footer
