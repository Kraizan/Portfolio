export default function Topbar() {
  return (
    <nav className="absolute p-8 lg:p-24 z-[1000] min-w-full flex justify-between items-center">
      <span className="flex items-center text-xl font-bold">
        <div className="text-[#18CCFC]">{`</`}</div>
        <h2 className="text-neutral-300">{`1SHAJ`}</h2>
        <div className="text-[#18CCFC]">{`>`}</div>
      </span>
      <div className="relative">
        <div className="p-1 rounded-full border-gradient">
          <img
            src="/1shaj.png"
            alt="vanshaj"
            className="w-12 rounded-full lg:w-20"
          />
        </div>
      </div>
    </nav>
  );
}
