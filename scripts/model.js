 /*#Wearther api sample
  #https://api.open-meteo.com/v1/forecast?latitude=48.7194&longitude=44.5018&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow
  
  #	Code		#	Description
  ####################################################################
  #	0		    #	Clear sky
  #	1,  2, 3	#	Mainly clear, partly cloudy, and overcast
  #	45, 48		#	Fog and depositing rime fog
  #	51, 53, 55	#	Drizzle: Light, moderate, and dense intensity
  #	56, 57		#	Freezing Drizzle: Light and dense intensity
  #	61, 63, 65	#	Rain: Slight, moderate and heavy intensity
  #	66, 67		#	Freezing Rain: Light and heavy intensity
  #	71, 73, 75	#	Snow fall: Slight, moderate, and heavy intensity
  #	77			#	Snow grains
  #	80, 81, 82	#	Rain showers: Slight, moderate, and violent
  #	85, 86		#	Snow showers slight and heavy
  #	95 *		#	Thunderstorm: Slight or moderate
  #	96, 99 *	#	Thunderstorm with slight and heavy hail
  */
  
  
/*

  var request = new XMLHttpRequest();
  request.open('GET', geo_api_url, true);
  request.onload = function() { alert( this.responseText );	}
  request.send();

*/

const geo_api_url = 'http://ip-api.com/json/';
const weather_api_url = 'https://api.open-meteo.com/v1/forecast';
	
class model{
	

	
	constructor(latitude,longitude)
	{
		this.latitude = latitude;
		this.longitude = longitude;
		this.on_loaded = ()=>{};
		this.temp_min = [];
		this.temp_max = [];
		this.weather_code = [];
	}
	

	
	load()
	{
		let api_url = new URL(weather_api_url);
		
		api_url.searchParams.set('latitude',this.latitude);
		api_url.searchParams.set('longitude',this.longitude);
		api_url.searchParams.set('daily','weather_code,temperature_2m_max,temperature_2m_min');
		api_url.searchParams.set('timezone','Europe/Moscow');
		
		let request = new XMLHttpRequest();
		request.open('GET', api_url, true);
		request.onload = this.parse_response.bind(this);
		request.send();
	}
	
	parse_response(event)
	{
		let location = JSON.parse(event.target.responseText);
		
		if ( !location.hasOwnProperty('daily') )
		{
			console.log('error: missing daily property');
			return;
		}
		
		if ( location.daily.hasOwnProperty('temperature_2m_max') )
		{
			this.temp_max  = location.daily.temperature_2m_max;
		}
		
		if ( location.daily.hasOwnProperty('temperature_2m_min') )
		{
			this.temp_min  = location.daily.temperature_2m_min;
		}
		
		if ( location.daily.hasOwnProperty('weather_code') )
		{
			this.weather_code  = location.daily.weather_code;
		}
		
		this.on_loaded();

	}
	
}