import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import logo from "../public/assets/campus-connect.png"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className={styles["nav-container"]}>
                <div className={styles["nav-item"]}>
                    <Image className={styles["nav-logo"]} src={logo} height={50} width={50} />
                </div>
                <input type="text" className={styles["search-box"]} placeholder="Search for institutes, connections..." />
                <div className={styles["nav-link"]}>
                    <div className={styles["icon"]}>
                        <Link href="/profile"><i className="fas fa-house-user"></i></Link>
                    </div>
                    <div className={styles["icon"]}>
                        <Link href="#" ><i className="fas fa-users"></i></Link>
                    </div>
                    <div className={styles["icon"]}>
                        <Link href="#" ><i className="fas fa-code"></i></Link>
                    </div>
                    <div className={styles["icon"]}>
                        <Link href="#"><i className="far fa-comment"></i></Link>
                    </div>
                    <div className={styles["icon"]}>
                        <Link href="#"><i className="far fa-bell"></i></Link>
                    </div>
                </div>
                <div className={styles["nav-user"]}>
                    <p className={styles["icon"]}><i className="far fa-user-circle"></i></p>
                </div>
            </div>
        </>
    )
}

export default Navbar