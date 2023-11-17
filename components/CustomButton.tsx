
//THIS IS A REUSABLE COMPONENT 

"use client";//DIRECTIVE
import { CustomButtonProps } from '@/types';
// we use this directive to convert our component (server side component) into a client-side component

const CustomButton = ({ title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
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