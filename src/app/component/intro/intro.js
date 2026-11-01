import classNames from "classnames/bind";
import styles from "./intro.module.scss";
import images from "@/app/images";
import { motion } from "framer-motion";
import { useRef } from "react";
import { introSection, weddingInfo } from "@/app/configs/ui";
const cx = classNames.bind(styles);

function Intro({ handleOpen, name = "You" }) {
  const ref = useRef(null);

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("block-wrapper")}>
        <div className={cx("block")}>
          <div className={cx("left")}>
            <p className={cx("header-text")}>SAVE THE DATE</p>

            <div className={cx("img-box")}>
              <img className={cx("img")} src={introSection.mainImage} />
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("text-box")}>
              <p className={cx("date")}>{weddingInfo[0].time.full}</p>
              <div className={cx("name-box")}>
                <h3 className={cx("name")} style={{ marginTop: "-40px" }}>
                  {introSection.brideFirstLetter}
                </h3>
                <span className={cx("and")}></span>
                <h3 className={cx("name")} style={{ marginBottom: "-40px" }}>
                  {introSection.groomFirstLetter}
                </h3>
              </div>

              <div className={cx("dear-box")}>
                <p className={cx("dear")}>Thân mời : </p>
                <span className={cx("dear-name")}>{name}</span>
              </div>
            </div>

            <p className={cx("side-prompt")}>Bạn là khách mời của</p>
            <div className={cx("side-buttons")}>
              <motion.button
                className={cx("btn", "side-btn")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpen("groom")}
              >
                <span className={cx("heart-icon")}>
                  <img className={cx("icon")} src={images.invite.default.src} />
                </span>
                Nhà Trai
              </motion.button>
              <motion.button
                className={cx("btn", "side-btn")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpen("bride")}
              >
                <span className={cx("heart-icon")}>
                  <img className={cx("icon")} src={images.invite.default.src} />
                </span>
                Nhà Gái
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
