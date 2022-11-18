window.onload = function()
{
	let Observer = new IntersectionObserver((e)=>{
		e.forEach((박스)=>{
			if(박스.isIntersecting)
			{
				박스.target.style.opacity = 1;
			}
			else
			{
				박스.target.style.opacity = 0;
			}
		});
	});
	
	let Contents = document.getElementsByClassName('animation-content');
	for(let i = 0; i < Contents.length; i++)
	{
		Observer.observe(Contents[i]);
	}





	let Observer2 = new IntersectionObserver((e)=>{
		e.forEach((박스)=>{
			if(박스.isIntersecting)
			{
				박스.target.style.left = "-20%";
			}
			else
			{
				박스.target.style.left = "0%";
			}
		});
	});
	
	let Contents2 = document.getElementsByClassName('animation-left');
	for(let i = 0; i < Contents2.length; i++)
	{
		Observer2.observe(Contents2[i]);
	}


	var DictObj = {};

	let Observer3 = new IntersectionObserver((e)=>{
		e.forEach((박스)=>{
			if(박스.isIntersecting)
			{
				// 박스.target.style.left = "-20%";
				// console.log(박스.target.textContent);

				var FullText = 박스.target.textContent;
				if (박스 in DictObj)
				{}
				else
				{
					DictObj[박스] = 박스.target.textContent;
				}
				
				var i = 0;
				let Text = "";
				setInterval(function Typing(){
					if(FullText[i] != undefined)
					{
						Text += FullText[i];
						박스.target.textContent = Text;
						i += 1;
					}
				}, 100);
			}
			else
			{
				if (박스 in DictObj)
				{
					박스.target.textContent = DictObj[박스];
				}
				// 박스.target.style.left = "0%";
			}
		});
	});
	
	let Contents3 = document.getElementsByClassName('animation-typing');
	for(let i = 0; i < Contents3.length; i++)
	{
		Observer3.observe(Contents3[i]);
	}
}