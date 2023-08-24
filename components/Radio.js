import { useState } from "react";
import { RadioGroup } from "@headlessui/react";


const vehicleType = [
  {
    name: 'Sedan',
  },
  {
    name: 'SUV',
  },
  {
    name: 'Truck',
  },
]



export default function Radio({name, handleTypeChange, selectedType, handleBlur}) {
  // const [selectedType, setSelectedType] = useState(vehicleType[0])

  const handleTypeSelection = (value) => {
    handleTypeChange({ target: { name, value }});
    console.log(value); // Log only the value
  };
  

  return (
    <div className="w-full py-4">
      <div className="w-full max-w-md">
        <RadioGroup value={selectedType} onChange={handleTypeSelection} onBlur={handleBlur}>
          <div className="grid grid-cols-3 gap-4">
            {vehicleType.map((vehicle) => (
              <RadioGroup.Option             
                name={name}
                key={vehicle.name}
                value={vehicle.name}
                className={({ active, checked }) =>
                  `${
                    !active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-1 ring-offset-amber-400'
                      : ''
                  }
                  ${
                    checked ? 'bg-primary bg-opacity-75 text-white shadow-xl shadow-amber-500/50 transition-all' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-around">
                    {checked && (
                        <div className="text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                      <div className="flex items-center text-end">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {vehicle.name}
                          </RadioGroup.Label>
                  
                        </div>
                      </div>
                      
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
