import React, { ComponentProps } from 'react';

interface FormProps extends ComponentProps<'form'> {
  children: React.ReactNode;
}

export function Form({ children, className = '', ...props }: FormProps) {
  return (
    <form 
      {...props} 
      className={`
        flex flex-col gap-5 p-10 w-full max-w-2xl mx-auto
        [&_input]:px-2
        [&_input]:py-2
        [&_input]:border 
        [&_input]:gap-20 
        [&_input]:rounded 
        [&_input]:w-full 
        [&_input]:focus:outline-none 
        [&_input]:focus:ring-2 
        [&_input]:focus:ring-indigo-600
        ${className}
      `.replace(/\s+/g, ' ').trim()} 
    >
      {children}
    </form>
  );
}
