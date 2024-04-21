import  {Navbar}  from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
function Header(){
    return(
        <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/824/824565.png?w=740"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
Poke Store
      </Navbar.Brand>
    </Container>
  </Navbar>

    );
}
export default Header;