import Head from 'next/head';
import LocationFilter from '../components/filters/LocationFilter';
import VenueTypeFilter from '../components/filters/VenueTypeFilter';

const Home = () => (
    <>
        <Head>
            <title>Venue Reservation</title>
        </Head>

        <main>
            <h1>Welcome to Venue Reservation</h1>
            <LocationFilter />
            <VenueTypeFilter />
        </main>
    </>
);

export default Home;
