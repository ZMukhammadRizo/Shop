import React from "react"
import { AiOutlineClose } from "react-icons/ai"

const ShowFullItem = (items) => {
  return (
    <div className="full-item">
      <div>
        <AiOutlineClose
          className="x"
          size={25}
          onClick={() => items.onShowItem()}
        />
        <img src={"./images/" + items.item.fullItem.img} alt="img"/>
        <h2>{items.item.fullItem.title}</h2>
        <p>{items.item.fullItem.desc}</p>
        <b>{items.item.fullItem.price}$</b>
        <div
          className="add-to-cart"
          onClick={() => items.onAdd(items.item.fullItem)}
        >
          +
        </div>
      </div>
    </div>
  )
}

export default ShowFullItem
