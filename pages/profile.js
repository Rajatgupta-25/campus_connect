import Navbar from "../component/Navbar"
import PersonalInfo from "../component/profile/Personalinfo"
import Post from "../component/profile/Post"
import Suggestions from "../component/profile/Suggestions"
import styles from "../styles/Profile.module.css"
import { useState } from "react"

const Profile = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Navbar />
            <div className={`${styles["container"]} ${isModalOpen ? styles["modal-open"] : ''}`}>
                <div className={styles["container-item"]}>
                    <PersonalInfo />
                </div>
                <div className={styles["container-item"]}>
                    <Post setModalOpen={setModalOpen} />
                </div>
                <div className={styles["container-item"]}>
                    <Suggestions />
                </div>
            </div>
        </>
    )
}

export default Profile