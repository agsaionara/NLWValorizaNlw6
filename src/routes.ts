import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController} from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createCompliementController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();


router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated,listTagsController.handle)
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createCompliementController.handle);
router.get("/users/compliments/send", listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", listUserReceiveComplimentsController.handle )
router.get("/users/compliments/receive", listUserReceiveComplimentsController.handle )



export {router}