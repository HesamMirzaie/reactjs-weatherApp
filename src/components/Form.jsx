import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

const Form = (props) => {
  const { setLocation } = props;
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setLocation(inputValue);
    }

    const input = document.querySelector('input');
    if (input.value === '') {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
    input.value = '';
  };
  return (
    <form
      className={` ${
        animate ? 'animate-shake' : 'animate-none'
      } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
    >
      <div className=" h-full relative flex items-center justify-between p-2">
        <input
          onChange={(e) => handleInput(e)}
          className=" flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
          type="text"
          placeholder="Search by city or country"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className=" bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition"
        >
          <IoMdSearch className=" text-2xl text-white" />
        </button>
      </div>
    </form>
  );
};

export default Form;
