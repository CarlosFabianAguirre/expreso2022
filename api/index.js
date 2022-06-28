const {op}= require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");

//select * from libros 
const getBooks = async()=> {
    const libros = await db.libro
            .findAll({
                include: db.autor
            })

            //busca resultados y los devuelva
            .then(results =>{
            return results;
   
       
        });
        return libros
}

const getAuthors = async () => {
    const authors = await db.autor.findAll()
                    .then(results => {
                        return results;
                    });

    return authors;
}

const getBookById = async (id) => {
    console.log("recibiste",id);
    const book = await  db.libro.findByPk(id,{include:db.autor})
                                .then(result => {
                                return result;
        });
    return book; 
};

const findBookByTitle = async (termino) => {
    const books = await db.libro.findAll({
        where: {
            titulo: {
                [Op.substring]: termino,
            }
        }
    }).then(result => {
            return result;
});
    
    return books 
}

module.exports = {
    getBooks,
    getAuthors,
    getBookById,
    findBookByTitle
}
