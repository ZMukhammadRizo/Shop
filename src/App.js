import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import ContactPage from "./pages/Contact"
import { useState } from "react"
import Header from "./components/Header"
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer"

const App = () => {
  const items = [
    {
      id: 1,
      title: "Кресло",
      img: "Kreslo.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 2,
      title: "Стол",
      img: "table.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "tables",
      price: "149.00",
    },
    {
      id: 3,
      title: "Диван",
      img: "sofa.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "sofa",
      price: "549.99",
    },
    {
      id: 4,
      title: "Стол",
      img: "table2.jpg",
      desc: "Lorem ipsum dolor ",
      category: "tables",
      price: "245.00",
    },
    {
      id: 5,
      title: "Лампа",
      img: "wall-light.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "light",
      price: "25.00",
    },
    {
      id: 6,
      title: "Настольная лампа",
      img: "Lamp.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "light",
      price: "9.99",
    },
    {
      id: 7,
      title: "Стул белый",
      img: "chair-white.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 8,
      title: "Стул разноцветный",
      img: "Stul.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "chairs",
      price: "50.99",
    },
    {
      id: 9,
      title: "Диван",
      img: "SofaBig.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "sofa",
      price: "549.99",
    },
    {
      id: 10,
      title: "Стол",
      img: "table4.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "tables",
      price: "245.00",
    },
    {
      id: 11,
      title: "Стол",
      img: "table5.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "tables",
      price: "245.00",
    },
    {
      id: 12,
      title: "Стол",
      img: "table7.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "tables",
      price: "245.00",
    },
    {
      id: 13,
      title: "Лампа",
      img: "lamp2.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "light",
      price: "25.00",
    },
    {
      id: 14,
      title: "Диван",
      img: "SofaBig3.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "sofa",
      price: "549.99",
    },
    {
      id: 15,
      title: "Кресло",
      img: "Sofa2.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      category: "sofa",
      price: "59.99",
    },
  ]
  let [orders, setOrders] = useState([])
  let [currentItems, setCurrentItems] = useState(items)
  let [show, setShow] = useState(false)
  let [fullItem, setFullItem] = useState({})

  function addToOrder(items) {
    let isInArray = false
    orders.forEach((el) => {
      if (el.id === items.id) isInArray = true
    })
    if (!isInArray) setOrders([...orders, items])
  }

  function deleteOrder(index) {
    setOrders(orders.filter((el) => el.id !== index))
  }

  function chooseCategory(category) {
    if (category === "all") {
      setCurrentItems(items)
    } else {
      setCurrentItems(items.filter((el) => el.category === category))
    }
  }

  function onShowItem(item) {
    setFullItem({ fullItem: item })
    setShow((show = !show))
  }
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header orders={orders} onDelete={deleteOrder} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                chooseCategory={chooseCategory}
                addToOrder={addToOrder}
                currentItems={currentItems}
                onShowItem={onShowItem}
                show={show}
                fullItem={fullItem}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
