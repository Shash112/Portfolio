const Header = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full z-10'>
        <div className='container py-4 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Shashank</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#experiance" className='hover:text-gray-400'>Experiance</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                {/* <a href="#contact" className='hover:text-gray-400'>Contact</a> */}
            </div>
            <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</a>
        </div>
    </nav>
  )
}

export default Header