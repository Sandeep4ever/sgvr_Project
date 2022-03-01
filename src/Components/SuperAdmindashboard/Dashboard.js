import styled from "styled-components";
import Bargraph from "./Bargraph";
import Ongraph from "./onboardgraph";

const MainSection = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 26px 60px 80px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const Carddiv = styled.div`
  display: flex;
  width: 251px;
  height: 85px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;

  hr {
    width: 6px;
    height: 84px;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: #dfb93e 0% 0% no-repeat padding-box;
    border: none;
    margin-right: 10px;
  }
  article {
    width: 100%;
    padding: 13px 14px 13px 18px;
    p {
      font: normal normal normal 15px/23px Poppins;
      color: #7786aa;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      span {
        margin-top: 5px;
        font: normal normal 500 24px/35px Poppins;
        color: #000000;
      }
      figure {
        display: flex;
        flex-direction: row;
        align-items: baseline;

        .p1 {
          margin-left: 1.5px;
          width: 5px;
          height: 7px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
        .p2 {
          margin-left: 1.5px;
          width: 5px;
          height: 17px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
        .p3 {
          margin-left: 1.5px;

          width: 5px;
          height: 12px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
      }
    }
  }
`;
const WrapCard = styled.div`
  margin-bottom: 22px;
  display: flex;
  gap: 20px;
`;

const BarHeading = styled.div`
  width: 100%;
  margin-bottom: 30px;
  h1 {
    text-align: left;
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: 0.32px;
    color: #203459;
    font-family: "Roboto", sans-serif;
  }

  p {
    text-align: left;
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #9ea5bd;
    font-family: "Poppins", sans-serif;
  }
`;
const BarChart = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;
  padding: 22px;
  margin-bottom: 25.6px;
`;

const Onboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Graphdiv = styled.div`
  width: 60%;

  h4 {
    text-align: left;
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: 0.32px;
    color: #203459;
    font-family: "Roboto", sans-serif;
    margin: 22px 0px;
    margin-bottom: 30px;
    margin-left: 22px;
  }
`;

const Dashboard = () => {
  let data = [
    {
      title: "No.of Users",
      users: 25000,
    },
    { title: "No.of Subscription", users: 15000 },
    { title: "No.of Vendors", users: 10000 },
    { title: "No.of Users", users: 25000 },
  ];

  return (
    <MainSection>
      <WrapCard>
        {data.map((item, index) => (
          <Carddiv key={index}>
            <hr></hr>
            <article>
              <p>{item.title}</p>
              <div>
                <span>{item.users}</span>
                <figure>
                  <div className="p1"></div>
                  <div className="p2"></div>
                  <div className="p3"></div>
                </figure>
              </div>
            </article>
          </Carddiv>
        ))}
      </WrapCard>
      <BarChart>
        <BarHeading style={{ marginBottom: "25.6px" }}>
          <h1>Activated and Deactivated profiles</h1>
          <p>Lorem ipsum dolor sit amet adipiscing</p>
        </BarHeading>
        <div>
          <Bargraph />
        </div>
      </BarChart>
      <Onboard>
        <Graphdiv>
          <h4>On boarding list</h4>
          <div style={{ marginLeft: "22px", backgroundColor: "#FFFFFF" }}>
            <Ongraph />
          </div>
        </Graphdiv>
      </Onboard>
    </MainSection>
  );
};

export default Dashboard;
