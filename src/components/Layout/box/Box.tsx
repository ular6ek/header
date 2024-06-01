import scss from "./Box.module.scss";

const Box = () => {
  return (
    <div className={scss.Boxss}>
      <div className={scss.container}>
        <div className={scss.box}>
          <div className={scss.boxs}>
            <h1 className={scss.h1}>What Are You Waiting For?</h1>
            <button className={scss.btn}>Try Blinqpay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
