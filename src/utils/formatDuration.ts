const LEADING_ZERO_FORMAT =  new Intl.NumberFormat(undefined , {
    minimumIntegerDigits:2
})//this is used to format the number for example a number into currency or  we can use this for padding zeros of left by defining the minimun integer digits ...

export const formatDuration = (duration:number)=>{
    const hours = Math.floor(duration/60/60);
    const minutes = Math.floor((duration-hours*60*60)/60)
    const seconds = duration%60
    console.log(LEADING_ZERO_FORMAT.format(duration))

    if(hours>0){
        return `${hours}:${LEADING_ZERO_FORMAT.format(minutes)}:${LEADING_ZERO_FORMAT.format(seconds)}`
    }else{
        return `${minutes}:${LEADING_ZERO_FORMAT.format(seconds)}`
    }

}