
//THIS IS A REUSABLE COMPONENT 

"use client";//DIRECTIVE
import { CustomButtonProps } from '@/types';
// we use this directive to convert our component (server side component) into a client-side component

const CustomButton = ({ title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton