import {ContactLinks} from '../contact/ContactLinks';
import Image from "next/image";

export const Footer = () => {

    return (
        <footer className="footer">
            <Image src={'/logo.png'} width={70} height={70} alt="hooman hajarian" />
            <p className="footer-copy">&copy;{new Date().getFullYear()} All Rights Reserved hh-portfolio</p>
            <ContactLinks />
        </footer>
        )
};

