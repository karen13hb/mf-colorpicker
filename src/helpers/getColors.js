export const getColorsList =()=>
    JSON.parse(localStorage.getItem("colors")) || []

export const getLastColor = () =>{
     const listColors = getColorsList();

     return listColors[0] || "#732812";
}
