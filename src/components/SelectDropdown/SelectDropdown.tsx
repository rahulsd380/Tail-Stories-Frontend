import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface SelectDropdownProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
  defaultValue?: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  id,
  options,
  register,
  error,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70"
      >
        {label}
      </label>
      <select
        {...register}
        id={id}
        defaultValue={defaultValue}
        className={`bg-primary-70 px-3 py-[10px] rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10 ${
          error ? 'border-rose-500' : ''
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-rose-500 text-start">{error.message}</span>
      )}
    </div>
  );
};

export default SelectDropdown;
