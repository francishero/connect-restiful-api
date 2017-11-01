import request from "request";
import config from "./config";

const SNS_URL = "https://api.weixin.qq.com/sns/jscode2session";

exports.getAuthCode = function(code) {
  return new Promise((resolve, reject) =>
    request.get(
      {
        url: SNS_URL,
        qs: {
          appid: config.app_id,
          secret: config.app_secret,
          grant_type: "authorization_code",
          js_code: code
        },
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject(error);
          return;
        }
        console.log("error", body);
        if (body.errcode) {
          return resolve({ errmsg: body.errmsg });
        }
        resolve(body);
      }
    )
  );
};
