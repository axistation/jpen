import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="full-width">
          <h2>
            <Link to="/">📖 Japanese-English Visual Dictionary</Link>
          </h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .navbar {
    height: 5rem;
    background: #efefef;
  }
  h2 {
    line-height: 5rem;
    vertical-align: middle;
  }
  a {
    color: #333 !important;
  }
`

export default Navbar
