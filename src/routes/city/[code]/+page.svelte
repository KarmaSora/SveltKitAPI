<script>
//  import { page } from '$app/stores';
  import City from '$lib/components/City.svelte';
  export let data;

  const countryCode = data.countryCode;
  console.log(countryCode);

  async function testData(){

    const url =  "https://data.egyweb.se/api/world/getcities.php?code="+countryCode;
    
    const response = await fetch(url);
   return await response.json();
  
  }
</script>


<section>

  {#await testData()}
    <p>looding</p>
  {:then testData } 
  {#each testData.list as city}
  <City CityData={city} />
{/each}
  {/await}
 
</section>
  