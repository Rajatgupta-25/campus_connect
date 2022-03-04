import Navbar from "../component/Navbar"
import PersonalInfo from "../component/profile/Personalinfo"
import Post from "../component/profile/Post"
import Suggestions from "../component/profile/Suggestions"
import styles from "../styles/Profile.module.css"

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <PersonalInfo />
                </div>
                <div className={styles["container-item"]}>
                    <Post />
                </div>
                <div className={styles["container-item"]}>
                    <Suggestions />
                </div>
            </div>
        </>
    )
}

export default Profile