const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;


//Middleware

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

//Middleware Mail 
app.post('/',(req,res)=>{

    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'GMAIL',
        auth:{
            user: 'mikael.kombia@gmail.com',
            pass: 'Motdepasse1'
        }
    });
    // Check if you want my resume
    
    
        const mailOption = {
            from: req.body.email,
            to: 'mikael.kombia@gmail.com',
            subject: `Message from ${req.body.email} : ${req.body.subject}`,
            text: req.body.message
        };
    
        transporter.sendMail(mailOption, (error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log('Email success');
                res.send('success');
            }

        });

        if(req.body.sendCv === 'true'){

            const mailOption2 = {
                to: req.body.email,
                subject:'Salut c\'est Mike voici mon cv ',
                text:'test',
                html:'<div style="background-image:url(cid:mailtrap);width:50vw; height:50vh; color: black; background-position:center;object-fit:cover; align-item: center; color: white; font-family: Verdana, Geneva, Tahoma, sans-serif; padding:20px"> <h3>Salut c\'est Mikael</h3> <p>Tu voulais voir mon cv le voici</p></div>',
                attachments: [{
                    filename: 'mailBg.jpg',
                   path:"public/assets/images/motion-test.gif",
                    cid: 'mailtrap' 
                },
                {
                    filename: 'MikaelKombia_Resume.pdf',
                    path: "public/assets/resume.pdf"
                }]
            };

            transporter.sendMail(mailOption2, (error, info)=>{
                if(error){
                    console.log(error);
                    res.send('error');
                }else{
                    console.log('Email success');
                    res.send('success');
                }
            });
            console.log('on peut envoyer le cv');
    
        };
    
})

app.get('/',(req,res)=>{
    res.send('hello !')
})

app.listen(port,()=>{
    console.log(`Server running on PORT ${port}`)
})