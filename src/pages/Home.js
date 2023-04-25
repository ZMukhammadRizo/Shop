import React from "react"
import Items from "../components/Items"
import Categories from "../components/Categories"
import ShowFullItem from "../components/ShowFullItem"
import Banner from "../components/Banner"

const Home = (props) => {
  const {
    addToOrder,
    chooseCategory,
    currentItems,
    onShowItem,
    fullItem,
    show,
  } = props
  return (
    <div>
      <Banner />
      <Categories chooseCategory={chooseCategory} />
      <Items onAdd={addToOrder} items={currentItems} onShowItem={onShowItem} />
      {show && (
        <ShowFullItem
          onAdd={addToOrder}
          item={fullItem}
          onShowItem={onShowItem}
        />
      )}
    </div>
  )
}

export default Home
