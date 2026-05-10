import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-end">
      <Link to="/" className="px-4 py-2">
        Home
      </Link>

      <Link to="/blog" className="px-4 py-2">
        Blog
      </Link>
    </nav>
  );
}
