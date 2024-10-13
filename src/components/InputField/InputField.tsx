  /* eslint-disable @typescript-eslint/no-explicit-any */
  import React from 'react';
  import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';

  interface InputFieldProps {
    label: string;
    id: string;
    type?: string;
    defaultValue?:string
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  }

  const InputField: React.FC<InputFieldProps> = ({ 
    label, 
    id, 
    type = "text", 
    defaultValue,
    placeholder, 
    register, 
    error 
  }) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label 
          htmlFor={id} 
          className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70"
        >
          {label}
        </label>
        <input
          {...register}
          defaultValue={defaultValue}
          type={type}
          id={id}
          className={`bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10 ${
            error ? 'border-rose-500' : ''
          }`}
          placeholder={placeholder}
        />
        {error && (
          <span className="text-rose-500 text-start">
            {error.message as string}
          </span>
        )}
      </div>
    );
  };

  export default InputField;
