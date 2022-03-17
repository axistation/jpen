import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="full-width center">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/">jp-en visual dictionary</Link>. Built with{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a> |{" "}
          <a href="https://reactjs.org/">React</a>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer {
    height: 1.8rem;
    background: #efefef;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  div {
    line-height: 2rem;
    vertical-align: middle;
  }
  a {
    text-decoration: underline !important;
  }
`
export default Footer
