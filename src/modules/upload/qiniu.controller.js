import httpStatus from 'http-status'
import app from '../../index'
import qiniu from 'qiniu'
/**
	 * @api {get} /api/v1/uptoken Returns a token for qiniu upload
	 * @apiDescription Returns a auth token for upload of images to qiniu
	 * @apiName getUptoken
	 * @apiGroup qiniu
	 *
	 *
	 * @apiSampleRequest /api/v1/uptoken
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "token": "oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44"
   *    }
	 */
export async function getUptoken(req,res,next)
{

  let currentTime=new Date().getTime()
  if (!app.locals.uptoken || currentTime-app.locals.uptoken.time > 1000*60*30) {
    var token = getToken();
    app.locals.uptoken = {
      token: token,
      time: new Date().getTime()
    }
  }
  res.status(httpStatus.OK).json({
    code:0,
    token:app.locals.uptoken.token
  })
}

function getToken()
{


var accessKey = '5rcDiVw5VVRIHHmaYr8wBYC83xZkiAXpxY6Jz7iH';
	var secretKey = 'BxU-HSsnnMTi7WZOSdfpy4n5JC43MaL978WSVWD8';
	var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

	var options = {
	  scope: 'bucket-connect',
	  returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)"}'
	};
	var putPolicy = new qiniu.rs.PutPolicy(options);
	return putPolicy.uploadToken(mac);

}
