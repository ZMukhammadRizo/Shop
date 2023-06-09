import React, { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import Order from "./Order"
import { Link } from "react-router-dom"

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)
  let summa = 0
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)))

  const showOrders = (props) => {
    return (
      <div>
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">Сумма: {summa}$</p>
      </div>
    )
  }

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    )
  }

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <Link className="li" to={"/"}>
            Домой
          </Link>
          <Link className="li" to={"/aboutus"}>
            Про нас
          </Link>
          <Link className="li" to={"/contact"}>
            Контакты
          </Link>
          <Link className="li" to={"/login"}>
            Регистрация
          </Link>
        </ul>
        <FaShoppingCart
          className={`shop-cart-button ${cartOpen && "active"}`}
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
