import styled from "styled-components";
import images from "../../../Assets/Images/Images";
import { useState, useEffect, useCallback } from "react";
import "./calender.css";

const MidPan = styled.div`
  height: 100%;
  padding: 34px 30px 28px 24px;
  background: #fcfcfc 0% 0% no-repeat padding-box;

  h1 {
    text-align: left;
    font-weight: 500;
    font-size: 22px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 21px;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    opacity: 1;
  }
`;

const Inputdiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 30px 0px 30px;

  h2 {
    display: block;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    margin-bottom: 31px;
  }

  label {
    display: block;
    text-align: left;
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0px;
    font-size: 14px;
    line-height: 20px;
    font-family: "Rubik", sans-serif;
    color: #202124;
    margin-bottom: 7px;
    font-weight: 400;
  }

  .save {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    color: #ffffff;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    width: 151px;
    height: 43px;
    border: none;
    margin-right: 0px;
    margin-left: auto;
  }
`;

const Timing = styled.input`
  width: 208px;
  height: 43px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal normal 14px/20px Rubik;
  letter-spacing: 0px;
  color: #d3d3d3;
  text-transform: capitalize;
  margin-bottom: 20px;
  border: none;
  :focus {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #cea51e;
  }
`;

// const Area=styled.textarea`
// margin-bottom: 20px;
// height: 93px;
// width: 435px;
// background: #F5F5F5 0% 0% no-repeat padding-box;
// border-radius: 4px;
// border: none;
// :focus{
//     background: #FFFFFF 0% 0% no-repeat padding-box;
// border: 1px solid #CEA51E;
// }
// `

// const ContainerDiv=styled.div`
// display: flex;
// flex-direction: row;
// justify-content: flex-start;
// `

// const Calander=styled.div`
// height: 600px;
// width: 600px;
// padding: 35px 25px 36px 25px;
// background: #FFFFFF 0% 0% no-repeat padding-box;
// box-shadow: 0px 0px 10px #0000000D;
// border-radius: 4px;
// `

// const CalanderBuild=styled.div`
// width:545px;
// height:450px;
// `

// const DateDiv=styled.div`
// width: 100%;
// margin-bottom: 31px;

// select{
//     -moz-appearance: none;
//   -webkit-appearance: none;
//   background-color: white;
//   border: none;
//   :focus {
//     background: #ffffff 0% 0% no-repeat padding-box;
//     border: 1px solid #cea51e;
//   }
// `;

const Area = styled.textarea`
  margin-bottom: 20px;
  height: 93px;
  width: 435px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  :focus {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #cea51e;
  }
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Calander = styled.div`
  height: 580px;
  width: 600px;
  padding: 35px 25px 36px 25px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #0000000d;
  border-radius: 4px;
`;

const CalanderBuild = styled.div`
  width: 545px;
  height: 450px;
`;

const DateDiv = styled.div`
  width: 100%;
  margin-bottom: 31px;

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: white;
    border: none;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
  }

  img {
    margin-right: 0px;
    margin-left: 20.26px;
  }

  .rotate {
    transform: rotate(180deg);
    margin-right: 20.26px;
    margin-left: 0px;
  }

  p {
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    display: inline-block;
    margin-right: 10px;
  }
`;

const Bookings = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 28px;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
  }

  div {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 3px #00000029;
    border-radius: 4px;
    border-left: solid #d8ae25 5px;
    width: 435px;
    height: 170px;
    padding: 11px 10px;
    position: relative;
  }

  h4 {
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    letter-spacing: 0px;
    color: #202124;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 38px;
    width: 76px;
    border: none;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-family: "Poppins", sans-serif;
    font-size: 500;
    letter-spacing: 0px;
    color: #d8ae25;
    background: #d8ae251a 0% 0% no-repeat padding-box;
    border-radius: 8px;
  }

  h4 {
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #202124;
    margin-bottom: 9px;
  }

  .timing {
    text-align: left;
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #02a343;
    margin-bottom: 12px;
  }
  p {
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    letter-spacing: 0px;
    color: #a0a0a0;
    margin-bottom: 13px;
  }
`;

const RadioDiv = styled.div`
  height: 50px;
  display: block;

  label {
    display: inline-block;
    margin-right: 10px;
  }
  input {
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;

const Scheduler = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [monthlist] = useState([
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [calendar, setCalendar] = useState([]);
  const [showYear, setShowYear] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [yearlist, setYearlist] = useState([]);
  const [check, setcheck] = useState(true);

  const leapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const makeCalendar = useCallback(() => {
    let cal = [];
    console.log(`${year}-${month + 1}-01`);
    const day = new Date(`${year}-${month + 1}-01`).getDay();
    console.log(year, month, day);
    let counter = 1;
    let space = [];
    for (let i = 0; i < day; i++) {
      space.push(" ");
    }
    for (let i = day; i < 7; i++) {
      space.push(counter);
      counter++;
    }
    let lastdate = 0;
    cal.push(space);
    if (
      month === 0 ||
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 9 ||
      month === 11
    ) {
      lastdate = 31;
    } else if (month === 1) {
      if (leapYear(year)) {
        lastdate = 29;
      } else {
        lastdate = 28;
      }
    } else {
      lastdate = 30;
    }
    space = [];
    let flag = 0;
    for (let i = counter; i < lastdate + 1; i++) {
      space.push(i);
      flag++;
      if (flag === 7) {
        cal.push(space);
        space = [];
        flag = 0;
      }
    }
    if (space.length > 0) {
      cal.push(space);
    }
    setCalendar(cal);
  }, [year, month]);

  const createYear = () => {
    let temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push(2022 + i);
    }
    setYearlist(temp);
  };

  useEffect(() => {
    makeCalendar();
    createYear();
  }, [makeCalendar]);

  const increaseMonth = () => {
    const newmonth = month + 1;
    if (newmonth > 11) {
      setYear(year + 1);
      setMonth(0);
      // makeCalendar();
      return;
    }
    setMonth(newmonth);
    // makeCalendar();
  };

  const decreaseMonth = () => {
    const newmonth = month - 1;
    if (newmonth < 0) {
      setYear(year - 1);
      setMonth(11);
      // makeCalendar();
      return;
    }
    setMonth(newmonth);
    // makeCalendar();
  };

  const selectYear = (e) => {
    setYear(parseInt(e.target.id));
    setShowYear(false);
  };

  return (
    <MidPan>
      <h1>Scheduler</h1>
      <ContainerDiv>
        <Calander>
          <DateDiv>
            <img
              className="rotate"
              src={images.arrowicon}
              onClick={decreaseMonth}
              alt="arrow_img"
            />
            <p
              onClick={() => {
                setShowMonth(true);
              }}
            >
              {monthlist[month]}
            </p>
            <p
              onClick={() => {
                setShowYear(true);
              }}
            >
              {year}
            </p>
            <img
              src={images.arrowicon}
              onClick={increaseMonth}
              alt="arrow_icon"
            />
            <div className="calendar-card">
              <div className="calender-card calendar-head">
                <div className="color-sign">
                  <div className="box red"></div>
                </div>
              </div>
              <div className="calendar-day">
                <table>
                  <thead>
                    <tr>
                      <td>Sun</td>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                      <td>Sat</td>
                    </tr>
                  </thead>
                  <tbody>
                    {calendar &&
                      calendar.map((item, i) => {
                        return (
                          <tr key={i}>
                            {item.map((value, k) => {
                              return <td key={k}>{value}</td>;
                            })}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </DateDiv>
          <CalanderBuild></CalanderBuild>
        </Calander>
        <Inputdiv>
          <h2>Add Activity</h2>
          <RadioDiv>
            <label htmlFor="single">Single day</label>
            <input
              type="radio"
              id="single"
              name="days"
              value="single"
              onChange={(e) =>
                setcheck(e.target.value === "single" ? true : false)
              }
            />
            <label htmlFor="multiple days">Multiple days</label>
            <input
              type="radio"
              id="multiple days"
              name="days"
              value="multi"
              onChange={(e) =>
                setcheck(e.target.value === "single" ? true : false)
              }
            />
          </RadioDiv>
          {check ? (
            <>
              {" "}
              <label htmlFor="timing">Timing</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Timing type="time" placeholder="From" />
                <Timing type="time" placeholder="To" />
              </div>
            </>
          ) : (
            <>
              <label htmlFor="timing">Dates</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Timing type="date" placeholder="From" />
                <Timing type="date" placeholder="To" />
              </div>
            </>
          )}
          <label htmlFor="timing">Discription</label>
          <Area />
          <button className="save">Save</button>
          <Bookings>
            <h3>Bookings</h3>
            <div>
              <h4>Timing</h4>
              <p className="timing">8:15 AM - 12:00 PM</p>
              <h4>Discription</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button>Edit</button>
            </div>
          </Bookings>
        </Inputdiv>
      </ContainerDiv>
      {showYear && (
        <div className="showyear" onClick={() => setShowYear(false)}>
          <div className="year">
            {yearlist.map((item, i) => {
              return (
                <p id={item} onClick={selectYear}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      )}
      {showMonth && (
        <div className="showyear" onClick={() => setShowMonth(false)}>
          <div className="year">
            {monthlist.map((item, i) => {
              return (
                <p
                  id={i}
                  onClick={(e) => {
                    setMonth(e.target.id);
                    setShowMonth(false);
                  }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </MidPan>
  );
};

export default Scheduler;
