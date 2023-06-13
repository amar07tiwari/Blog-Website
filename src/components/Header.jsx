import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-3 border-b-1 border-b-gray-300 drop-shadow-md fixed z-10 top-0 inset-x-0 bg-[#6d44fc] text-white">
      <Link to={"/"}>
        <h2 className="font-bold text-2xl uppercase text-center">Tech Blogs</h2>
      </Link>
    </header>
  );
}
