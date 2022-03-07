import Image from "next/image"
import { Images } from "../Images"
import styles from "../../styles/CreatePostModal.module.css"

const CreatePostModal = ({ setClosed }) => {
    return (
        <>
            <div className={styles["post-container"]}>
                <div className={styles["close-container"]}>
                    <span onClick={() => setClosed(true)} className={`${styles["close-button"]} fas fa-plus-circle`}></span>
                </div>
                <div className={styles["post-item"]}>
                    <div className={styles["profile-pic"]}>
                        <Image className={styles["profile-image"]} src={Images.profile} width={50} height={50} />
                    </div>
                    <div className={styles["user-name"]}>
                        <p>Rebekeh Mikelson</p>
                    </div>
                    <div className={styles["add-tag"]}>
                        <input type="text" placeholder="Add tag" />
                    </div>
                </div>
                <div className={styles["content"]}>
                    <textarea rows="6" cols="70" placeholder="What's in your Mind?"></textarea>
                </div>
                <div className={styles["add-files"]}>
                    <div className={styles["files"]}>
                        <p><span className={`fas fa-image ${styles["image"]}`}></span> Image</p>
                    </div>
                    <div className={styles["files"]}>
                        <p><span className={`fas fa-video ${styles["video"]}`}></span> Video</p>
                    </div>
                    <div className={styles["files"]}>
                        <p><span className={`fas fa-map-marker-alt ${styles["location"]}`}></span> Location</p>
                    </div>
                    <div className={styles["post"]}>
                        <button className={styles["post-button"]}>Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePostModal