const Error = (props) => {
  const { errorMsg } = props;
  return (
    <div>
      {errorMsg && (
        <div className=" w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] absolute top-0 left-[38vw]   text-white  p-4 capitalize rounded-md">{`${errorMsg.response.data.message}`}</div>
      )}
    </div>
  );
};

export default Error;
