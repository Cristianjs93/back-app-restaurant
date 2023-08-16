import { Router } from "express";
import {
   getAllUsersHandler,
   getUserByIdHandler,
   getUserByEmailHandler,
   createUserHandler,
   updateUserHandler,
   deleteUserHandler
} from "./user.controller.ts";

// import { isAuthenticated } from '../../auth/auth.controller';
// import { hasRole } from '../../auth/auth.controller';

const router = Router();

router.get("/", getAllUsersHandler);
router.get("/user", getUserByIdHandler);
router.get("/user", getUserByEmailHandler);
router.post("/", createUserHandler);
router.put("/", updateUserHandler);
router.delete("/", deleteUserHandler);

export default router;
