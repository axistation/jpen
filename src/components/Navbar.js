import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="full-width">
          <h2>
            <Link to="/">🗼 JP-EN Visual Dictionary</Link>
          </h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .navbar {
    background: #efefef;
    padding: 1.6rem 0;
  }
  a {
    color: #333;
  }
`

export default Navbar
