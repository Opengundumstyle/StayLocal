import { Listing, Reservation, User } from "@prisma/client";

export type SafeUser = Omit <
    User,
    "createdAt" | "updatedAt" | "emailVerified " 
 > & {
     createdAt:string;
     updatedAt:string;
     emailVerified:string | null
 }

 export type SafeListing = Omit<
       Listing,
      "createdAt"
 > & {
     createdAt:string;
 }

 export type SafeReservations = Omit <Reservation, 'CrearedAt' | 'startDate' | 'endDate'|'listing'> &{
      CrearedAt:string,
      startDate:string,
      endDate:string,
      listing:SafeListing
 }