import React from 'react';

const WeatherTop = (props) => {
  const { date, icon, data } = props;
  return (
    <div className=" flex items-center gap-x-5">
      <div className=" text-[87px]">{icon}</div>
      <div>
        <div className=" text-2xl font-semibold">
          {data.name}, {data.sys.country}
        </div>
        <div>
          {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
        </div>
      </div>
    </div>
  );
};

export default WeatherTop;
