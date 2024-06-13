import { TbTemperatureCelsius } from 'react-icons/tb';

const WeatherBody = (props) => {
  const { data } = props;
  return (
    <div className=" my-20">
      <div className=" flex justify-center items-center">
        <div className=" text-[144px] leading-none font-light">
          {parseInt(data.main.temp)}
        </div>
        <div className="text-4xl">
          <TbTemperatureCelsius />
        </div>
      </div>
      {/* wather desc */}
      <div className=" capitalize text-center">
        {data.weather[0].description}
      </div>
    </div>
  );
};

export default WeatherBody;
