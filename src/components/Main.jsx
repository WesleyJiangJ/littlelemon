import { Route, Routes } from 'react-router-dom';
import Hero from './Hero'
import Highlights from "./Highlights";
import Testimomials from "./Testimonials";
import LittleLemon from "./LittleLemon";
import ReserveTable from './ReserveTable';

export default function Main() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimomials />
            <LittleLemon />
            {/* <Routes>
                <Route path="/reservation" element={<ReserveTable />}></Route>
            </Routes> */}
        </main>
    );
}