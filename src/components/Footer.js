import React from "react"
import styled from "styled-components"
// Все права защищены&copy;

const Container = styled("footer")`
  line-height: 40px;
  background-color: #fff7e5;
  padding: 4rem 2rem;
`

const Logo = styled("h2")``

const Infos = styled("p")``

const SecondInfos = styled("h5")``

const Footer = () => {
  return (
    <Container>
      <Logo>House Staff</Logo>
      <Infos>Copyright &copy; 2023 HouseStaff Inc.</Infos>
      <SecondInfos>Privacy Policy | Security</SecondInfos>
    </Container>
  )
}

export default Footer
