import { UserManager } from "../../dao/managers/userManager.js";
import { logger } from "../../utils/loger.js";

export async function usersController (req,res,next){

    const users = await UserManager.getUsers()
    // logger.log(`Se entro al controller web de users`,3)

    res.render('users', {
        pageTitle:'Users',
        hayUsers: users.length > 0,
        users
    })
}

export  function registerController (req,res,next){

    // logger.log(`Se entro al controller web de register`, 3)

    res.render('register', {
        pageTitle:'Register'
    })
}

export function loginController (req,res,next) {

    // logger.log(`Se entro al controller web de login`, 3)

    res.render('login', {
        pageTitle: 'Login'
    })
}

export function profileController (req,res,next){

    const user = req.credentials
    // logger.log(`Se entro al controller web de perfil`,3)

    res.render('profile', {
        pageTitle: 'Perfil',
        welcome: `Bienvenido a tu perfil ${user.first_name} `,
        name:user.first_name,
        lastName:user.last_name,
        email:user.email,
        age:user.age,
        rol:`Su rol es: ${user.rol}`,
        ifAdmin: user.rol === 'admin' 
    })
}
