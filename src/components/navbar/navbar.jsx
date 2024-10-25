import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";

export default async function Header() {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}



