import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Line from './Line';

const Projects = () => {
  return (
    <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">

      <Line />
      <h1 className="sm:mt-8 sm:mb-8 text-center">Under Development Projects</h1>
      <div className="h-2 bg-gradient-to-br from-cyan-400 to-lightBlue-400 rounded-lg shadow-[0_0_10px_#00d4d4] sm:hidden mb-3"></div>
      <Line />
      
      <div className="row featurette py-5 ">
        {/* First Featurette */}
        <div className="col-md-6 sm:ml-9 ml-2  ">
          <h2 className="featurette-heading mb-2">
            Job Portal
            <br/>
             <span className="mt-6">It’s a complete full stack project.</span>
          </h2>
          <p className="lead sm:mt-8">
          I'm working on a job portal using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to connect job seekers with recruiters. The platform allows users to create profiles, browse job listings, apply for positions, and receive real-time updates.
          </p>
          <p className='lead sm:mt-3'>
          Admins can manage job posts and user profiles seamlessly through an intuitive dashboard, ensuring smooth interaction and efficient recruitment.
          </p>
         
        </div>

        <div className="col-md-5 sm:ml-8">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIppqX8WvG4TmgGG945VQqw8g04jvJ0sjyxQ&s" // Change this to your actual project image URL
            alt="Project Image"
            width="400"
            height="400"
          />
        </div>
      </div>

      {/* Second Featurette */}
      <div className="row featurette py-5 ml-5">
        <div className="col-md-7 order-md-2 ml:6">
          <h2 className="featurette-heading">
            I'm woking on Uber Clone.
          </h2>
          <p className="lead">
          I built an Uber clone using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to create a ride-sharing application. The platform enables users to book rides, track drivers in real time, and make payments seamlessly. Drivers can manage their rides and earnings, while admins can oversee users and trips through an intuitive admin panel, ensuring a smooth and scalable experience for both passengers and drivers.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ur_v_NVKveelnEq3Ql2zD4Knq4OfUNhJaQ&s" 
            alt="Project Feature Image"
            width="400"
            height="400"
          />
        </div>
      </div>

    </main>
  );
};

export default Projects;

