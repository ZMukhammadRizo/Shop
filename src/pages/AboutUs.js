import React from "react"
import styled from "styled-components"
import bg from "../img/bg.jpeg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

// ------------------------
import "leaflet/dist/leaflet.css"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow: auto;
`

const SubContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`

const FirstContent = styled("div")`
  width: 48%;
`

const Image = styled("img")`
  width: 48%;
`

const Title = styled("h1")``

const SubTitle = styled("p")`
  margin: 20px 0;
  font-size: 18px;
  line-height: 30px;
`

const Map = styled(MapContainer)`
  height: 24rem;
`

const AboutUs = () => {
  return (
    <Container>
      <SubContainer>
        <FirstContent>
          <Title>Рады вас видеть</Title>
          <SubTitle>
            Добро пожаловать на проект "House Stuff"! Мы - команда
            профессионалов, которые увлечены помощью людям в выборе идеальных
            предметов для их дома.
          </SubTitle>
          <SubTitle>
            Наша миссия - предоставить нашим клиентам лучший сервис и поддержку
            на протяжении всего процесса подбора предметов для дома. Мы
            стремимся сделать этот процесс максимально простым и безопасным для
            наших клиентов.
          </SubTitle>
          <SubTitle>
            Наша команда состоит из экспертов в области дизайна интерьера,
            производства мебели, декора и многих других областей. Мы гордимся
            нашими знаниями и опытом, которые позволяют нам помочь нашим
            клиентам создать идеальный дом, отражающий их индивидуальность.
          </SubTitle>
        </FirstContent>
        <Image src={bg} alt="background" />
      </SubContainer>
      <Title>Где мы?</Title>

      <Map center={[41.271833, 69.23197]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[41.271833, 69.23197]}
          icon={L.icon({
            iconUrl: require("../img/icon.png"),
            iconSize: 20,
          })}
        >
          <Popup>Здесь мы расположены :)</Popup>
        </Marker>
      </Map>
    </Container>
  )
}

export default AboutUs
