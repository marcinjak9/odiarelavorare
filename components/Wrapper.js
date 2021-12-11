import Announcement from "./Announcement";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Wrapper({ children }) {

  return (
    <>
      <Announcement />
      <Nav />
      {children}
      <Footer />
    </>
  )
}