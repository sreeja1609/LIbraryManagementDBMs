import syncAssociations from "../Associations/associations"
import sequelize from "../Configuration/index";
import Members from "../models/Members";
import Sequelize from 'sequelize';
import Loan from "../models/Loans";

syncAssociations();

export namespace LibbraryQueries {

    // Members who have loaned the most books
    export async function getMembersWithMostLoans() {
        try {
            const result = await Members.findAll({
                attributes: [
                    'id',
                    [sequelize.fn('COUNT', sequelize.col('Loan.id')), 'Loans_Count']
                ],
                include: { model: Loan, as: 'loans', attributes: [] },
                group: ['Members.id'],
                order: [[Sequelize.literal('"Loans_Count"'), 'DESC']],
                limit: 5
            });

            const membersWithLoansCount = result.map(member => {
                const memberJSON = member.toJSON();
                return {
                    Member_ID: memberJSON.id,
                    Loans_Count: memberJSON.Loans_Count,
                };
            });

            console.log("Members with the most loans");
            console.table(membersWithLoansCount);
        } catch (error) {
            console.error('Error fetching members with most loans:', error);
            throw error;
        }
    }
}
