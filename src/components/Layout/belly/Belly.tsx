import scss from "./Belly.module.scss";
import vector3 from "../../../assets/Vector 3.svg";
import vector4 from "../../../assets/vector.4.svg";
import icon_1 from "../../../assets/block_icon1.svg";
import icon_2 from "../../../assets/block_icon2.svg";
import icon_3 from "../../../assets/block_icon 3.svg";
import icon_4 from "../../../assets/block_icon 4.svg";
import logo_1 from "../../../assets/logo_1.svg";
import logo_2 from "../../../assets/logo_2.svg";
import logo_3 from "../../../assets/logo_3.svg";
import logo_4 from "../../../assets/logo_4.svg";
import logo_5 from "../../../assets/logo_2.svg";
import ipad from "../../../assets/image ipad.svg";
import Mask from "../../../assets/Mask Group 2000.svg";
import group from "../../../assets/Group 2000.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Belly = () => {
  return (
    <div className={scss.belly}>
      <div className={scss.container}>
        <div className={scss.textBelly}>
          <h1 className={scss.h10}>
            Make & Share Payments <br /> With Community
          </h1>
          <p className={scss.P}>
            Hac sem ut eget tellus diam convallis lacus a, interdum <br /> nulla
            sem adipiscing inw
          </p>
          <button className={scss.more}>
            Learn more <FaArrowRightLong />
          </button>
        </div>
        <div className={scss.blocks}>
          <div className={scss.block_1}>
            <img src={icon_1} alt="" />
            <h1 className={scss.h_1}>Easy Access</h1>
            <p className={scss.p_1}>
              Now track all of your transaction easily.
            </p>
          </div>
          <div className={scss.block_2}>
            <img src={icon_2} alt="" />
            <h1 className={scss.h_2}>Cashflow Visiblity</h1>
            <p className={scss.p_2}>
              Now track all of your transaction easily.
            </p>
          </div>
          <div className={scss.block_3}>
            <img src={icon_3} alt="" />
            <h1 className={scss.h_3}>Use You Connect</h1>
            <p className={scss.p_3}>
              Now track all of your transaction easily.
            </p>
          </div>
          <div className={scss.block_4}>
            <img src={icon_4} alt="" />
            <h1 className={scss.h_4}>Manage Invoicing</h1>
            <p className={scss.p_4}>
              Now track all of your transaction easily.
            </p>
          </div>
        </div>
        <div className={scss.fam}>
          <div className={scss.logotip}>
            <img src={logo_1} alt="" />
            <img src={logo_2} alt="" />
            <img src={logo_3} alt="" />
            <img src={logo_4} alt="" />
            <img src={logo_5} alt="" />
          </div>
        </div>
        <div className={scss.Ipad_1}>
          <div className={scss.position}>
            <div className={scss.tetx}>
              <span className={scss.spans}>CREDIT CARD</span>
              <h1 className={scss.hs}>
                Payment <br /> Gets Easier
              </h1>
              <p className={scss.P_2}>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                nulla sem adipiscing inw
              </p>
              <button className={scss.learn}>
                Learn more <FaArrowRightLong />
              </button>
            </div>

            <div>
              <img src={ipad} alt="" />
            </div>
          </div>
        </div>
        <div className={scss.Ipad_2}>
          <div className={scss.position_2}>
            <div>
              <img src={group} alt="" />
            </div>
            <div className={scss.tetx_2}>
              <span className={scss.spanss}>MOBILE TRANSACTION</span>
              <h1 className={scss.hss}>
                Smart Mobile <br />
                Banking
              </h1>
              <p className={scss.P_3}>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                nulla sem adipiscing inw
              </p>
              <button className={scss.learn_2}>
                Learn more <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div className={scss.Ipad_3}>
          <div className={scss.position_3}>
            <div className={scss.tetx_3}>
              <span className={scss.spansss}>SECURE TRANSACTION</span>
              <h1 className={scss.hsss}>
                Safe Yours <br />
                Savings
              </h1>
              <p className={scss.P_4}>
                Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                nulla sem adipiscing inw
              </p>
              <button className={scss.learn_3}>
                Learn more <FaArrowRightLong />
              </button>
            </div>

            <div>
              <img src={Mask} alt="" />
            </div>
          </div>
        </div>
        <div className={scss.content_1}>
          <img className={scss.vector4} src={vector4} alt="" />
          <img className={scss.vector3} src={vector3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Belly;
