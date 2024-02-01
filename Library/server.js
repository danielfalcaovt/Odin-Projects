import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let books = [];
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        bookContainer:books
    });
});

app.post("/",(req,res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const pages = req.body.pages + " Paginas";
    let read = req.body.read;
    if (read == "on"){
        read = "Ja lido!";
    }else{
        read =  "Por ler!";
    }
    const newBook = {
        bookTitle:title,
        bookAuthor:author,
        bookPages:pages,
        bookRead:read,
        id:books.length
    };
    books.push(newBook);
    res.render("index.ejs",{
        bookContainer:books
    });
});

app.post("/delete",(req,res)=>{
    const id = req.body.id;
    const removedObj = books.filter((book)=>{
        return book.id != id;
    });
    books = removedObj;
    res.redirect("/");
});

app.listen(port,()=>{
    console.log("App is running in port 3000.");
});