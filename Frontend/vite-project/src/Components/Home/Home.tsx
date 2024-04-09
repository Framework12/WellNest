import { Link } from "react-router-dom";
import "./Home.css";
import drImg1 from "../../assets/dr1.jpg";
import drImg2 from "../../assets/dr2.jpg";
import drImg3 from "../../assets/dr3.jpg";
import drImg4 from "../../assets/dr4.jpg";
import drImg5 from "../../assets/dr5.jpg";
import drImg6 from "../../assets/dr6.jpg";
import drImg7 from "../../assets/dr7.jpg";
import drImg8 from "../../assets/dr8.jpg";
import drImg9 from "../../assets/dr9.jpg";
import drImg10 from "../../assets/dr10.jpg";
import drImg11 from "../../assets/dr11.jpg";

import heartImg from "../../assets/heart.png";
import heart2Img from "../../assets/heart2.png";
import beatImg from "../../assets/beat.gif";
import { IoTimerSharp, IoBody } from "react-icons/io5";
import { MdTask, MdOutlineBloodtype } from "react-icons/md";
import {
  FaHandHoldingMedical,
  FaRegFaceLaughBeam,
  FaTeeth,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiHeartOrgan, GiKidneys, GiLiver } from "react-icons/gi";
import { PiBrain, PiSyringeBold, PiBoneThin } from "react-icons/pi";
import {
  FaBaby,
  FaUsers,
  FaCheckCircle,
  FaClinicMedical,
  FaMoneyBillAlt,
} from "react-icons/fa";
import thyroid from "../../assets/thyroid.png";

