const {totp} = require("otplib");
const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const user = require("../Utilisateur/UserModele");



const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user :  "aoliviermarhegane@gmail.com",
        pass : "a2ndre000"
    }
});


//Génération de l'otp
const OTP = {
    
    generateSecretKey : function(){
        return speakeasy.generateSecret({length : 20}).base32;
    }, 
    
    generateOTP : async (req,res)=>{
        const{loginEmail}=req.body;
        const secretkey = speakeasy.generateSecret({length : 20}).base32;
        const token = speakeasy.totp({secret:secretkey,encoding:"base32"})
        const mailOption = {
            from : loginEmail,
            to : loginEmail,
            subject : "Votre OTP",
            text : `Votre OTP est : ${token}`
        };
        try{
            await transporter.sendMail(mailOption);
            res.status(200).json({message : "Code OTP envoyé avec succès"});
        }catch(error){
            res.status(500).json({error: error.message});
        }

    },
    verifyOTP : async(req,res)=>{
        const {loginEmail,token} = req.body;
        const verifie = speakeasy.totp.verify({secret : secretkey, encoding:"base32",token});
        if (verifie){
            res.status(200).json({message: "OTP valide"});
        }else{
            res.status(401).json({message:"Code OTP invalide"});
        }
    }
};



module.exports = OTP;