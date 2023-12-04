// import { Route, Routes } from 'react-router-dom';
import Hero from './Hero'
import Highlights from "./Highlights";
import Testimomials from "./Testimonials";
import LittleLemon from "./LittleLemon";

export default function Main() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimomials />
            <LittleLemon />
        </main>
    );
}

{/* <Routes>
    <Route path="/" element={<Hero />}></Route>
    <Route path="/menu" element={<Menu />}></Route>
</Routes> */}