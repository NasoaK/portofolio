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
            text:'Good to see you again',
            html:  `<img src=cid:mailtrap style='height:200px; width:600px; object-fit:center'> <br> <a href="https://mknak.herokuapp.com/" target="_blank"> Want to see it again <a/>`,
            attachments: [{
                filename: 'mailBg.jpg',
               path:"public/assets/mail.png",
                cid: 'mailtrap' 
            },
            {
                filename: 'MikaelKombia_Resume.pdf',
                path: "public/assets/resume.pdf"
            }]
        };

        function defaultMail(){
                await transporter.sendMail(mailOption, (error, info)=>{
                    if(error){
                        console.log(error);
                        err = JSON.stringify(error);
                        res.send('mail error:', err, 'info : ' ,info);
                    }else{
                        console.log('Email success');
                        res.send('success');
                    }   
                })
            }
       
            function mailCv(){     
              await  transporter.sendMail(mailOption2, (error, info)=>{
                    if(error){
                        console.log(error);
                        err = JSON.stringify(error);
                        res.send('mail error :', err, 'info : ' ,info);
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