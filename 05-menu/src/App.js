import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menus, setMenus] = useState(items)

  const [categories, setCategories] = useState(
    items.map((menu) => {
      return menu.category
    })
  )

  categories.unshift('all')

  const filterItems = (category) => {
    if (category === 'all') {
      setMenus(items)
      return
    }
    setMenus(items.filter((menu) => menu.category === category))
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menus} />
      </section>
    </main>
  )
}

export default App
