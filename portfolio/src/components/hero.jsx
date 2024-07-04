import { BsFacebook,BsTwitter,BsInstagram,BsPinterest } from "react-icons/bs";
import HeroPic from '../assets/girl.jpg';
const hero = () => {
    return(
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className="lg:w-1/3 ssm:w-fit">
            <p className="text-4xl mb-5 text-slate-300">I'm</p>
            <h1 className="text-6xl">Suhani R Bhat</h1>
            <hr/>
            <p className="mt-10 text-xl text-slate-300 fint-sans">
                I'm a Web Developer . I'm passionate about creating beautiful websites.
            </p>

            </div>
            <div className="w-1/3 flex justify-end ssm:w-fit">
            <img src={HeroPic} alt="" style={{ width: "350px", height: "350px" }}
            className="rounded-full border-8 border-white"/>
            </div>


            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    let's build quality in programmin ad blah blah blah
                </p>
                <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
                    Show More...
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    < BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>  
                    <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full"/>         
                </div> 

            </div>
        </section>
        
    )
}
export default hero