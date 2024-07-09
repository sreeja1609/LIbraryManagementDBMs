import Author from "../models/Authors"

// Creating Authors
export async function createAuthor(author: any): Promise<void> {
    try {
        await Author.create(author);
        console.log("Created Author successfully");
    }
    catch(Error) {
        console.log("Error while creating author", Error);
    }
}
  
// Retrieving authors data from Authors table
export async function getAuthorsData(): Promise<void> {
    try {
        const Auth = await Author.findAll(); 
        console.table(Auth.map(author => author.toJSON()));
        console.log("Retrieved data successfully");  
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Retrieving specific author data from Authors table
export async function getParticularAuthorData(id: any) {
    try {
        const author = await Author.findOne({ where: { id: id } });
        if (author) {
            console.log('Author found:', author.toJSON());
            return author;
        }
        else {
            console.log('Author not found');
            return null;
        }
    }
    catch(Error) {
      console.log("Error while reading data",Error);
    }
}
  
// Updating Author data
export async function updateAuthorData(id: any, updatedata: any) 
{
    try {
        await Author.update(updatedata, {
            where: { id: id }
        });
        console.log("Updated author data successfully");
    }
    catch(Error) {
        console.log("Error while updating author data", Error);
    }
}
  
// Deleting author by ID
export async function deleteAuthorById(id: number): Promise<void> {
    try {
        const author = await Author.findByPk(id);
        if (author) {
            await author.destroy();
            console.log("Author deleted successfully");
        }
        else {
            console.log("Author not found");
        }
    }
    catch(Error) {
        console.log("Error while deleting Author",Error);
    }
}
  
// Deleting records from Authors table who meets particular condition
export async function deleteAuthorByCondition(condition: any) {
    try {
        await Author.destroy({
            where: condition
        });
        console.log("Author deleted successfully");   
    }
    catch(Error) {
        console.log("Error while deleting Author",Error);
    }
}  
  