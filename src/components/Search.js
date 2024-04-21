import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl"
import "../styles/Search.css"
function Search() {
    return (
        <div className="section">
        <h3 className="display-3"> Search a pokemon </h3>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </div>
    );
}
export default Search;