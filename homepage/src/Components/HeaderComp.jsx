import React from 'react';
import { Image, Navbar, Button} from 'react-bootstrap';


export default function HeaderComp() {
    return (
        <header>
            <Navbar className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><Image src="../assets/netflix_logo.png" alt="netflix_logo"></Image></a>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">My List</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center p-4">
                    <i id="SearchButton" className="bi bi-search text-light m-4" onclick="SearchBar()"></i>
                    <input type="text" placeholder="Type to search"></input>
                    <p className="text-light mt-4">KIDS</p>
                    <i className="bi bi-bell-fill text-light m-4"></i>
                    <Image src="../assets/avatar.png" alt="UserAvatar" id="AvatarImg"></Image>
                </div>
            </Navbar>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="d-flex align-items-center">
                        <h2 className="text-white ms-4">TV Shows</h2>
                        <div className="dropdown m-4 border border-1 border-white">
                            <button className="dropbtn">Genres</button>
                            <div className="dropdown-content">
                                <a href="#">Sci-Fi</a>
                                <a href="#">Horror</a>
                                <a href="#">Mistery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <div className="border border-1 border-white h-50 d-flex align-items-center">
                            <i className="bi bi-bar-chart-fill text-white m-3"></i>
                        </div>
                        <div className="border border-1 border-white h-50 d-flex align-items-center me-5">
                            <i className="bi bi-grid text-white m-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}