import { useState,useEffect } from "react";
import { getColorsList, getLastColor } from "../helpers/getColors";

export const useColors = ()=>{
    const [color, setColor] = useState(getLastColor());
    const [colorsList, setColorList] = useState(getColorsList());
  
    const handleChangeColor = (e) =>{
      setColor(e.target.value);
    }
  
    const handleSubmitSaveColor = (e) =>{
      e.preventDefault();
  
      const copyColors = [color, ...colorsList]
      setColorList(copyColors)
    }

    useEffect(() => {
      localStorage.setItem("colors",JSON.stringify(colorsList))
    }, [colorsList])
    

    return { color, colorsList, handleChangeColor, handleSubmitSaveColor};
}