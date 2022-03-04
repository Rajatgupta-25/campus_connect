import Image from "next/image"
import styles from "../../styles/Suggestions.module.css"
import { Images } from "../Images"

const Suggestions = () => {

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <Image src={Images.event} width={270} height={140} />
                    <div className={styles["event-list"]}>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Webinar on Spring Boot</p>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Start own Bussiness</p>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Advance Data Structure</p>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Find Internships Efficiently</p>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Developers Guide</p>
                    </div>
                </div>
                <div className={styles["container-item"]}>
                    <div className={styles["event-list"]}>
                        <p className={styles["explore-heading"]}>Project Guidence </p>
                        <p className={styles["guide"]}><span className="fas fa-file-alt"></span> Our Community Guide</p>
                        <p className={styles["guide"]}><span className="fas fa-file-code"></span> Coding Standards</p>
                        <p className={styles["guide"]}><span className="fas fa-code"></span> Share Project Ideas</p>
                    </div>
                    <div className={styles["event-list"]}>
                        <p className={styles["explore-heading"]}>Organize</p>
                        <p className={styles["guide"]}><span className="fas fa-users"></span> Project Team</p>
                        <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Events</p>
                        <p className={styles["guide"]}><span className="far fa-file-alt"></span> Notice</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions