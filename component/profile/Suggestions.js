import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Suggestions.module.css"
import { Images } from "../Images"

const Suggestions = () => {

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <Image src={Images.event} width={270} height={140} />
                    <div className={styles["event-list"]}>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Webinar on Spring Boot</p>
                        </Link>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Start own Bussiness</p>
                        </Link>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Advance Data Structure</p>
                        </Link>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Find Internships Efficiently</p>
                        </Link>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Developers Guide</p>
                        </Link>
                    </div>
                </div>
                <div className={styles["container-item"]}>
                    <div className={styles["event-list"]}>
                        <p className={styles["explore-heading"]}>Guidence </p>
                        <p className={styles["guide"]}><span className="fas fa-file-alt"></span> Our Community Guide</p>
                        <p className={styles["guide"]}><span className="fas fa-suitcase"></span> Trades</p>
                        <p className={styles["guide"]}><span className="fas fa-tags"></span> Share Ideas</p>
                    </div>
                    <div className={styles["event-list"]}>
                        <p className={styles["explore-heading"]}>Organize</p>
                        <p className={styles["guide"]}><span className="fas fa-users"></span>Team</p>
                        <Link href="/events">
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Events</p>
                        </Link>
                        <p className={styles["guide"]}><span className="far fa-file-alt"></span> Notice</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions