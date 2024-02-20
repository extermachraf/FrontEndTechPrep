import React from 'react'
import { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const handleOnclick = (index) => {
        setCurrentTabIndex(index);
        onChange(index);
    }
    return (
        <div className='tabs'>
            <div className='heading'>
                {
                    tabsContent.map((tab, index) => {
                        return (
                            <div onClick={() => handleOnclick(index)} key={tab.label} className='tab'>
                                <span>{tab.label}</span>
                            </div>
                        )

                    })
                }
            </div>
            <div className='content'>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs
