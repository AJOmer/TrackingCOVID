import React, {Fragment} from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const onMouseOut = (e) => {
        e.target.style.color = '#cccccc';
    };

    const SocialLinks = [
        {
            SocialMedia: "Linkedin",
            ProfileLink: "https://www.linkedin.com/in/ahmedjomer/",
            fontAwesomeIcon: "fab fa-linkedin",
            onMouseOverColor: "#4875B4",
        },
        {
            SocialMedia: "Github",
            ProfileLink: "https://github.com/AJOmer",
            fontAwesomeIcon: "fab fa-github",
            onMouseOverColor: "#211F1F",
        },
        {
          SocialMedia: "Portfolio",
          ProfileLink: "https://ajomer.github.io/",
          fontAwesomeIcon: "fas fa-globe" ,
          onMouseOverColor: "#25d366", 
        },
        {
            SocialMedia: "Gmail",
            ProfileLink: "mailto: ahmedjomer@gmail.com",
            fontAwesomeIcon: "far fa-envelope",
            onMouseOverColor: "#D44638"
        }
    ];

    return (
        <Fragment>
            <div className={styles.container}>
                <h5 style={{display: "block", marginBottom: "0px", fontSize: 32, marginTop: "38px", textAlign: "center"}}>
                    Developed and delivered by {" "} <a href="https://github.com/AJOmer" target="_blank" rel="noopener noreferrer" style={{color: "rgba(205, 112, 122, 1)", textDecoration: "none", textTransform: "capitalize"}}>
                        ahmed j. omer
                    </a>
                </h5>
            </div>
            <div className={styles.container}>
                <br/>
                <ul className="list" style={{listStyleType: "none"}}>
                    {SocialLinks.map((data, key) => {
                        return (
                            <li key={key} style={{display: "inline-block", marginRight: "16px"}}>
                                <a onMouseOver={(e) => {
                                    e.target.style.color = `${data.onMouseOverColor}`;
                                }}
                                onMouseOut={onMouseOut} href={data.ProfileLink} target="_blank" rel="noopener noreferrer" style={{color: "#cccccc", fontSize: "38px"}}>
                                    <i className={`${data.fontAwesomeIcon}`}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default Footer;