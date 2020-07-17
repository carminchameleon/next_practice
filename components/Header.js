import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Home 🏠</a>
      </Link>
      <Link href="/about">
        <a>About 👍🏻</a>
      </Link>
      <Link href="/signin">
        <a>SignIn 🙂</a>
      </Link>
      <Link href="/board">
        <a>Board 🎃</a>
      </Link>
    </div>
  );
};

export default Header;
