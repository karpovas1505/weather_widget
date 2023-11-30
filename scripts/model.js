
  
/*

  var request = new XMLHttpRequest();
  request.open('GET', geo_api_url, true);
  request.onload = function() { alert( this.responseText );	}
  request.send();

*/



const weatherAPI = 'https://api.open-meteo.com/v1/forecast';
	
class model{
	

	
	constructor()
	{
		this.onLoad = ()=>{};
		this.tempMin = [];
		this.tempMax = [];
		this.weatherCode = [];
	}
	
	setLocation(latitude,longitude,timeZone)
	{
		this.latitude = latitude;
		this.longitude = longitude;
		this.timeZone  = timeZone;
	}

	
	fetch()
	{
		let API_URL = new URL(weatherAPI);
		
		API_URL.searchParams.set('latitude',this.latitude);
		API_URL.searchParams.set('longitude',this.longitude);
		API_URL.searchParams.set('daily','weather_code,temperature_2m_max,temperature_2m_min');
		API_URL.searchParams.set('timezone',this.timeZone);
		
		let request = new XMLHttpRequest();
		request.open('GET', API_URL, true);
		request.onload = this.parseResponse.bind(this);
		request.send();
	}
	
	parseResponse(event)
	{
		let location = JSON.parse(event.srcElement.responseText);
		
		if ( !location.hasOwnProperty('daily') )
		{
			console.log('error: missing daily property');
			return;
		}
		
		if ( location.daily.hasOwnProperty('temperature_2m_max') )
		{
			this.tempMax  = location.daily.temperature_2m_max;
		}
		
		if ( location.daily.hasOwnProperty('temperature_2m_min') )
		{
			this.tempMin  = location.daily.temperature_2m_min;
		}
		
		if ( location.daily.hasOwnProperty('weather_code') )
		{
			this.weatherCode  = location.daily.weather_code;
		}
		
		this.onLoad();
	}
	
}