import { Nav } from "react-bootstrap";

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src="../images/Accord_Logo.png" />
                </a>
            </div>
        </Nav>
    );
}

export default Navbar;
