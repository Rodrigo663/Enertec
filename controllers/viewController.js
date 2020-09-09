const axios = require('axios');
const catchAsync = require('../utils/catchAsync');
exports.getOverview = catchAsync(async(req, res) => {
    let url = `${req.protocol}://${req.headers.host}/api/v1/users/getMain`;

    
    const d = await axios({
        method: 'GET',

        url


    });

    const users = d.data.data.data;

    res.status(200).render('home', {
        title: 'Home',
        home: true,
        classHeader: 'header',

        users

    });
});



exports.getSolar = catchAsync(async(req, res) => {
    let url = `${req.protocol}://${req.get('host')}/api/v1/slides`;
   
    
    const d = await axios({
        method: 'GET',
        url

    });

    const slides = d.data.data.data;
    

    res.status(200).render('solar', {
        title: 'Solar',
        slides,
        solar: true,
        className: 'solar-header'
    });
});

exports.getAuto = (req, res) => {

    res.status(200).render('automation', {
        title: 'Automação',
        auto: true,
        classAuto: true

     
    });
};



exports.getRequest = (req, res) => {

    res.status(200).render('request', {
        title: 'Faça o seu Pedido',

        object: { 
            'background-position': 'center',
            'background-image': 'url("https://images.pexels.com/photos/3408810/pexels-photo-3408810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")'
        }
     
    } );
};

exports.getReview = catchAsync(async(req, res) => {
    let url = `${req.protocol}://${req.headers.host}/api/v1/users`;

    
    const d = await axios({
        method: 'GET',

        url


    });

    const users = d.data.data.data;

    res.status(200).render('reviews', {
        title: 'Avaliações',
        users,
        object: { 
        
            'background-image': 'url("https://scontent.ffln4-1.fna.fbcdn.net/v/t1.0-9/57004763_589908814819888_6719018911985041408_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=Lb8pFVEzgnUAX9QvlQV&_nc_ht=scontent.ffln4-1.fna&oh=5599577d41a5d1d7b7cd8b4881276d5a&oe=5F636D95")'
            }
    } );
});



exports.getAbout = (req, res) => {

    res.status(200).render('about', {
        title: 'Sobre',
        bodyId: 'body-about',
        navBlack:  'u-navbar-black navbar'
    } );
};

exports.getContact = (req, res) => {
    
    res.status(200).render('contact', {
        title: 'Contato',

        navBlack:  'u-navbar-black navbar'

    } );
};

exports.getCarreiras = (req, res) => {

    res.status(200).render('carreiras', {
        title: 'Carreiras',
        navBlack:  'u-navbar-black navbar'

    } );
};








