<script>
   import Country from "$lib/components/Country.svelte";
   export let data;
 </script>
 
 
 <svelte:head>
   <title>Länder i America</title>
 </svelte:head>
 
 
 <h1>Länder i America</h1>
 <section>
   {#each data.list as country}
      <Country countryData={country} />
   {/each}
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
 