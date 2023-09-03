import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          .Analia Giachini.
        </Link>
      </div>
      <a href="https://docs.google.com/document/d/1wbqAjJ51aYu6AyFSfYi1-1tGXbIhn_mE/edit?usp=drive_link&ouid=109951169827961550356&rtpof" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;