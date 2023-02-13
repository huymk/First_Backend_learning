import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
import db from '../models';

let createNewUser = async(data) => {
    return new Promise (async(resolve,reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.firstName,
                address: data.lastName,
                phoneNumber: data.phoneNumber,
                gender: data.gender==='1' ? true:false,
                roleId: data.roleId,
            })
            resolve('successful creat a new user')
        }
        catch(e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve,reject) => {
        try {
            var hashPassword = await bcrypt.hashSync("B4c0/\/",salt);
            resolve(hashPassword);
        }catch(e){ 
            reject(e)
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.User.findAll({raw:true});
            resolve(user);
        }
        catch(e) { 
            reject(e)
        }
    } )
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
}