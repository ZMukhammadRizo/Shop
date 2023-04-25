import React from "react"

const Categories = (props) => {
  const categories = [
    {
      key: "all",
      name: "Всё",
    },
    {
      key: "chairs",
      name: "Стулья",
    },
    {
      key: "tables",
      name: "Столы",
    },
    {
      key: "sofa",
      name: "Диваны",
    },
    {
      key: "light",
      name: "Лампы",
    },
  ]
  return (
    <div className="categories">
      {categories.map((d, index) => (
        <div key={index} onClick={() => props.chooseCategory(d.key)}>
          {d.name}
        </div>
      ))}
    </div>
  )
}

export default Categories
