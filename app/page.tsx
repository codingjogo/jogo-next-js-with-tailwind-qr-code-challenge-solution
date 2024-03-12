import CardWrapper from "@/components/CardWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
        <main className="w-full h-screen flex justify-center items-center flex-col">
            <CardWrapper />
            <span className="font-semibold text-dark-blue text-sm mt-2">Challenge by <Link href='https://www.frontendmentor.io/?ref=challenge' className="underline">Frontend Mentor</Link>. Coded by <Link href='https://www.frontendmentor.io/profile/codingjogo' className="underline">codingjogo</Link>.</span>
        </main>
    );
}
