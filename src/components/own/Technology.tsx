
interface TechnologyProps {
  img: string,
  text: string,
  info?: string

}

function Technology({img,text,info}: TechnologyProps) {
  return (
    <>
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={"/icons/" + img} alt="" className="h-14 w-13 object-contain" />

          <p className="flex flex-col items-center">
          <span className="text-sm">{text}</span>
          <span className="text-xs">{info} </span>
          </p>
        </div>
    </>
  )
}

export default Technology