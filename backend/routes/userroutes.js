const express = require('express');
const UserController=require('../controllers/usercontroller')
const router = require('express').Router()

router.get('/',UserController.getAllUsers)
router.post('/register',UserController.registerUser)
router.post('/login',UserController.Login)
router.get('/:id',UserController.getUSerById)
router.put('/:id',UserController.updateUserById)
router.delete('/:id',UserController.deleteUserById)



module.exports=router
