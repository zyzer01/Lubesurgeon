import { useState } from 'react';
import Image from 'next/image';
import sedan from "/public/images/sedan.png";


const RadioButton = ({ label, imageSrc, selected, onChange }) => {
  return (
    <label
      className={`inline-flex items-center px-4 py-2 w-16 h-8 rounded-md border ${
        selected ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
      } cursor-pointer`}
    >
      <input
        type="radio"
        className="hidden"
        checked={selected}
        onChange={onChange}
      />
      <Image src={imageSrc} alt={label} className="h-24 w-24 rounded-full" />
    </label>
  );
};

export default function Rad() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Option 1', imageSrc: sedan },
    { label: 'Option 2', imageSrc: sedan },
    { label: 'Option 3', imageSrc: sedan },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex space-x-4">
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          imageSrc={option.imageSrc}
          selected={selectedOption === option}
          onChange={() => handleOptionChange(option)}
        />
      ))}
    </div>
  );
}
