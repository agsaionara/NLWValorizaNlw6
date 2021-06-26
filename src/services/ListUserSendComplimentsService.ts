import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsServices{
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id,
            },
        });

        //console.log(compliments)
        return compliments;
    }
}

export {ListUserSendComplimentsServices}