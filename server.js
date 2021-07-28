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

        const mailOption = {
            from: req.body.email,
            to: 'mikael.kombia@gmail.com',
            subject: `Message from ${req.body.email} : ${req.body.subject}`,
            text: req.body.message
        };
        
        const mailOption2 = {
            to: req.body.email,
            subject:'Salut c\'est Mike voici mon cv ',
            text:'test',
            html: `<h3>Salut c\'est Mikael</h3> <p>Merci d'etre passé sur mon portofolio, tu peux trouver mon cv ci-joint .</p> <img src=cid:mailtrap style='height:50vw; width:70vh; object-fit:center' >`,
            attachments: [{
                filename: 'mailBg.jpg',
               path:"public/assets/mail2.png",
                cid: 'mailtrap' 
            },
            {
                filename: 'MikaelKombia_Resume.pdf',
                path: "public/assets/resume.pdf"
            }]
        };

        function defaultMail(){
                transporter.sendMail(mailOption, (error, info)=>{
                    if(error){
                        console.log(error);
                        res.send('error');
                    }else{
                        console.log('Email success');
                        res.send('success');
                    }   
                })
            }
       
            function mailCv(){     
                transporter.sendMail(mailOption2, (error, info)=>{
                    if(error){
                        console.log(error);
                        res.send('error');
                    }else{
                        console.log('cv envoyé');
                        res.send('success');
                    }
                });  
            }
            
            // Check if you want my resume
            if(req.body.sendCv === 'true'){
                mailCv();
                defaultMail();
                
            }else{
                defaultMail();
            }
    
});

app.get('/',(req,res)=>{
    res.send('hello !')
})

app.listen(port,()=>{
    console.log(`Server running on PORT ${port}`)
})