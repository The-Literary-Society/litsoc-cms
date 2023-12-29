const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full rounded-md text-white bg-red-900 mx-auto px-4 py-5 max-w-md my-[20px] text-center">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
