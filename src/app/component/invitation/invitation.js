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
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Invitation() {
  const [side, setSide] = useState(null); // null | 'groom' | 'bride'

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentInfo = side === "groom" ? groomInfo : brideInfo;
  const activeDay =
    side === "groom"
      ? invitationSection.activeDayGroom
      : invitationSection.activeDayBride;

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

      {/* Toggle buttons: Nhà Trai / Nhà Gái */}
      <div className={cx("side-toggle")}>
        <span className={cx("side-label")}>Bạn là khách mời của</span>
        <div className={cx("side-buttons")}>
          <button
            className={cx("side-btn", { active: side === "groom" })}
            onClick={() => setSide("groom")}
          >
            Nhà Trai
          </button>
          <button
            className={cx("side-btn", { active: side === "bride" })}
            onClick={() => setSide("bride")}
          >
            Nhà Gái
          </button>
        </div>
      </div>

      {/* Only show calendar + info when a side is selected */}
      {side && (
        <>
          <Days title="Tháng 12" activeDay={activeDay} />
          <div className={cx("info-row")}>
            <Infomation
              label={side === "groom" ? "NHÀ TRAI" : "NHÀ GÁI"}
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
        </>
      )}
    </div>
  );
}

export default Invitation;
