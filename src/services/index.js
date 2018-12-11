import { ApiCall } from "../config/api";

let responseObjToBeSend = {
  message: ""
};

export const ApiCallForRegistration = params => {
  return new Promise((resolve, reject) => {
    let data = params.data;
    ApiCall(params.url, params.method, data)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "User registered successfully",
          data: responseJson
        };
        console.log("responseJson", responseJson);
        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForFetchPost = params => {
  return new Promise((resolve, reject) => {
    let data = params.data;
    ApiCall(params.url, params.method, data)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "Fetch posts successfully",
          data: responseJson
        };
        console.log("responseJson", responseJson);
        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};

export const ApiCallForLogin = params => {
  return new Promise((resolve, reject) => {
    let data = params.data;
    ApiCall(params.url, params.method, data)
      .then(responseJson => {
        responseObjToBeSend = {
          message: "User logged in successfully",
          data: responseJson
        };

        resolve(responseObjToBeSend);
      })
      .catch(err => {
        let error = err;
        responseObjToBeSend.message = error;
        reject(responseObjToBeSend);
      });
  });
};
