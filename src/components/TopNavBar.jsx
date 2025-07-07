import Link from "next/link";

const Links = [
  { name: "Guitar", href: "/" },
  { name: "Cart", href: "/" },
];

const TopNavBar = () => {
  return (
    <nav>
      <div>
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>

        <ul>
          {Links.map((link) => (
            <li key={link.name} className="inline-block mr-4">
              <Link href={link.href} className="text-lg">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;

