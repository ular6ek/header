import scss from "./Lini.module.scss";
import img from "../../../assets/Lini.svg";
import left from "../../../assets/Left.svg";
import right from "../../../assets/Right.svg";
import chel_1 from "../../../assets/chel_1.svg";
import chel_2 from "../../../assets/chel_2.svg";
import chel_3 from "../../../assets/chel_3.svg";
import chel_4 from "../../../assets/chel_4.svg";
import chel_5 from "../../../assets/chel_5.svg";

const Lini = () => {
  return (
    <div className={scss.blues}>
      <div className={scss.container}>
        <img className={scss.lini} src={img} alt="" />
        <div className={scss.imagesLR}>
          <img
            className={scss.left}
            style={{ width: "150px" }}
            src={left}
            alt=""
          />
          <img
            className={scss.right}
            style={{ width: "150px" }}
            src={right}
            alt=""
          />
        </div>
        <div className={scss.obshiy}>
          <div className={scss.text_01}>
            <h1 className={scss.h1}>What Our Customer <br /> Are saying</h1>
            <p className={scss.pk}>Hac sem ut eget tellus diam convallis lacus a, interdum <br /> nulla sem lacus a, interdum nulla sem adipiscing inw</p>
          </div>
          <div className={scss.text_02}>
            <p className={scss.pkk}>Hac sem ut eget tellus diam convallis lacus a, interdum <br /> nulla sem lacus a, interdum nulla sem adipiscing inw</p>
            <h1 className={scss.h2}>Leo Maynus</h1>
            <h3 className={scss.h3}>CEO at Softpanda</h3>
          </div>
          <div className={scss.chelImages}>
            <img className={scss.chel_1} src={chel_1} alt="" />
            <img className={scss.chel_2} src={chel_2} alt="" />
            <img className={scss.chel_3} src={chel_3} alt="" />
            <img className={scss.chel_4} src={chel_4} alt="" />
            <img className={scss.chel_5} src={chel_5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lini;
