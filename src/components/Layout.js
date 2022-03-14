import React from "react"
import Navbar from "./Navbar"
import Menubar from "./Menubar"
import Footer from "./Footer"

import styled from "styled-components"

import "normalize.css"
// import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Menubar />
      <div className="full-width">
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  * {
    font-family: "Roboto";
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
  .container {
    max-width: 968px;
    margin: 0 auto;
    padding: 1rem 0;
  }
  .full-width {
    max-width: 95%;
    margin: 0 auto;
  }
  .center {
    text-align: center;
  }
  a {
    text-decoration: none; /* no underline */
    color: #333;
  }
`

export default Layout
