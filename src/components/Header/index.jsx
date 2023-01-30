const Header = () => {
  return (
    <div className="flex justify-center border-b border-gray-500 ">
      <div className="w-full max-w-6xl flex font-rubik-bold justify-between items-center py-6">
        <div className="w-2/5">
          <h1 className="text-3xl font-bold">Beauty</h1>
        </div>
        <div className="flex text-base justify-start flex-grow space-x-8">
          <h2 className="">Home</h2>
          <h2 className="">About</h2>
          <h2 className="">Skills</h2>
          <h2 className="">Services</h2>
          <h2 className="">Experience</h2>
          <h2 className="">Contact</h2>
        </div>
      </div>
    </div>
  );
};
export default Header;
