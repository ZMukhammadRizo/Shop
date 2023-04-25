import React from "react"

const Item = (items) => {
  // console.log(items)
  return (
    <div className="item">
      <img
        src={"./images/" + items.item.img}
        alt="item"
        onClick={() => items.onShowItem(items.item)}
      />
      <h2>{items.item.title}</h2>
      <p>{items.item.desc}</p>
      <b>{items.item.price}$</b>
      <div className="add-to-cart" onClick={() => items.onAdd(items.item)}>
        +
      </div>
    </div>
  )
}

export default Item
