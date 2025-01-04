import { useState, useRef } from 'react';
import Image from 'next/image';
import ArrowDownIcon from 'assets/icons/chevron-down-gray.svg'
import useClickOutside from 'core/hooks/use-click-outside';

type Option = {
  label: string;
  value: string;
};

type MenuSelectProps = {
  options: Option[];
  selected?: string;
  placeHolder: string
  onChange: (selected: Option) => void;
  optionsContainerClassName?: string
  optionLabelClassName?: string
};

const MenuSelect = ({ options, selected, placeHolder, onChange, optionsContainerClassName, optionLabelClassName }: MenuSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef as React.RefObject<HTMLElement>, () => setIsOpen(false));

  const handleOptionClick = (item: Option) => {
    if (onChange) onChange(item);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-md bg-white border border-gray-300 flex items-center w-full"
      >
        <p className="text-gray-800 font-semibold flex-1">{options.find(option => option?.value === selected)?.label || placeHolder}</p>
        <Image
          src={ArrowDownIcon}
          alt="arrow-down"
          height={12}
          width={12}
          className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute z-10 mt-1 bg-[#fff] border border-gray-300 rounded-md shadow-md w-full transition-all duration-300 ease-in-out ${optionsContainerClassName}`}
          style={{ width: buttonRef.current?.offsetWidth }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer p-2 flex justify-center ${selected === option?.value ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
            >
              <p className={`text-gray-800 font-semibold ${optionLabelClassName}`}>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSelect;
