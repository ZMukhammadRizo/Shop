import React from "react"
import { FaTrash } from "react-icons/fa"

const Order = (items) => {
  return (
    <div className="item">
      <img src={"./images/" + items.item.img} alt="img" />
      <h2>{items.item.title}</h2>
      <b>{items.item.price}$</b>
      <FaTrash
        className="delete-icon"
        onClick={() => items.onDelete(items.item.id)}
      />
    </div>
  )
}

export default Order
