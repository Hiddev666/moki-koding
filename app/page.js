import Image from "next/image";
import Hero from "./layout/Hero";
import About from "./layout/About";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="w-full px-15">
                <About />
            </div>
        </>
    );
}
