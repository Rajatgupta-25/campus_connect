import Image from "next/image"
import styles from "../../styles/Event.module.css"
import { Images } from "../../component/Images"
import Navbar from "../../component/Navbar"
import { useState } from "react"
import CreateEvent from "../../component/events/CreateEvent"

const Events = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [closed, setClosed] = useState(false)

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
            <Navbar />
            <div className={styles["container-event"]}>
                <div className={styles["container-event-item"]}>
                    <div className={styles["container-item-inner"]}>
                        <div className={styles["container-header"]}>
                            <p>Events</p>
                            <span onClick={() => {
                                setIsClicked(true)
                            }} className={`${styles["create"]} fas fa-folder-plus`}></span>
                        </div>
                    </div>
                    <div className={styles["container-item-inner"]}>
                        {displayAttendedEvent()}
                    </div>
                </div>
                <div className={styles["suggestion"]}>
                    <div className={styles["container-item"]}>
                        <Image src={Images.event} width={270} height={140} />
                        <div className={styles["event-list"]}>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Webinar on Spring Boot</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Start own Bussiness</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Advance Data Structure</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Find Internships Efficiently</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Developers Guide</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Webinar on Spring Boot</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Start own Bussiness</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Advance Data Structure</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Find Internships Efficiently</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Developers Guide</p>
                            <p className={styles["guide"]}><span className="far fa-calendar-check"></span> Webinar on Spring Boot</p>
                            <p className={styles["see-more"]}>See More</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                isClicked && !closed && <CreateEvent setClosed={setClosed} />
            }
            {
                isClicked && closed && (
                    setIsClicked(false),
                    setClosed(false)
                )
            }
        </>
    )
}

export default Events