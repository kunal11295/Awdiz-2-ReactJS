// import Users from "../Modal/userModal.js"
// import bcrypt from "bcrypt"

// export const checksForRegister = async (req,res,next)=>{
//     try{
//         const {name,email,password,confirmpassword} = req.body;
//         if(name && email && password && confirmpassword){
//           if(password.length < 5 || confirmpassword.length < 5)
//         //   return res.status(400).json({message:"Password must include atleast 5 characters."})
//           if(password != confirmpassword)
//         //   return res.status(400).json({message:"Password and confirm password not matched."})
//           next();
//         }else{
//             return res.status(400).json({message:"All the fields are required."})
//         }
//     }catch(err){
//         return res.status(400).json({message:"Internal server error."})
//     }
// }

// export const checksForLogin =async(req,res,next)=>{
//     try{
//         const{email,password}=req.body;
//         if(email && password){
//             const existingUser = await Users.findOne({email}).exec();
//             if(!existingUser)return res.status(404).json({message:"User by this email not found."})

//             const comparePassword = await bcrypt.compare(password,existingUser.password)
//             if(!comparePassword)return res.status(400).json({message:"Credientials not matched."})
//             next();
//         }else{
//             return res.status(400).json({message:"All the fields are required."})
//         }
//     }catch(err){
//         return res.status(400).json({message:"Internal server error.ll"})
//     }
// }