export default function Icon(props:any){
    return(
        <div className="flex flex-col items-center justify-center">
            <img 
                className={`w-[45px] h-[45px] object-cover bg-cover rounded-xl ${props.bgColor}`}
                src={props.img}
                alt="language-image"
            />
            <p className="text-center mt-2 max-w-[70px]">{props.language}</p>
        </div>


        
    )
}