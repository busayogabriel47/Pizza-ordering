import Image from "next/image"
import styles from "../src/styles/Navbar.module.css"
import React from 'react';
import Link from "next/link";


export default function Navbar() {
  return (
    <div className={styles.container}>
        
        <div className={styles.pizza_header}>
             <Image src="/images/pizza-header-img.png" alt="" width={200} height={100}/>
        </div>

        <nav className="navbar navbar-expand-lg">
            <div className={`${styles.navar_wrap} container-fluid`}>
                <a className="navbar-brand" href="#"><Image src="/images/pizza-logo.png" alt="" width={100} height={100}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                    <li className={`${styles.pizza_navitem} nav-item`}>
                        <Link className="nav-link" href="/">HOME</Link>
                    </li>
                    <li className={`${styles.pizza_navitem} nav-item`}>
                        <Link className="nav-link" href="/products">PRODUCTS</Link>
                    </li>
                    <li className={`${styles.pizza_navitem} nav-item`}>
                        <a className="nav-link" href="#">PAGES</a>
                    </li>
                    <li className={`${styles.pizza_navitem} nav-item`}>
                        <a className="nav-link">BlOG</a>
                    </li>
                    <li className={`${styles.pizza_navitem} nav-item`}>
                        <a className="nav-link">CONTACT</a>
                    </li>
                </ul>

                <div className={styles.cart}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                </div>
            </div>
        </nav>
    </div>

  )
}