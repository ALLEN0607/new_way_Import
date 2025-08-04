import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold">
          New Way Import
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
