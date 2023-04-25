import React from "react"
import Item from "./Item"

const Items = (props) => {
  return (
    <main>
      {props.items.map((d) => (
        <Item
          onShowItem={props.onShowItem}
          item={d}
          key={d.id}
          onAdd={props.onAdd}
        />
      ))}
    </main>
  )
}

export default Items
