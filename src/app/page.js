import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Popular from "@/components/popular/Popular";
import Products from "@/components/products/Products";
import Users from "@/components/users/Users";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero />
            <Products />
            <Benefits />
            <Users />
            <Popular />
        </div>
    );
}
