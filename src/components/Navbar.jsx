import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          .Analia Giachini.
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1jssKdD8bxJVJNSTRuaJT0M9glths6iKe/view?usp=drive_link" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;