import Image from "next/image"
import styles from "../../styles/Post.module.css"
import { Images } from "../Images"

const Post = () => {

    const displayPosts = () => {
        let post = []
        for (let i = 0; i < 10; i++) {
            post.push(
                <div className={styles["post-card"]}>
                    <div className={styles["post-card-header"]}>
                        <div className={styles["user-profile"]}>
                            <Image src={Images.userFemale} width={50} height={50} />
                        </div>
                        <div className={styles["user-profile-name"]}>
                            <p clasName={styles["name"]}>Hayeley Mikelson</p>
                            <p className={styles["user-institute"]}>XYZ Engineering College, Ghaziabad</p>
                            <p className={styles["post-time-before"]}><span className="fas fa-globe-asia"></span> 14h</p>
                        </div>
                    </div>
                    <div className={styles["post-card-body"]}>
                        <div className={styles["body-content"]}>
                            <p>In Java, are you still doing code iteratively? Give Stream API a go and you will never come back...</p>
                        </div>
                        <div className={styles["body-image"]}>
                            <Image src={Images.postImage} width={520} height={250} />
                        </div>
                    </div>
                    <div className={styles["division"]}>
                        <hr />
                    </div>
                    <div className={styles["post-card-footer"]}>
                        <div className={styles["post-footer-item"]}>
                            <p><span className="far fa-heart"></span> 21</p>
                        </div>
                        <div className={styles["post-footer-item"]}>
                            <p><span className="far fa-comment"></span> 7</p>
                        </div>
                        <div className={styles["post-footer-item"]}>
                            <p><span className="far fa-share-square"></span> </p>
                        </div>
                        <div className={styles["post-footer-item"]}>
                            <p><span className="fas fa-paper-plane"></span></p>
                        </div>
                        <div className={styles["post-footer-item"]}>
                            <p><span className="fas fa-bookmark"></span></p>
                        </div>
                    </div>
                </div>
            )
        }
        return post
    }

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <div className={styles["create-post"]}>
                        <div className={styles["profile"]}>
                            <Image className={styles["profile-pic"]} src={Images.profile} width={50} height={50} />
                        </div>
                        <div className={styles["create-post-link"]} onClick={() => setLgShow(true)} >
                            <p>What's in your mind, Rebekeh?</p>
                        </div>
                    </div>
                    <div className={styles["add-files"]}>
                        <div className={styles["files"]}>
                            <p><span className={`fas fa-image ${styles["image"]}`}></span> Image</p>
                        </div>
                        <div className={styles["files"]}>
                            <p><span className={`fas fa-video ${styles["video"]}`}></span> Video</p>
                        </div>
                        <div className={styles["files"]}>
                            <p><span className={`fas fa-award ${styles["achievements"]}`}></span> Achievements</p>
                        </div>
                        <div className={styles["files"]}>
                            <p><span className={`fas fa-laptop-code ${styles["project-ideas"]}`}></span> Project Ideas</p>
                        </div>
                    </div>
                </div>
                <div className={styles["post-item"]}>
                    {displayPosts()}
                </div>
            </div>
        </>
    )
}

export default Post