const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});

const s3 = new AWS.S3();

//ToDO: repalace null with file object
uploadToBucket("bijo-test-sdk-s3",null).then((data)=>{
    console.log(data);
});;

function uploadToBucket(bucketName,files){
    const params={
        Bucket:bucketName,
        ACL:'public-read',
        Body:'test file upload to S3',
        Key:'test',
        ContentType:'text'
    }
    return new Promise((resolve,reject)=>{
        s3.putObject(params,(err,data)=>{
            if(err)reject(err);
            else resolve(data);
        });
    });
}