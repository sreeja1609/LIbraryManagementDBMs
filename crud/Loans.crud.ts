import Loan from "../models/Loans"

// Creating Loans
export async function createLoan(loan: any): Promise<void> {
    try {
        await Loan.create(loan);
        console.log("Created Loan successfully");
    }
    catch(Error) {
        console.log("Error while creating loan", Error);
    }
}
  
// Retrieving loans data from Loans table
export async function getLoansData(): Promise<void> {
    try {
        const allLoans = await Loan.findAll(); 
        console.table(allLoans.map(loan => loan.toJSON()));
        console.log("Retrieved data successfully");  
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Retrieving specific loan data from Loans table
export async function getParticularLoanData(id: any) {
    try {
        const loan = await Loan.findOne({ where: { id: id } });
        if (loan) {
            console.log('Loan found:', loan.toJSON());
            return loan;
        }
        else {
            console.log('Loan not found');
            return null;
        }
    }
    catch(Error) {
      console.log("Error while reading data",Error);
    }
}
  
// Updating Loan data
export async function updateLoanData(id: any, updatedata: any) 
{
    try {
        await Loan.update(updatedata, {
            where: { id: id }
        });
        console.log("Updated loan data successfully");
    }
    catch(Error) {
        console.log("Error while updating loan data", Error);
    }
}
  
// Deleting loan by ID
export async function deleteLoanById(id: number): Promise<void> {
    try {
        const loan = await Loan.findByPk(id);
        if (loan) {
            await loan.destroy();
            console.log("Loan deleted successfully");
        }
        else {
            console.log("Loan not found");
        }
    }
    catch(Error) {
        console.log("Error while deleting Loan",Error);
    }
}
  
// Deleting records from Loans table which meets particular condition
export async function deleteLoanByCondition(condition: any) {
    try {
        await Loan.destroy({
            where: condition
        });
        console.log("Loan deleted successfully");   
    }
    catch(Error) {
        console.log("Error while deleting Loan",Error);
    }
}  
  