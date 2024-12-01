import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 

    const handlechange = (e) => {
        console.log(e.target.name, e.target.value )
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setStatus("Submitting...");
        setError("");
        setLoading(true);
        try {
            const response = await fetch("https://razorpay-node-js-backend.vercel.app/send-email", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            if (data.success) {
                setStatus(data.message);
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.log(error)
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='bg-black text-white py-20' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Lets Talk</h3>
                    <p>Im open to discussing web development projects or partnership opportunities.</p>
                    <div className='mb-4 mt-8'>
                        <FaEnvelope className='inline-block text-green-400 mr-2' />
                        <a href='mailto:shashankfrancilla@gmail.com' className='hover:underline'>shashankfrancilla@gmail.com</a>
                    </div>
                    <div className='mb-4'>
                        <FaPhone className='inline-block text-green-400 mr-2' />
                        <span>+918105531084</span>
                    </div>
                    <div className='mb-4'>
                        <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                        <span>madhuvana village, udupi district,</span>
                        <br />
                        <span className='pl-6'>karnataka state, india - 576225</span>
                    </div>
                </div>

                <div className='flex-1 w-full'>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your Name</label>
                            <input name='name' value={formData.name} type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' onChange={handlechange} />
                        </div>
                        <div>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input name='email' value={formData.email} onChange={handlechange} type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' />
                        </div>
                        <div>
                            <label htmlFor="message" className='block mb-2' >Message</label>
                            <textarea name='message' value={formData.message} onChange={handlechange} type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows="5" placeholder='Enter Your Message...' />
                        </div>
                        <button disabled={loading} onClick={handleSubmit} className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>{loading ? "Loading..." : "Send"}</button>
                    </form>
                    {status && <span className='mt-4 text-green-400'>{status}</span>}
                    {error && <span className='mt-4 text-red-400'>{error}</span>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact