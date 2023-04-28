// import getCurrentUser from "./actions/getCurrentUser";
// import getListings, { IListingsParams } from "./actions/getListing";
// import ClientOnly from "./components/ClientOnly";
// import Container from "./components/Container";
// import EmptyState from "./components/EmptyState";
// import ListingCard from "./components/listings/ListingCard";



// interface HomeProps{
//     searchParams:IListingsParams
// }

// const Home = async({searchParams}:HomeProps)=> {

//   const listings = await getListings(searchParams)
//   const currentUser = await getCurrentUser()

//   if(listings.length === 0){
//      return (
//         <ClientOnly>
//              <EmptyState showReset/>
//         </ClientOnly>
//      )
//   }

//   return (
//     <ClientOnly>
//        <Container>
//           <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
//               {listings.map((listing:any)=>(
//                      <ListingCard
//                         currentUser={currentUser}
//                         key={listing.id}
//                         data={listing}
//                      />
//               ))}
//           </div>
//        </Container>
//     </ClientOnly>
//   )
// }

// export default Home



//  added serversideprops

import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListing";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  listings: any[];
  currentUser: any;
}

const Home = ({ listings, currentUser }: HomeProps) => {
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export async function getServerSideProps({ query }: any) {
  const searchParams: IListingsParams = {
    userId: query.userId as string,
    guestCount: query.guestCount ? parseInt(query.guestCount as string) : undefined,
    roomCount: query.roomCount ? parseInt(query.roomCount as string) : undefined,
    bathroomCount: query.bathroomCount ? parseInt(query.bathroomCount as string) : undefined,
    startDate: query.startDate as string,
    endDate: query.endDate as string,
    locationValue: query.locationValue as string,
    category: query.category as string,
  };

  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return {
    props: {
      listings,
      currentUser,
    },
  };
}

export default Home;