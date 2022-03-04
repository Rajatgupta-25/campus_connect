import Image from "next/image"
import styles from "../../styles/PersonalInfo.module.css"
import { Images } from "../Images"

const PersonalInfo = () => {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <div className={styles["profile-container"]}>
                        <div className={styles["profile-top"]}>
                            <div className={styles["profile-back"]}></div>
                            <div className={styles["profile"]}>
                                <Image className={styles["profile-image"]} src={Images.profile} width={80} height={80} />
                                <p className={styles["user-name"]}>Rebekeh Mikelson</p>
                                <p className={styles["user-institute"]}>ABC Engineering College</p>
                            </div>
                        </div>
                        <div className={styles["collections"]}>
                            <p><span className="fas fa-award"></span> My Events</p>
                            <p><span className="fas fa-archive"></span> My Collections</p>
                            <p><span className="fas fa-users"></span> My Teams</p>
                            <p><span className="fas fa-code"></span> My Projects</p>
                            <p><span className="fas fa-bezier-curve"></span> My Connections</p>
                        </div>
                    </div>
                    <div className={styles["recent-activity"]}>
                        <div className={styles["entity"]}>
                            <div className={styles["entity-heading"]}>
                                <p>Recent Groups</p>
                            </div>
                            <p><span className="fas fa-tags"></span> Advance Java Mentors</p>
                            <p><span className="fas fa-tags"></span> C++ Concepts</p>
                            <p><span className="fas fa-tags"></span> Development Budies</p>
                            <p><span className="fas fa-tags"></span> Coders Park</p>
                        </div>
                        <div className={styles["entity"]}>
                            <div className={styles["entity-heading"]}>
                                <p>Recent Events</p>
                            </div>
                            <p><span className="fas fa-tags"></span> J2EE/JEE Webinar</p>
                            <p><span className="fas fa-tags"></span> Spring Boot Event</p>
                            <p><span className="fas fa-tags"></span> React Developers</p>
                            <p><span className="fas fa-tags"></span> Competitive Coders</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo