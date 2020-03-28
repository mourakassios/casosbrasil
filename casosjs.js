<script>
	var casos = document.getElementById('ncasos')
	var confirmeds = 0
	var mortesdiv = document.getElementById('nobtos')
	var mortes = 0
	fetch("https://pomber.github.io/covid19/timeseries.json")
	.then(response => response.json())
	.then(data => {
    data["Brazil"].forEach(({ date, confirmed, recovered, deaths }) =>{
      confirmeds = (`${confirmed - recovered - deaths}`),
	  mortes = (`${deaths}`)
	})
	casos.innerText = confirmeds
	mortesdiv.innerText = mortes
  })
</script>