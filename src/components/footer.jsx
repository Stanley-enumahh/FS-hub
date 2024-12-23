export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center h-[50vh] bg-[#2d4a53] text-neutral-200">
      <div className="w-[80%] h-[80%] relative">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-xl">Logo</h1>
          <ul className="flex flex-row gap-6">
            <li className="cursor-pointer">blog</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Terms & policy</li>
          </ul>
        </div>
        <div className="w-full absolute bottom-0 pt-2 border-t border-t-white">
          <p>&copy; copyright @FSengage. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
