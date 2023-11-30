

class view{
	
	constructor(model)
	{

		this.widget = document.getElementsByName("widget")[0];
		this.model  = model
		this.clear();
	}
	
	clear()
	{	
		let range = document.createRange();
		range.selectNodeContents(this.widget);
		range.deleteContents();
	}
	
	buildItem(symbol_icon,tempMin,tempMax)
	{
		let container = document.createElement("div");
		container.classList.add("content");
		
		let symbol = document.createElement("div");
		symbol.classList.add("symbol");
		let symbolText = document.createTextNode(symbol_icon);
		symbol.appendChild(symbolText);
		
		let caption = document.createElement("div");
		caption.classList.add("caption");
		let captionText = document.createTextNode(`${tempMin}/${tempMax}°C`);
		caption.appendChild(captionText);
		
		container.appendChild(symbol);
		container.appendChild(caption);
		
		return container;
	}

	update()
	{
	  	this.clear();
		for(let day = 0; day < this.model.weatherCode.length ; day++ )
		{
			let weatherCode = parseInt(this.model.weatherCode[day]);
			let symbol = mapCodeToSymbol(weatherCode);
			let weatherNode = this.buildItem(symbol, this.model.tempMin[day], this.model.tempMax[day] );
			this.widget.appendChild(weatherNode);
		}
	}
	
	
}