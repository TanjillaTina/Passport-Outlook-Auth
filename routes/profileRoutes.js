var express = require('express');
var router = express.Router();


const TodoModel=require('../models/todo');
const UserModel=require('../models/user-model');
const ProfileController=require('../controllers/profile');


router.get('/',ProfileController.authCheck,ProfileController.profilePage);
router.post('/todos',ProfileController.authCheck,ProfileController.insertTask);
router.post('/todos/completed',ProfileController.changeTaskStatus);
router.post('/todos/delete',ProfileController.DeleteTask);

/* GET users listing. */


module.exports = router;
