import Member from "../models/Members"

// Creating Members
export async function createMember(member: any): Promise<void> {
    try {
        await Member.create(member);
        console.log("Created Member successfully");
    }
    catch(Error) {
        console.log("Error while creating member", Error);
    }
}
  
// Retrieving members data from Members table
export async function getMembersData(): Promise<void> {
    try {
        const allMembers = await Member.findAll(); 
        console.table(allMembers.map(member => member.toJSON()));
        console.log("Retrieved data successfully");  
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Retrieving specific member data from Members table
export async function getParticularMemberData(id: any) {
    try {
        const member = await Member.findOne({ where: { id: id } });
        if (member) {
            console.log('Member found:', member.toJSON());
            return member;
        }
        else {
            console.log('Member not found');
            return null;
        }
    }
    catch(Error) {
      console.log("Error while reading data",Error);
    }
}
  
// Updating Member data
export async function updateMemberData(id: any, updatedata: any) 
{
    try {
        await Member.update(updatedata, {
            where: { id: id }
        });
        console.log("Updated member data successfully");
    }
    catch(Error) {
        console.log("Error while updating member data", Error);
    }
}
  
// Deleting member by ID
export async function deleteMemberById(id: number): Promise<void> {
    try {
        const member = await Member.findByPk(id);
        if (member) {
            await member.destroy();
            console.log("Member deleted successfully");
        }
        else {
            console.log("Member not found");
        }
    }
    catch(Error) {
        console.log("Error while deleting Member",Error);
    }
}
  
// Deleting records from Members table who meets particular condition
export async function deleteMemberByCondition(condition: any) {
    try {
        await Member.destroy({
            where: condition
        });
        console.log("Member deleted successfully");   
    }
    catch(Error) {
        console.log("Error while deleting Member",Error);
    }
}  
  