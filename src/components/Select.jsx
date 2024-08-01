import { useId } from "react";
import React from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
    const id = useId();
    return (
        <div calssName="w-full">
            {label && <label htmlFor={id}></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                calssName={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default React.forwardRef(Select);
