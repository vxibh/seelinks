import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RadioTogglers({ options }) {
  return (
    <div className="radio-togglers shadow">
            {options.map((option) => (
            <label>
                <div>
                    <input type="radio" name="bgType"
                    value={option.value}/>
                        <FontAwesomeIcon icon={option.icon} />
                        <span>{option.label}</span>
               </div>
            </label>
        ))}
    </div>
  );
}