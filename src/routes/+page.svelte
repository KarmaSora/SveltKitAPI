<script>
    import Country from "$lib/components/Country.svelte";
    let hasLoadData = false;
    let dataList = [];
  
    async function getCountries() {
       hasLoadData = false;
  
  
       const url = "https://data.egyweb.se/api/world/getcountries.php";
       const response = await fetch(url);
       dataList = await response.json();
  
       hasLoadData = true;
    }
  
    getCountries();
  </script>
  
  
  <svelte:head>
    <title>Länder i Europa</title>
  </svelte:head>
  
  
  <h1>Länder i Europa</h1>
  <section>
    {#if hasLoadData}
       {#each dataList as country}
          <Country countryData={country} />
       {/each}
    {/if}
  </section>
  
  
  <style>
    h1 {
       font-size: 2.8rem;
       margin-bottom: 1rem;
    }
  
  
    section {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       grid-gap: 1rem;
    }
  
  
    @media only screen and (max-width: 1200px) {
       section {
          grid-template-columns: 1fr 1fr 1fr;
       }
    }
  
  
    @media only screen and (max-width: 875px) {
       section {
          grid-template-columns: 1fr 1fr;
       }
    }
  
  
    @media only screen and (max-width: 700px) {
       section {
          grid-template-columns: 1fr;
       }
    }
  </style>
  