const express=require('express');
const bodyParser=require('body-parser');
const lodash=require("lodash");

const PORT=process.env.PORT || 3000;

const app=express();

app.locals.lodash= lodash;

const homeContent="ahofdshofihsiofdhoisdoh oif jdfhsdklfh oisdhf hsdjkfh dsfh iodshfijshad kljfh shf hewuifh iehfiuadhkldfh dsklfhdsfuidsf hdsiuhfsdhjl bdskfg iugw8ryiewhi ";
const aboutContent='youweoiuqrueyi ryopieur iouwqer uopier uopieqruopiewquroeytui yioutri uoprryuityrpieywreyiyureiuyrqeueypqoiqewyuio ewyriouyewui yruiwyr uiewyioruewr    wyipqpo';
const contactContent="bznbvncxvnbvcm bcvnbbvcbz,mb,bcv mvbmn bmn bn bm bbn vzbnv bnvznbvcvzncxmnb cxzmn zbmnzb mnbzxcmn bmn zbn zvmncx mn bnbzxmnzxbmnxbmm cvnbcxvzbn  mnm";

const BlogHeading=['Sample One', 'Sample 2'];
const BlogBody=['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mauris in nibh finibus efficitur id vitae nunc. Curabitur aliquet faucibus felis et imperdiet. Nam vel tellus elit. Sed cursus quam congue purus maximus, sed lobortis magna scelerisque. Fusce semper viverra nulla, id consequat quam volutpat pretium. Aenean eget suscipit metus. Nam massa augue, commodo quis tortor a, interdum ultricies orci. Aliquam erat volutpat. Vivamus congue elit vel dui egestas gravida. Etiam velit lorem, pretium vel lacinia vitae, congue eget lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur lacus nec lacus dapibu',' hoifhioahiofa ofods hiofhio hsfaod hdshfuig uhefeiuerrypieygs bklj ds hll fhkdhioufhshtihdsib aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma aditya sharma f'];

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log('Server listening to port : '+PORT);
})

app.get('/',(req,res)=>{
    res.render('index',{content:homeContent,Heading:BlogHeading,Body:BlogBody});
    
function readMore(){
    console.log('We got the message');
}
})

app.get('/about',(req,res)=>{
    res.render('about',{content:aboutContent});
    
})

app.get('/contact',(req,res)=>{
    res.render('contact',{content:contactContent});
    
})

app.get('/blog/:blogHead',(req,res)=>{
    const blogHeadMaybe=lodash.lowerCase(req.params.blogHead);
    let i=BlogHeading.length-1;
    while(i>-1){
        if(blogHeadMaybe==lodash.lowerCase(BlogHeading[i])){
            res.render('blog',{heading:BlogHeading[i],body:BlogBody[i]})
            i=-5;
        }
        i--;
    }
    if(i==-1){
        res.render('blog',{heading:"Error 404!",body:'You have requested for a page that does not exist!'})
        console.log("error 404");
    }
})


app.post('/',(req,res)=>{
    function readMore(){
    console.log('We got the message');
}
})

app.get('/compose',(req,res)=>{
    res.render('compose')
})

app.post('/compose',(req,res)=>{
    BlogHeading.push(req.body.heading);
    BlogBody.push(req.body.body);
    res.redirect('/');
})