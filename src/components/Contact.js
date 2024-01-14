const Contact = () => {
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="pb-4 font-bold text-3xl">Contact us</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Enter your message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
