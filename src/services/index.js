import { ApiCall } from "../config/api";
import { posts, returnSinglePost } from "./dummyBackend";

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

export const ApiCallForFetchPosts = params => {
  return new Promise((resolve, reject) => {
    const response = {
      success: true,
      data: posts
    };
    const errorResponse = {
      error: "Unauthorized"
    };
    if (params.header !== null) {
      resolve(response);
    } else {
      reject(errorResponse);
    }

    // ApiCall(params.url, params.method, data)
    //   .then(responseJson => {
    //     responseObjToBeSend = {
    //       message: "Fetch posts successfully",
    //       data: responseJson
    //     };
    //     console.log("responseJson", responseJson);

    //   })
    //   .catch(err => {
    //     let error = err;
    //     responseObjToBeSend.message = error;

    //   });
  });
};

export const ApiCallForFetchPost = (params, body) => {
  return new Promise((resolve, reject) => {
    const backendData = returnSinglePost(posts, body.id);
    const response = {
      success: true,
      data: backendData
    };
    const errorResponse = {
      error: "Unauthorized"
    };
    console.log("response in fetch post", response);
    if (params.header !== null) {
      resolve(response);
    } else {
      reject(errorResponse);
    }

    // ApiCall(params.url, params.method, data)
    //   .then(responseJson => {
    //     responseObjToBeSend = {
    //       message: "Fetch posts successfully",
    //       data: responseJson
    //     };
    //     console.log("responseJson", responseJson);

    //   })
    //   .catch(err => {
    //     let error = err;
    //     responseObjToBeSend.message = error;

    //   });
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
