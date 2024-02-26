import React, {useState} from 'react'
import "./style.scss";

const SwitchTabs = ({data, onTabChange}) => {

    const[selectedTab, setSelecterTab] = useState(0)
    const[left , setLeft] = useState (0)
  return 
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab, index) =>(

                <span key={index} className= {`tabItems`}>
                    {tab}
                </span>

            ))}
        </div>
    </div>
  
}

export default SwitchTabs