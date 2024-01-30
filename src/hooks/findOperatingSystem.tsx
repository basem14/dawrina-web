


    import { useEffect, useState } from "react";


export default function findOperatingSystem(){
 
    const [DeviceType,setDeviceType] = useState(-1)
    useEffect(() => {
        if(navigator.userAgent.match(/Android/i))
        {
            setDeviceType(0)
        }
        else if(navigator.userAgent.match(/iPhone|iPad|iPod/i))
        {
            setDeviceType(1)

        }
        else if(navigator.userAgent.match(/Huwaei/i)){
            setDeviceType(2)
    
        }
        else{
            setDeviceType(-1)
        }
    }, []);

   

    return {
     DeviceType
    };
};