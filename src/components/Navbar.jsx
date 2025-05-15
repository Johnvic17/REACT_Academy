import styles from "./Navbar.module.css";

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : styles.disabled)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : styles.disabled)}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => (isActive ? styles.active : styles.disabled)}>
                    Contact
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar