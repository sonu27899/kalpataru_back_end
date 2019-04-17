var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kalpatarufurniture.4444@gmail.com',
    pass: 'Kalpataru@123'
  }
});

var mailOptions = {
  from: 'KALPATARU FURNITURE',
  to: demo.to,
  subject:"Forget Password",
  text:"Your Password Is "+ demo.message +".KALPATARU FURNITURE is never ask your password.Thanks For Using Our Service.We hope that you will be connect to us for long time.THANK YOU!!!.Regards"
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;