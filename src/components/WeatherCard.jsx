import WeatherTop from './WeatherTop';
import WeatherBody from './WeatherBody';
import WeatherFooter from './WeatherFooter';
import Spinner from './Spinner';

const WeatherCard = (props) => {
  const { loading, icon, data, date } = props;
  return (
    <div className=" w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {/* Body Head */}
          <WeatherTop icon={icon} date={date} data={data} />
          {/* Body */}
          <WeatherBody data={data} />
          {/* Footer */}
          <WeatherFooter data={data} />
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
