class controller{
	
	constructor()
	{
	   
	   this.model = new model();
	   this.view = new view(this.model);
	   this.geo = new geoHelper();
	   
	   this.geo.onLoad = this.onLocationRecieved.bind(this);
	   this.model.onLoad = this.onWeatherRecieved.bind(this);
	}
	
	initialize()
	{
	  this.geo.fetch()
	}
	
	onLocationRecieved()
	{
	   this.model.setLocation(this.geo.latitude,this.geo.longitude,this.geo.timeZone);
	   this.model.fetch();
	}
	
	onWeatherRecieved()
	{
	   this.view.update();
	}
	
}