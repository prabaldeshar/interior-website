import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // For phone
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email

const PageHeader = ({title, image, subHeading }) => {
    return (
        <section
          className="hero-section position-relative text-center"
          style={{ backgroundImage: `url(${image})`, fontFamily: "serif"}}>

          <div className="hero-overlay">
            <div>
                <h1 className="modern-heading">{title}</h1>
            
            {subHeading && (
                 <h2
                 className=""
                 style={{
                     marginTop: "10px",
                     fontSize: "2rem", // Default font size
                     color: "#fff", // Set color to white
                     display: "block",
                 }}
             >
                 <div style={{ 
                     display: 'flex', 
                     justifyContent: 'center', 
                     alignItems: 'center', 
                     flexDirection: 'row', // Default to row layout
                     gap: '20px' // Add space between icons and text
                 }}>
                     <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '1.5rem' }} />
                     <span>{subHeading.phone}</span>

                     <span style={{ display: 'flex', alignItems: 'center' }}>
                         <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5rem' }} />
                         <a href={`mailto:${subHeading.email}`} style={{ color: '#fff', textDecoration: 'none' }}>
                             {subHeading.email}
                         </a>
                     </span>
                 </div>
             </h2>
                )}
            </div>
          </div>
        </section>
      );
}

export default PageHeader;
