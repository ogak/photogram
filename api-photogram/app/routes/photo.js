const express = require('express');
const router = express.Router();
const Photo = require('../model/Photo');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

/**
 * @swagger
 * 
 * /v1/api/photo:
 *  get:
 *      description: Get all photogram
 *      responses:
 *          200:
 *              - application/json
 *          401:
 *              description: Something went wrong
 *          500: 
 *              description: Internal Server Error
 *  
 */


/**
 * @swagger
 * 
 * /v1/api/photo/add_photo:
 *  post:
 *      description: input data
 *      responses:
 *          200:
 *              - application/json
 *          401:
 *              description: Something went wrong
 *          500: 
 *              description: Internal Server Error
 *  
 */



router.post('/add_photo', async (req, res) => {
    const name = req.body.name;
    const author = req.body.author;
    const photo_url = req.body.photo_url;

    const photo = new Photo({
        name: name,
        author: author,
        photo_url: photo_url
    });

    try {
        const add_new_photo = await photo.save();
        if(add_new_photo){
            res.status(200).json(add_new_photo);
            res.end();
        } else {
            res.status(401).json('Something went wrong');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async(req, res) => {
    try {
        const get_all_photos = await Photo.find();
        if(get_all_photos) {
            res.status(200).json(get_all_photos);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


/**
 * @swagger
 * 
 * /v1/api/photo/{id}:
 *  delete:
 *      description: delete photogram
 *      responses:
 *          200:
 *              - application/json
 *          404:
 *              description: Photo not found
 *          500: 
 *              description: Internal Server Error
 *  
 */

router.delete('/:id', async (req, res) => {
    try {
        const delete_photo = await Photo.deleteOne({_id: req.params.id});
        if(delete_photo) {
            res.status(200).json(delete_photo);
        } else {
            res.status(404).json('Photo not found!');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;