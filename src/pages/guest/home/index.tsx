import { HomePage } from "@/components/features/home/homepage-banner-section";
import { AboutPage } from "@/components/features/home/aboutme";
import { SkillPage } from "@/components/features/home/myskill";

export default function MyHomePage() {
    return(
   <>
        <HomePage />
        <AboutPage />
        <SkillPage/>

        </>
    );
}