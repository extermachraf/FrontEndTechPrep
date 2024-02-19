import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./More.css";
const MenuItems = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
        });
        // console.log(displayCurrentChildren);
    };
    return (
        <li >
            <div className="menu-item" >
                <p>{item.label}</p>
                {item && item.Children && item.Children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />}
                    </span>
                ) : null}
            </div>
            {item && item.Children && item.Children.length > 0 && displayCurrentChildren[item.label] ? (
                <MenuList list={item.Children} />
            ) : null}
        </li>
    );
};

export default MenuItems;
