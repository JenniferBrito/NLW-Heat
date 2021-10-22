import { Router } from "express";
import { AuthenticateUserContoller } from "./controller/AuthenticateUserController";
import { CreateMessageContoller } from "./controller/CreateMessageController";
import { GetLast3MessagesContoller } from "./controller/GetLast3MessagesController";
import { ProfileUserContoller } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserContoller().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageContoller().handle);

router.get("/messages/last3", new GetLast3MessagesContoller().handle);
router.get("/profile", ensureAuthenticated, new ProfileUserContoller().handle);

export {router};