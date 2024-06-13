import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

const Spinner = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <ImSpinner8 className=" text-white text-5xl animate-spin" />
    </div>
  );
};

export default Spinner;
