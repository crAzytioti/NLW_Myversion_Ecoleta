//import dependency sqlite3

const sqlite3=require("sqlite3").verbose()


const db=new sqlite3.Database("./src/database/database.db")

module.exports = db
 
// db.serialize(()=>{
    //criar tabela

    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );        
    // `)


    // //inserir dados na tabela
    // const query = `    
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1563477710521-5ae0aa5085ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, jardim América",
    //     "nº 260",
    //     "Santa Catarina",
    //     "Rio do sul",
    //     "Resíduos Eletrônicos, Lâmpadas"

    // ]
    
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registado com sucesso")
    //     console.log(this)
    // }

    // db.run(query,values,afterInsertData)


    //Remover DADOS




    

    //  db.run(`DELETE FROM places WHERE id = ?`, [3],function(err,rows){
    //      if(err){
    //          return console.log(err)
    //      }
    //      console.log("Registo removido com sucesso!")

    //  })
//  });