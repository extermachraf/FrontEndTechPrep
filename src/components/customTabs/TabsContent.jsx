import React from 'react'
import Tabs from './Tabs'
import './tabs.css'

const TabsContent = () => {

    function RandomComponenet() {
        return (
            <h1>Random component</h1>
        )
    }

    const tabsContent = [
        {
            label: 'Tab 1',
            content: <div>Tab 1 content</div>
        },
        {
            label: 'Tab 2',
            content: <div>Tab 2 content</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponenet />
        }
    ]

    function handleChange(tabIndex) {
        console.log('Tab index:', tabIndex)
    }

    return (
        <Tabs tabsContent={tabsContent} onChange={handleChange}></Tabs>
    )
}

export default TabsContent
