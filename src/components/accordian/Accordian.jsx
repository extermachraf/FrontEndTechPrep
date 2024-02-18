import { useState } from "react"
import data from "./accordianData"
import "../accordian/accordion.css"
//the objectife of this project is to create an accordian component that will display a question
// and answer when the question is clicked on and hide the answer when the question is clicked on
// againand also to create a multi selection and single selection
export default function Accordian() {
    //state to handle single selection
    const [selected, setSelected] = useState(null);
    const [enablemultiSelected, setEnableMultiSelected] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    //function to handle single selection  
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    //function to handle multi selection
    function handleMultiSelection(getCurrentId){
        let cpyMultipleSelected = [...multiSelected];
        const findIndexOfId = cpyMultipleSelected.indexOf(getCurrentId);
        if(findIndexOfId === -1){
            cpyMultipleSelected.push(getCurrentId);
        }
        else cpyMultipleSelected.splice(findIndexOfId, 1);

        setMultiSelected(cpyMultipleSelected);
    }
    return (
        <div className="wrraper">
            <button onClick={() => setEnableMultiSelected(!enablemultiSelected)}>
                {enablemultiSelected ? 'enable single selection' : 'enable multi selection'}
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItems=> <div className="item">
                        <div onClick={enablemultiSelected ? ()=> handleMultiSelection(dataItems.id) : () => handleSingleSelection(dataItems.id)} className="title">
                            <h3>{dataItems.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItems.id || multiSelected.indexOf(dataItems.id) !== -1 ? <div className="content">
                                <p>{dataItems.answer}</p>
                            </div> : null
                        }
                    </div>)
                    :<div>no data found</div>
                }
            </div>
        </div>
    )
}