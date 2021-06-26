import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction ){
    //Receber Token
    const authToken = request.headers.authorization
   
    //Validar se o token está preechido
    if(!authToken){
        return response.status(401).end()
    }
    
    const [, token] = authToken.split(" ")

    //Validar se é valido
    try{
        const { sub } = verify(token,"5321facf715e8c87bf6d900dc529dd50") as IPayLoad;
        
        //Recuperar informações do usuario
        request.user_id = sub;
        
        return next();
    }catch(err){
        return response.status(401).end()
    }    


    return next()
}