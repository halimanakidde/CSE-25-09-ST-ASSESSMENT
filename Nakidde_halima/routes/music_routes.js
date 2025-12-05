const express=require("express");
const router=express.Router();
//const connectEnsureLogin = require('connect-ensure-login');
const multer = require('multer');
const musicApp = require('../models/music')




// STORAGE CONFIG
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, 'public/images/uploads');   // images
    } else {
      cb(null, 'public/audio/uploads');    // audio
    }
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + file.originalname;
    cb(null, unique);
  }
});

const upload = multer({ storage: storage });



router.get('/musicUpload', (req, res)=>{
    res.render('music')
 });

// router.post('/musicUpload', async(req, res)=>{
//     try {
//         const musicupload = new musicApp(req.body);
//         console.log(musicupload);
//     await MUSIC.save();
//         res.redirect('/musicUpload');
//     } catch (error) {
//         console.error(error);
//         // res.redirect('/');
//     }
// });

router.post('/musicUpload', upload.fields([
  { name: 'profile_pic', maxCount: 1 },
  { name: 'audio', maxCount: 1 }
]), 
async (req, res) => {

  try {
    const newMusic = new MUSIC({
      songtitle: req.body.songtitle,
      artist: req.body.artist,
      album: req.body.album,
      releaseDate: req.body.releaseDate,
      profile_pic: req.files['profile_pic']
        ? req.files['profile_pic'][0].filename
        : null,
      audio: req.files['audio']
        ? req.files['audio'][0].filename
        : null
    });

    await newMusic.save();
    console.log("Music saved:", newMusic);

    res.redirect('/musicUpload');

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(400).send("Failed to upload song.");
  }

});



 


module.exports=router;
