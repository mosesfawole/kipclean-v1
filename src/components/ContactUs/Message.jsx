const Message = () => {
  return (
    <>
      <div className="w-full p-4 border-[1.5px] rounded-lg border-orange">
        <div className="text-center ">
          <h1 className="mb-12 text-xl font-bold md:text-4xl">Kip Clean</h1>
        </div>
        {/* form */}
        <form action="" className="flex flex-col gap-4 ">
          <p className="font-medium md:text-3xl mb-4 ">Send us a message</p>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="outline-orange w-full p-2 border rounded-lg font-Inter font-normal border-orange md:border-[#C1C1C1]"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter a valid email"
            className=" font-Inter  outline-orange p-2 border rounded-lg font-normal border-orange md:border-[#C1C1C1] "
          />
          <textarea
            type="text"
            name="message"
            placeholder="Type a message"
            className="outline-orange p-2 border rounded-lg font-Inter  h-[10rem] border-orange md:border-[#C1C1C1] resize-none "
          />
          <button className="p-2 text-white rounded-lg bg-orange">Send</button>
        </form>
      </div>
    </>
  );
};

export default Message;
