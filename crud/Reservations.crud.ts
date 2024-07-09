import Reservation from "../models/Reservations"

// Creating Reservations
export async function createReservation(reservation: any): Promise<void> {
    try {
        await Reservation.create(reservation);
        console.log("Created reservation successfully");
    }
    catch(Error) {
        console.log("Error while creating reservation", Error);
    }
}
  
// Retrieving reservations data from Reservations table
export async function getReservationsData(): Promise<void> {
    try {
        const allReservations = await Reservation.findAll(); 
        console.table(allReservations.map(reservation => reservation.toJSON()));
        console.log("Retrieved data successfully");  
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Retrieving specific reservation data from Reservations table
export async function getParticularReservationData(id: any) {
    try {
        const reservation = await Reservation.findOne({ where: { id: id } });
        if (reservation) {
            console.log('Reservation found:', reservation.toJSON());
            return reservation;
        }
        else {
            console.log('Reservation not found');
            return null;
        }
    }
    catch(Error) {
      console.log("Error while reading data",Error);
    }
}
  
// Updating Reservation data
export async function updateReservationData(id: any, updatedata: any) 
{
    try {
        await Reservation.update(updatedata, {
            where: { id: id }
        });
        console.log("Updated reservation data successfully");
    }
    catch(Error) {
        console.log("Error while updating reservation data", Error);
    }
}
  
// Deleting reservation by ID
export async function deleteReservationById(id: number): Promise<void> {
    try {
        const reservation = await Reservation.findByPk(id);
        if (reservation) {
            await reservation.destroy();
            console.log("Reservation deleted successfully");
        }
        else {
            console.log("Reservation not found");
        }
    }
    catch(Error) {
        console.log("Error while deleting Reservation",Error);
    }
}
  
// Deleting records from Reservations table which meets particular condition
export async function deleteReservationByCondition(condition: any) {
    try {
        await Reservation.destroy({
            where: condition
        });
        console.log("Reservation deleted successfully");   
    }
    catch(Error) {
        console.log("Error while deleting Reservation",Error);
    }
}  
  