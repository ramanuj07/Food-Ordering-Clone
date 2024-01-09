import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-600">
        Oops, an error occurred
      </h1>
      <h2 className="text-xl text-gray-800 mb-4">Something went wrong</h2>
      <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md mb-4">
        <span className="font-semibold">{error.status}</span> {error.statusText}
      </div>
      <p className="text-gray-600">
        Please try again later or contact support.
      </p>
      {/* Add additional information or links as needed */}
    </div>
  );
};

export default Error;
