import Image from "next/image"
import styles from "../../styles/Event.module.css"
import { Images } from "../../component/Images"
const Events = () => {

    const displayAttendedEvent = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(
                <>
                    <hr className={styles["division"]} />
                    <div className={styles["event-card"]}>
                        <div className={styles["event-card-image"]}>
                            <Image src={Images.postImage} width={50} height={50} />
                        </div>
                        <div className={styles["event-card-title"]}>
                            <p clasName={styles["title"]}>Free Azure Certification & Training (by Ramesh Kumar Shri Raghunandas)</p>
                            <p className={styles["description"]}>Fri, Aug 20 - Wed, Aug 20</p>
                            <p className={styles["platform"]}><span className="fas fa-video"></span> Online</p>
                        </div>
                    </div>
                </>
            )
        }
        return list
    }

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container-item"]}>
                    <div className={styles["container-header"]}>
                        <p>Events</p>
                        <p>Create</p>
                    </div>
                </div>
                <div className={styles["container-item"]}>
                    {displayAttendedEvent()}
                </div>
            </div>
        </>
    )
}

export default Events