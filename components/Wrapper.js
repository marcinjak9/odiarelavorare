import Announcement from "./Announcement";
import Nav from "./Nav";

export default function Wrapper({ children }) {

  return (
    <>
      <Announcement />
      <Nav />
      {children}
    </>
  )
}