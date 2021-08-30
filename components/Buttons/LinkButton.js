import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
export default function LinkButton({text, onClick}) {
    return (
        <div onClick={onClick} className="text-primary flex items-center space-x-3">
            <p>{text}</p>
            <BiRightArrowAlt className="text-primary w-4 h-4"/>
        </div>
    )
}
