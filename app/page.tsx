import Image from "next/image";
import Intro from "./components/anim/intro";
import Background from "./components/anim/bg";
import Sky from "./components/anim/Sky";

export default function Home() {
    return (
        <div className="min-h-[300vh] overflow-y-hidden dark:bg-black ">
            <Intro />
            <Background />
            <Sky />
        </div>
    );
}
