"use client";
import styles from "./invitation.module.scss";
import classNames from "classnames/bind";
import Days from "./days/days";
import Infomation from "./infomation";
import {
  groomInfo,
  brideInfo,
  invitationSection,
} from "@/app/configs/ui";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Invitation({ side = "groom" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentInfo = side === "groom" ? groomInfo : brideInfo;
  const activeDay =
    side === "groom"
      ? invitationSection.activeDayGroom
      : invitationSection.activeDayBride;
  const label = side === "groom" ? "NHÀ TRAI" : "NHÀ GÁI";

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Invitation</h2>
      <p className={cx("des")}>Đến dự đám cưới của chúng mình</p>
      <div className={cx("img-list")} ref={ref}>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img className={cx("img")} src={invitationSection[1]} />
        </div>
        <div className={cx("img-wrap", "center-img")}>
          <img className={cx("img")} src={invitationSection[0]} />
        </div>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(-80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s  ",
          }}
        >
          <img className={cx("img")} src={invitationSection[2]} />
        </div>
      </div>

      <Days title="Tháng 12" activeDay={activeDay} />
      <div className={cx("info-row")}>
        <Infomation
          label={label}
          img={currentInfo.img}
          title={currentInfo.title}
          date={currentInfo.date}
          time={currentInfo.time}
          address={currentInfo.address}
          street={currentInfo.street}
          phone={currentInfo.phone}
          posision={currentInfo.posision}
        />
      </div>
    </div>
  );
}

export default Invitation;
