import React from 'react';
import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';

const WeatherFooter = (props) => {
  const { data } = props;
  return (
    <div className=" max-w-[378px] mx-auto flex flex-col gap-y-6">
      <div className=" flex justify-between">
        <div className=" flex items-center gap-x-2">
          {/* icon */}
          <div className=" text-[20px]">
            <BsEye />
          </div>
          <div>
            Visibillity{' '}
            <span className=" ml-2">{data.visibility / 1000} km</span>
          </div>
        </div>
        <div className=" flex items-center gap-x-2">
          {/* icon */}
          <div className=" text-[20px]">
            <BsThermometer />
          </div>
          <div className="flex">
            Feels like
            <div className=" flex ml-2">
              {parseInt(data.main.feels_like)}
              <TbTemperatureCelsius />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className=" flex items-center gap-x-2">
          {/* icon */}
          <div className=" text-[20px]">
            <BsWater />
          </div>
          <div>
            Humidity <span className=" ml-2">{data.main.humidity} %</span>
          </div>
        </div>
        <div className=" flex items-center gap-x-2">
          {/* icon */}
          <div className=" text-[20px]">
            <BsWind />
          </div>
          <div>
            Wind <span className="ml-2">{data.wind.speed} m/s</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherFooter;
