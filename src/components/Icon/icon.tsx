export default function Icon(props:any){
    return(
        <img 
            className={`w-[45px] h-[45px] object first-letter: object-fit bg-cover rounded-xl  ${props.bgColor}`}
            src={props.img}
        />
        
    )
}