<script>
    export let CityData;
  </script>
  
  <section>
    <h1>{CityData.Name}</h1>
    <table>
       <tr>
          <th>Namn </th>
          <td>{CityData.Name}</td>
       </tr>
       <tr>
          <th>ID</th>
          <td>{CityData.ID}</td>
       </tr>
       <tr>
          <th>Code</th>
          <td>{CityData.CountryCode}</td>
       </tr>
       <tr>
          <th>distrikt</th>
          <td>{CityData.District}</td>
       </tr>
    </table>
  </section>
