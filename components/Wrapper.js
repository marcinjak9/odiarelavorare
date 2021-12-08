import Nav from "./Nav";

export default function Wrapper({ children }) {

  return (
    <>
      <Nav />
      {children}
    </>
  )
}