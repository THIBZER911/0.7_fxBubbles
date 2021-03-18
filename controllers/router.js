// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const Event =  require('../models/Event');

// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Home ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/')                               //Définis une route, ici, pour le chemin root
        .get((req, res) => {
            res.render('index',{                    //reponse > afficher la page index
                pageActive: 'home'
                // user: req.session.user              //Envoies les données sous forme de cookies
            });                    
        });

    // Training ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/training')                        
        .get((req,res)=>{res.render('./pages/training',{pageActive: 'training'})})

    router.route('/tutorials')                        
        .get((req,res)=>{res.render('./pages/tutorials',{pageActive: 'tutorials'})})
    
    router.route('/agenda')                        
        .get((req,res)=>{
            Event.find({},(e,events)=>{
                res.render('./pages/agenda',{pageActive: 'agenda', events:events})
            }).sort({date:1})

        })

    router.route('/infos')                        
        .get((req,res)=>{res.render('./pages/infos',{pageActive: 'infos'})})

    router.route('/account')                        
        .get((req,res)=>{res.render('./pages/account',{pageActive: 'account'})})

    router.route('/signin')                        
        .get((req,res)=>{res.render('./pages/signin',{pageActive: 'signin'})})

    router.route('/signup')                        
        .get((req,res)=>{res.render('./pages/signup',{pageActive: 'signup'})})

    return router
})();