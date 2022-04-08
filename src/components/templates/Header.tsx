import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-black mb-16 h-24 pl-8 pt-5 w-full fixed z-10">
      <Link href="/">
        <p
          className="text-4xl font-bold text-pink-600 inline"
          style={{ fontFamily: "Cherry Swash " }}
        >
          KoshiOsaki&apos;s Portfolio
        </p>
      </Link>
      <p className="text-pink-600 inline ml-3">2022/04/05 更新</p>
    </div>
  );
};
