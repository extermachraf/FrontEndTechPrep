import React from 'react'
import MenuItems from './MenuItems'
import './More.css'
const MenuList = ({ list = [] }) => {
    return (
        <ul className='menu-list-container'>
            {
                list && list.length ?
                    list.map((item, index) => {
                        return (
                            <MenuItems key={index} item={item} />
                        )
                    })
                    : null
            }
        </ul>
    )
}

export default MenuList
