import React from "react"
import styled from "styled-components"
import { AiFillPhone } from "react-icons/ai"
import { contactsInfo } from "../constants/data"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  padding: 4rem 0;
  background-color: rgb(237, 237, 237);
`

const Title = styled("h1")`
  font-size: 60px;
`

const Contacts = styled("div")`
  display: flex;
  justify-content: space-around;
`

const Type = styled("div")`
  display: flex;
  flex-direction: column;
  width: 32%;
  align-items: center;
  gap: 1rem;
`

const Content1 = styled("div")`
  width: 65%;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
  font-size: 18px;
`

const TypeTitle = styled("h1")`
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 400;
`

const Day = styled("p")`
  font-weight: bold;
  font-size: 14px;
`

const Location = styled("p")`
  font-size: 24px;
  margin: 20px 0;
  font-weight: 500;
`

const Number = styled("p")`
  font-size: 22px;
  font-weight: 500;
`

const SubTitle = styled("h4")`
  width: 65%;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
  font-size: 18px;
`

const Button = styled("button")`
  padding: 10px 100px;
  border: none;
  background-color: white;
  font-size: 22px;
  transition: all 0.3s;
  text-transform: uppercase;

  :hover {
    background-color: #e6dfdf;
  }
`

const ContactPage = () => {
  return (
    <Container>
      <Title>Контакты</Title>
      <Contacts>
        <Type>
          <AiFillPhone size={50} color="orange" />
          <TypeTitle>Телефон</TypeTitle>
          <Content1>
            <Day>(Понедельник/ Субота, 9:00/21:00)</Day>
            <Location>Uzbekistan, Tashkent</Location>
            <Number>+998 (11) 111-11-11</Number>
          </Content1>
        </Type>
        {contactsInfo.map((d, index) => (
          <Type key={index}>
            {d.icon}
            <TypeTitle>{d.title}</TypeTitle>
            <SubTitle>{d.subtitle}</SubTitle>
            <Button>{d.btn}</Button>
          </Type>
        ))}
      </Contacts>
    </Container>
  )
}

export default ContactPage
