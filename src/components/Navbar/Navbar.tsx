export default function Navbar(props: any) {
    return(
        <div className=" text-white pb-6 border-b-2 border-white mb-20">
            <div className="container mx-auto flex justify-between items-center ">
            
                <div className="font-semibold flex flex-row">
                
                    <img
                    src="/japanBG.png"
                    alt="Main Image"
                    className="w-11 h-11 rounded-3xl object-cover object-center mr-[7px] border"
                    />
                    
                    <div className="flex flex-col">
                        <span className="text-xl">Noureddine Sidi Abed</span>
                        <span className="text-sm text-slate-800">Full-Stack Software Developer</span>
                    </div>
                    
                </div>

                <ul className="flex text-3xl space-x-6 font-semibold">
                    <li><a href="/" className="hover:text-black transition duration-500">Home</a></li>
                    <li><a href="/about" className="hover:text-black transition duration-500">About</a></li>
                    <li><a href="/contact" className="hover:text-black transition duration-500">Contact</a></li>
                </ul>
            </div>
      </div>
    );
}