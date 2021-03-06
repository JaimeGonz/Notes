const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

yargs.version("1.1.0")

yargs.command(
    {
        command: "add",
        describe: "Add a new note",
        builder: {
            title:{
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "Note body",
                demandOption: true,
                type:"string"
            }
        },
        handler: function(argv){
            console.log(chalk.green("Adding a new note..."))
            //console.log("Title:" + argv.title)
            //console.log("Body:"+ argv.body)
            notes.addNote(argv.title, argv.body)
        }
    }
)

yargs.command({
    command: "list",
    describe: "List notes",
    handler: function(){
        console.log(chalk.green("Running list command..."))
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(chalk.green("Running read command..."))
        notes.readNote(argv.title) 
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title", 
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(chalk.green("Running remove command..."))
        notes.removeNote(argv.title) 
    }
})

yargs.command({
    command: "modify",
    describe: "Modify a note",
    builder: {
        title: {
            describe: "Note title", 
            demandOption: true,
            type: "string"
        },
        nTitle: {
            describe: "New title",
            demandOption: true,
            type: "string"
        },
        nBody: {
            describe: "New body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(chalk.green("\nRunning modify command..."))
        notes.modifyNote(argv.title, argv.nTitle, argv.nBody)
    }
})

yargs.parse()


// RETO NO. 3
// 1) Crear comando  para remover una nota, llamado "remove" s??lo con 
// la opcion "title"
// 2) Crear en "notes.js" la funci??n removeNote
// 3) Mandarla llamar en "app.js" dentro de la propiedad handler
// 4) En la funci??n removeNote
//    --cargar las notas existentes
//    --usar un filter en el arreglo para encontrar si la nota si est?? 
//    --en el archivo, creando una lista con las notas que se desean
//    --mantener
// 5) Guardar la nueva lista de notas sobreescribiendo en el archivo con
//    la funci??n saveNotes


