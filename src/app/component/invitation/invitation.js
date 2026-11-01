"use client";
import styles from "./invitation.module.scss";
import classNames from "classnames/bind";
import Days from "./days/days";
import Infomation from "./infomation";
import {
  weddingInfo,
  invitationSection,
  weddingInfoB,
  weddingInfoG,
} from "@/app/configs/ui";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Invitation() {
  const wedInfo = weddingInfo[0];
  const b = weddingInfoB[0];
  const g = weddingInfoG[0];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      <Days title="Tháng 12" activeDay={invitationSection.activeDay} />
      <div className={cx("info-row")}>
        <Infomation
          label="NHÀ TRAI"
          img={g.img}
          title={g.title}
          date={g.date}
          time={g.time}
          address={g.address}
          street={g.street}
          phone={g.phone}
          posision={g.posision}
        />
        <Infomation
          label="NHÀ GÁI"
          img={b.img}
          title={b.title}
          date={b.date}
          time={b.time}
          address={b.address}
          street={b.street}
          phone={b.phone}
          posision={b.posision}
        />
      </div>
    </div>
  );
}

export default Invitation;
