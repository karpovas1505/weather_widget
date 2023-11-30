
const geoAPI = 'http://ip-api.com/json/';
class geoHelper{
	
	constructor()
	{
		this.onLoad = ()=>{};
		this.latitude = 0.0;
		this.longitude = 0.0;
		this.timeZone = '';
	}
	
	fetch()
	{
		let apiUrl = new URL(geoAPI);
		let request = new XMLHttpRequest();
		request.open('GET', apiUrl, true);
		request.onload = this.parseResponse.bind(this);
		request.send();
	}
	
	parseResponse(event)
	{
		let geoData = JSON.parse(event.srcElement.responseText);

		if ( geoData.hasOwnProperty('lat') )
		{
			this.latitude  = geoData.lat;
		}
		
		if ( geoData.hasOwnProperty('lon') )
		{
			this.longitude  = geoData.lon;
		}
		
		if ( geoData.hasOwnProperty('timezone') )
		{
			this.timeZone  = geoData.timezone;
		}
		
		this.onLoad();
	}

}