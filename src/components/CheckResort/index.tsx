import styled from "./styled.module.css";

export const CheckResort = () => {
  return (
    <div className={styled.containerCheck}>
      <form className={styled.form}>
        <label className={styled.title}>Resort</label>
        <div className={styled.containerButtons}>
          <button className={styled.btn}>
            Check In<span>10 Aug 2023</span>
          </button>
          <button className={styled.btn}>
            Check Out <span>11 Aug 2023</span>
          </button>
        </div>
        {/* <label>
          <input type="month" name="" id="" />
        </label> */}
        <input
          className={styled.inputCheck}
          type="text"
          placeholder="1 room ,2 guests"
        />
        <button className={styled.btnCheck}>Check Availability</button>
      </form>
    </div>
  );
};
