"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelReservation = exports.returnBook = exports.reserveBookForMember = exports.loanBookToMember = void 0;
const index_1 = __importDefault(require("../Configuration/index"));
const Loans_1 = __importDefault(require("../models/Loans"));
const Reservations_1 = __importDefault(require("../models/Reservations"));
function loanBookToMember(bookId, memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index_1.default.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                // Check if the book is reserved by the member
                const reservation = yield Reservations_1.default.findOne({
                    where: {
                        book_id: bookId,
                        member_id: memberId
                    },
                    transaction: t
                });
                if (reservation) {
                    // Create a loan record
                    const today = new Date();
                    const dueDate = new Date();
                    dueDate.setDate(today.getDate() + 14); // 2 weeks loan period
                    yield Loans_1.default.create({
                        book_id: bookId,
                        member_id: memberId,
                        loan_date: today,
                        due_date: dueDate
                    }, { transaction: t });
                    // Remove the reservation
                    yield reservation.destroy({ transaction: t });
                    console.log("Loan created and reservation removed.");
                }
                else {
                    throw new Error("Reservation not found.");
                }
            }));
        }
        catch (error) {
            console.error("Failed to loan book to member:", error);
        }
    });
}
exports.loanBookToMember = loanBookToMember;
function reserveBookForMember(bookId, memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index_1.default.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                // Check if the book is already reserved
                const existingReservation = yield Reservations_1.default.findOne({
                    where: {
                        book_id: bookId,
                        member_id: memberId
                    },
                    transaction: t
                });
                if (!existingReservation) {
                    // Create a new reservation
                    yield Reservations_1.default.create({
                        book_id: bookId,
                        member_id: memberId,
                        reservation_date: new Date()
                    }, { transaction: t });
                    console.log("Book reserved for member.");
                }
                else {
                    throw new Error("Book is already reserved by this member.");
                }
            }));
        }
        catch (error) {
            console.error("Failed to reserve book for member:", error);
        }
    });
}
exports.reserveBookForMember = reserveBookForMember;
function returnBook(loanId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index_1.default.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                const loan = yield Loans_1.default.findByPk(loanId, { transaction: t });
                if (loan) {
                    yield loan.destroy({ transaction: t });
                    console.log("Book returned and loan record removed.");
                }
                else {
                    throw new Error("Loan record not found.");
                }
            }));
        }
        catch (error) {
            console.error("Failed to return book:", error);
        }
    });
}
exports.returnBook = returnBook;
function cancelReservation(reservationId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index_1.default.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                const reservation = yield Reservations_1.default.findByPk(reservationId, { transaction: t });
                if (reservation) {
                    yield reservation.destroy({ transaction: t });
                    console.log("Reservation cancelled.");
                }
                else {
                    throw new Error("Reservation record not found.");
                }
            }));
        }
        catch (error) {
            console.error("Failed to cancel reservation:", error);
        }
    });
}
exports.cancelReservation = cancelReservation;
//# sourceMappingURL=transactions.js.map