const Home: React.FC = () => {
  const DrAbout = [
    {
      title: "24 Hours Services",
      description:
        "Our dedicated team of healthcare professionals is here to provide swift assistance and expert guidance at any hour of the day or night. With our state-of-the-art telemedicine platform, you can access quality medical care from the comfort of your own home, ensuring peace of mind and timely intervention whenever you need it. Trust in our commitment to your well-being because when it comes to your health, there's no time to wait.",
      icon: <IoTimerSharp />,
    },
    {
      title: "10 Years of Experience",
      description:
        "Meet our team of experienced doctors, the cornerstone of our medical practice. With decades of collective expertise across various specialties, our physicians bring unparalleled knowledge, skill, and compassion to every patient encounter. From diagnosing complex conditions to developing personalized treatment plans, our doctors are dedicated to delivering the highest standard of care.",
      icon: <MdTask />,
    },
    {
      title: "High-Quality Care",
      description:
        "At our facility, high-quality care isn't just a goal – it's our standard. From the moment you walk through our doors, you'll experience a level of attention and expertise that sets us apart. Our commitment to excellence is evident in every aspect of our practice, from our meticulously trained staff to our state-of-the-art equipment and advanced treatment modalities.",
      icon: <FaHandHoldingMedical />,
    },
  ];

  const diseases = [
    {
      title: "Cardiology",
      description: "Diagnosis and treatment of heart diseases",
      icon: <GiHeartOrgan />,
    },
    {
      title: "Dermatology",
      description: "Diagnosis and treatment of skin diseases.",
      icon: <FaRegFaceLaughBeam />,
    },
    {
      title: "Neurologist",
      description: "Diagnosis and treatment of brain and nervous.",
      icon: <PiBrain />,
    },
    {
      title: "Physicians",
      description: "Diagnosis and general treatment of body",
      icon: <IoBody />,
    },
    {
      title: "Surgeon",
      description: " A surgeon is a medical doctor who performs surgery.",
      icon: <PiSyringeBold />,
    },
    {
      title: "Dentist",
      description: "Diagnosis and treatment of Teeth diseases",
      icon: <FaTeeth />,
    },
    {
      title: "Orthopedist",
      description: "Diagnosis and treatment of Bones diseases",
      icon: <PiBoneThin />,
    },
    {
      title: "Urology",
      description: "Diagnosis and treatment of kidney diseases",
      icon: <GiKidneys />,
    },
    {
      title: "Pediatrician",
      description: "Diagnosis and treatment of child baby diseases",
      icon: <FaBaby />,
    },
    {
      title: "Therapist",
      description: "Treatment of mental diseases",
      icon: <FaUserDoctor />,
    },
  ];

  const loopedDiseases = [...diseases, diseases[0]];

  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      experience: "10 years",
      photo: drImg6,
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      experience: "15 years",
      photo: drImg7,
    },
    {
      name: "Dr. David Brown",
      specialization: "Neurologist",
      experience: "12 years",
      photo: drImg8,
    },
    {
      name: "Dr. Sarah Johnson",
      specialization: "Surgeon",
      experience: "20 years",
      photo: drImg9,
    },
    {
      name: "Dr. Emily White",
      specialization: "Orthopedist",
      experience: "8 years",
      photo: drImg5,
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="left-content">
          <div className="beat">
            <img src={beatImg} alt="beat" />
          </div>
          <h1>Your Health Come First</h1>
          <p>
            With Medicare services you will receive the best medical treatment
            in your home. Our team of skilled medical professional and aids
            ensure that you get the care you need and deserve.
          </p>
          <Link to="/book-appointment">
            <button className="book-appointment">Book Appointment</button>
          </Link>
        </div>
        <div className="center-content">
          <img src={drImg1} alt="Clinic" />
        </div>
        <div className="quote-container">
          <p className="quote-text">
            "A trusted assistance companion for your health needs."
          </p>
        </div>
        <div className="heart2">
          <img src={heart2Img} alt="heart" />
        </div>
        <div className="heart">
          <img src={heartImg} alt="heart" />
        </div>
      </div>
      <div className="home-about">
        {DrAbout.map((category, index) => (
          <div className="grid-item">
            <h2>{category.title}</h2>
            <div className="logo">{category.icon}</div>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <div className="disease">
        <h2>Consult Top Doctors Online For Any Health Concern</h2>
        <p>
          Private online consultation with verified doctors in all specialties
        </p>
        <div className="disease-cont">
          <div className="scroll-content">
            {loopedDiseases.map((disease, index) => (
              <Link to="/doctors" key={index}>
                <div className="grid-disease">
                  <div className="logo">{disease.icon}</div>
                  <h2>{disease.title}</h2>
                  <p>{disease.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="tests">
        <h3> Categories</h3>
        <h2>Popular Tests </h2>
        <div className="test-grid">
          <div className="grid-item">
            <a href="/tests">
              <MdOutlineBloodtype /> <h4>Blood Test</h4>
            </a>
          </div>
          <div className="grid-item">
            <a href="/tests">
              <GiLiver />
              <h4>Liver Profile </h4>
            </a>
          </div>
          <div className="grid-item">
            <a href="/tests">
              <img src={thyroid} alt="Thyroid Profile" />
              <h4>Thyroid Profile</h4>
            </a>
          </div>
          <div className="grid-item">
            <a href="/tests">
              <GiHeartOrgan />
              <h4>Lipid Profile</h4>
            </a>
          </div>
          <div className="grid-item">
            <a href="/tests">
              <GiKidneys />
            </a>
            <h4>Kidney Function Test</h4>
          </div>
        </div>
      </div>

      <div className="home-contact">
        <h4> • WHO WE ARE</h4>
        <h2>We are Offering The Best Doctors For All</h2>
        <div className="text">
          <p>
            Richard McClinton, a Latin professor at hampden-sydney college ini
            Virginia, looked up one of the more obscure Latin words,consectetur,
            and going through the cities.
          </p>
          <div className="record-container">
            <div className="record">
              <FaUsers />
              <div className="info">
                <h2>52K</h2>
                <h4>Satisfied Peoples</h4>
              </div>
            </div>
            <div className="record">
              <FaCheckCircle />
              <div className="info">
                <h2>11K</h2>
                <h4>Verified Properties</h4>
              </div>
            </div>
          </div>
          <Link to="/contact-us">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
      </div>

      <div className="img-contact">
        <img src={drImg2} alt="dr Profile" />
        <img src={drImg3} alt="dr Profile" />
        <div className="img-contact2">
          <img src={drImg5} alt="dr Profile" />
          <img src={drImg4} alt="dr Profile" />
        </div>
      </div>

      <div className="home-doctor">
        <h4>EXPERTISE IS HERE</h4>
        <h2>Our Exclusive Doctors</h2>

        <div className="doctor-grid">
          {doctors.map((doctor, index) => (
            <a href="/doctors" key={index} className="doctor-link">
              <div className="doctor-info">
                <div className="photo">
                  <img src={doctor.photo} alt="Dr. Photo" />
                </div>
                <div className="details">
                  <h2>{doctor.name}</h2>
                  <h3>{doctor.specialization}</h3>
                  <h5>Experience: {doctor.experience}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="see-doctors">
          <a href="/doctors">See All Doctors --</a>
        </div>
      </div>

      <div className="home-benefits">
        <div className="left-container">
          <img src={drImg11} alt="Image 2" />
        </div>
        <div className="left-container2">
          <img src={drImg10} alt="Image 1" />
        </div>

        <div className="right-cont">
          <h2>Benefits of Using WellNest</h2>

          <div className="grid-item">
            <div className="circle-icon">
              <FaClinicMedical />
            </div>
            <h3>Modern Clinic</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="grid-item">
            <div className="circle-icon">
              <FaMoneyBillAlt />
            </div>
            <h3>Less Consulting Fees</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sdbhisdui
              sdrbjksdbjhisdf hibhidf biuse fuisbuisdfsdib.
            </p>
          </div>

          <div className="grid-item">
            <div className="circle-icon">
              <FaUserDoctor />
            </div>
            <h3>Professional Treatment</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="ready">
        <div className="ready2">
          <h2> Ready to get started ?</h2>
          <p> book Appointment now</p>
          <div className="ready-botton">
            <button className="appointment-button">Book Appointment Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
