export default function Icon(props:any){
    return(
        <img 
            className="w-[40px] h-[40px] object first-letter: object-cover"
            src={props.img}
        />
        
    )
}