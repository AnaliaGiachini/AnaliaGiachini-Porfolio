import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          .Analia Giachini.
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1xIbUS9Gt3ePu-hr8fV7uPW61uccLZ8eC/view?usp=sharing" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;