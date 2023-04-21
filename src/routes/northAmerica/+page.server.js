export async function load() {
    const url =  "https://data.egyweb.se/api/world/getcountries.php?continent=North america";
    
    const response = await fetch(url);
    const list = await response.json();
  
  
    return { list };
  }
  