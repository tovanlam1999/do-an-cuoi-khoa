import img from '../../img/logo_.jpg';
import { Nav, Navbar, NavItem, NavLink, Collapse, NavbarText, NavbarBrand, NavbarToggler } from 'reactstrap';
import './Header.css';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
export default function Header(args) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [value, setvalue] = useState('');

    return (
        <div className="main">
            <div className="header">
                <Navbar className="header_navbar">
                    <NavbarBrand className="header_logo" href="/">
                        {' '}
                        <img src={img} />
                    </NavbarBrand>

                    <Collapse navbar className="collapse_nav">
                        <Nav className="header-sreach">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={value}
                                onChange={(e) => setvalue(e.target.value)}
                            />

                            <div>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </Nav>

                    </Collapse>
                    <NavbarText className="header_right navbar">
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <span className="header_right-text">Đăng Nhập</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-heart"></i>
                            <span className="qualiti">0</span>
                            <span className="header_right-text">Yêu Thích</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className="qualiti">0</span>
                            <span className="header_right-text">Giỏ Hàng</span>
                        </div>
                    </NavbarText>
                    <div className='max-width-390'>
                        <div className="sreach-767px">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="sreach-767px">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <button className="header_navbar-menu" color="danger" onClick={toggle}>
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </Navbar>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                        <Row>
                            <Col className="col-6 moda-item">
                                <i class="fa-solid fa-bars"></i>
                                MENU
                            </Col>
                            <Col className="col-6 moda-item ">
                                <i class="fa-regular fa-user"></i>
                                LOGIN
                            </Col>
                        </Row>
                    </ModalHeader>
                    <ModalBody>
                        <ul className="header_submenu-list">
                            <li>
                                <a>TRANG CHỦ</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>SẢN PHẨM</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>BỘ SIÊU TẬP</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>BLOG</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li>
                                <a>LIÊN HỆ</a>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            <i class="fa-solid fa-xmark"></i>
                            CLOSE
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}
