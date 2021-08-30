import React from 'react'

export default function PrimaryButton({label, icon, onClick}) {
    return (
        <button onClick={onClick} className="px-4 py-3 flex justify-between items-center rounded-xl bg-primary hover:bg-primary-dark text-white space-x-3">
            <p>{label}</p>
            {icon}
        </button>
    )
}
