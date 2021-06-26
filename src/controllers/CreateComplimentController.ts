import { Request, Response} from "express"
import { CreateComplimentService } from "../services/CreateComplimentService"



class CreateComplimentController{
    async handle(request: Request, response: Response){
        
        const {tag_id, user_receiver, massage} = request.body;
        const {user_id} = request;

        const createCompliementService = new CreateComplimentService();

        const compliment = await createCompliementService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            massage
        });

        return response.json(compliment);

    }

}

export {CreateComplimentController}