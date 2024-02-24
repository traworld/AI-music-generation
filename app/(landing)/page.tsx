import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {

        return (
          <div className="h-full ">
          <LandingNavbar />
          <LandingHero />
          <LandingContent />
    
        </div>
        //   unprotected meand any user can see this apge without login 
        ) ;

}
export default LandingPage;