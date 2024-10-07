'use client';
import { useState } from 'react';

export default function CopyButton({ code }: { code: string }) {
  const [buttonText, setButtonText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setButtonText('Copied!'); 
        setTimeout(() => {
          setButtonText('Copy');
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <button  aria-label="Code Button" 
      className='ml-2 px-1 bg-blue-400 hover:bg-blue-500 text-white rounded absolute right-0 top-0'
      onClick={handleCopy}>
      {buttonText} 
    </button>
  );
}
