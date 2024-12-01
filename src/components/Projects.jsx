import chatImage from "../assets/chat-app.png"
import ecommerceImage from "../assets/e-commerce.png";

const projects = [
    {
      id: 1,
      name: "E-Commerce",
      technologies: "MERN Stack",
      image: ecommerceImage,
      github: "https://github.com/Shash112/ecommerce-client",
      demo: "https://ecommerce-client-seven-tau.vercel.app/"
    },
    {
      id: 2,
      name: "Chatting Website",
      technologies: "MERN Stack, Socket.io",
      image: chatImage,
      github: "https://github.com/Shash112/ChatApp",
      demo: "https://chatapp-8txf.onrender.com/"
    },
  ];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                        <a href={project.demo} className='inline-block bg-gradient-to-r from-pink-400 to-yellow-500 text-white px-4 py-2 rounded-full ml-2' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects