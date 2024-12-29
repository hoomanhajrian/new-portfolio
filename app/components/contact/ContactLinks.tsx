import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const ContactLinks = () => {

    return (
        <ul className="links">
            <li><a href="https://www.linkedin.com/in/hooman-hajarian/" target="_blank" rel="noreferrer"><LinkedInIcon /></a></li>

            <li><a href="https://github.com/hoomanhajrian" target="_blank" rel="noreferrer"><GitHubIcon /></a></li>
        </ul>
    )

};

export default ContactLinks;