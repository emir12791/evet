import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Nav, Offcanvas } from "react-bootstrap";
import { AiFillLock, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./user-menu.scss";
import { logout } from "../../store/slices/auth-slice";
import { removeFromLocalStorage } from "../../helpers/functions/encrypted-storage";
import { swalConfirm } from "../../helpers/functions/swal";
import { config } from "../../helpers/config";

const UserMenu = () => {
  const { isUserLogin, user, menu } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleOpen = () => setShowMenu(true);


  const handleMenuClick = (link) => {
    navigate(link);
    handleClose();
  };

  const handleLogout = async () => { 

    const resp = await swalConfirm("Are you sure to logout?", "");
    if(!resp.isConfirmed) return;

    dispatch(logout());
    removeFromLocalStorage("token");
    navigate("/");

  }

  
  return (
    <>
      <div className="user-menu">
        {isUserLogin ? (
          <>
            <Button variant="primary" size="sm" onClick={handleOpen}>
              {user.name} {user?.surname}<AiOutlineMenu />
            </Button>

            <Offcanvas className="of" show={showMenu} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                <Nav.Link as={Link} to="/">
              <Image src="/images/logo/logo.png" className="img-fluid" alt={config.project.name}/>
            </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Dashboard
                  </Nav.Link>

                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Books
                  </Nav.Link>

                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Authors
                  </Nav.Link>
                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Publishers
                  </Nav.Link>
                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Categories
                  </Nav.Link>
                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Users
                  </Nav.Link>
                  <Nav.Link onClick={() => handleMenuClick("/contact")}>
                    Reports
                  </Nav.Link>
                  <Nav.Link onClick={() => handleMenuClick("/dashboard")}>
                    Web Site
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        ) : (
          <Link to="/login">
            Login | Register
          </Link>
        )}
      </div>
    </>
  );
};

export default UserMenu;
