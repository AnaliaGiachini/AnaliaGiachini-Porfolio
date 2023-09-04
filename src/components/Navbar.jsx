import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          .Analia Giachini.
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/14YlrMdm1_kD4VhDA28t4viB2GVM_l7x3/view?usp=drive_link" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;