import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import { Nav, Badge, Image, Button, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from "../assets/img/icons/rinor 1.png";
import { Icon } from '@iconify/react';
import {navigationData} from "../CustomComponents/pageArray";

const Sidebar = (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = ({ eventKey, title, icon, children = [] }) => {
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><Icon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children.map((child, index) => (
                <NavItem key={index} {...child} />
              ))}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = ({ title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" }) => {
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between border-0" : "border-0";
    const navItemClassName = link === pathname ? "active no-border" : "no-border"; // Remove the 'border-0' class
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
        <Nav.Item className={navItemClassName + " border-0"} onClick={() => setShow(false)}>
            <Nav.Link {...linkProps} target={target} className={classNames}>
                <span>
                    {icon ? <span className="sidebar-icon icon-size-24px border-0"><Icon icon={icon} /> </span> : null}
                    {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon border-0" /> : null}
                    <span className="sidebar-text border-0">{title}</span>
                </span>
                {badgeText ? (
                    <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
                ) : null}
            </Nav.Link>
        </Nav.Item>
    );
};


  return (
    <>
   

      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block `}style={{ backgroundColor: '#004EDA', color: '#FFF' }}>
            <div className="d-flex justify-content-center">
            <Image src={Logo1}/>
            </div>
          <div className="sidebar-inner px-1 pt-3" style={{ overflow: "hidden" }}>
            <Nav className="flex-column pt-3 pt-md-0" >
              {navigationData.map((item, index) => (
                item.children ? (
                  <CollapsableNavItem key={index} {...item} />
                ) : (
                  <NavItem key={index} {...item} />
                )
              ))}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};

export default Sidebar;
