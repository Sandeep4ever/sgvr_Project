// import axios from "axios";

// // const getData = (url) => {
// //   let res;
// //   axios
// //     .get(url)
// //     .then((data) => {
// //       res = data;
// //     })
// //     .catch((e) => console.log(e));
// //   return res;
// // };

// const getData = async (url) => {
//   let res = await axios(url);
//   return res.data;
// };

// export const searchData = (url) => {
//   console.log("api related");
//   axios
//     .get(url)
//     .then((resp) => {
//       console.log("seacrhapi", resp.status);
//       if (resp.data && resp.data.length === 0) {
//         return resp.data;
//       } else if (resp.data.data && resp.data.data.length > 0) {
//         return resp.data;
//       } else {
//         throw Error("Some Error occured while Fetching");
//       }
//     })
//     .catch((err) => {
//       // if (err.message === "Network Error") {
//       //   toast.error("check your internet connection");
//       // } else if (err.response.status === 404) {
//       //   toast.error("Page Not Found");
//       // } else if (err.response.status === 202) {
//       //   toast.error("communities not found");
//       // } else if (err.response.status === 400) {
//       //   toast.error("Internal server Error");
//       // } else {
//       //   toast.error(err.response.message);
//       // }
//     });
// };

// export const Test = () => console.log("test done");
// export default getData;

export default class ApiRelated {
  Test = () => {
    console.log("test done");
  };
}
