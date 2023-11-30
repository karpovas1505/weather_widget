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
  #	80, 81, 82	#	Rain showers: Slight, moderate, and violent
  
  #	71, 73, 75	#	Snow fall: Slight, moderate, and heavy intensity
  #	77			#	Snow grains
  #	85, 86		#	Snow showers slight and heavy
  
  #	95 		    #	Thunderstorm: Slight or moderate
  #	96, 99 	    #	Thunderstorm with slight and heavy hail
  */
  


const weatherSymbols = { unknown: {symbol:"◌",codes:[]} ,
						 sun: {symbol:"☀",codes:[0 ]},
						 sun_and_clouds:{symbol:"🌤",codes:[1 ]},
						 clouds:{symbol:"☁",codes:[2, 3 ]},
						 rain:{symbol:"🌧",codes:[51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82 ]},
						 thunderstorm:{symbol:"🌩",codes:[95, 96, 99 ]},
						 snow:{symbol:"🌨",codes:[71, 73, 75, 77, 85, 86 ]} };


						 
const mapCodeToSymbol = (weatherCode)=>
{
	for (const weather in weatherSymbols)
	{
		if ( weatherSymbols[weather].codes.includes(weatherCode) )
		{
			return weatherSymbols[weather].symbol;
		}
	}
	return weatherSymbols.unknown.symbol;
}	


