import React, {  } from 'react'
import './togglebutton.css'


export default function DrawerButton(props) {


    let buttonClasses = ['toggle-button']
    let lineClasses = "toggle-button__burger"

    const btn1 = {
        position: "fixed",
        left: "87%",
        top: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        zIndex: 1
    }

    const btn2 = {
        position: "fixed",
        left: "27%",
        top: "20px",
        zIndex: "3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        transition: "all .001s ease-in-out",
    }

    if(props.drawer===true){
        console.log('btn opened')
        buttonClasses = ['toggle-button', 'open']
    }

    const clickHandler = () => {
        props.clickbutton()
    }
    return (
            <div className={buttonClasses.join(' ')} style={props.drawer? btn2 : btn1} onClick={clickHandler}>
                <div className={lineClasses} />
            </div>
    )
}
