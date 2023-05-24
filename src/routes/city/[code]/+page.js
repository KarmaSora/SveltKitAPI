/*
   export async function load({params}) {
    let Citycode = params.code;

    const url =  "https://data.egyweb.se/api/world/getcities.php?code="+Citycode;
    
    const response = await fetch(url);
    const data = await response.json();
  
    return {data};
  }*/
  
  export const load= ({params}) =>{

  
    return {countryCode:params.code};
  }
  

  
  

  
  