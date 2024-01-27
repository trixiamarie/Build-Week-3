import React from 'react'
import ProfileCardNavbar from "./ProfileCardNavbar";
import { Dropdown } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";

export default function DropdownCardNavbar(props) {
  return (
    <>
        <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="custom-dropdown-toggle"
            >
              <div
                md={1}
                className="text-center HoverIcon dropdown-toggle"
                style={{ borderRight: "1px solid #E8E8E8" }}
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={props.user.image}
                  alt="LinkedIn Logo"
                  style={{
                    borderRadius: "50%",
                    height: "1.5rem",
                    width: "1.5rem",
                  }}
                />
                {/* <FaUserCircle /> */}
                <p>
                  Tu <IoMdArrowDropdown />
                </p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <ProfileCardNavbar user={props.user} />
            </Dropdown.Menu>
          </Dropdown>

    </>
  )
}
