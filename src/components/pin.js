
function getClass(className){
	var ele = document.getElementsByTagName("*");
	var classEle = [];
	for(var i=0;i<ele.length;i++){
		var cn = ele[i].className;
		if(cn === className){
			classEle.push(ele[i]);
		}
	}
	return classEle;
}

function Tag(ele , x , y , z, context){
	this.ele = ele;
	this.x = x;
	this.y = y;
	this.z = z;
	Object.assign(this, {...context})
	this.animate()
}

Tag.prototype = {
	rotateX: function(){
		let cos = Math.cos(this.angleY);
		let sin = Math.sin(this.angleY);
		let x1 = this.x * cos - this.z * sin;
		let z1 = this.z * cos + this.x * sin;
		this.x = x1;
		this.z = z1;
	},
	rotateY: function(){
		let cos = Math.cos(this.angleY);
		let sin = Math.sin(this.angleY);
		let x1 = this.x * cos - this.z * sin;
		let z1 = this.z * cos + this.x * sin;
		this.x = x1;
		this.z = z1;
	},
	move: function() {
		let scale = this.fallLength/(this.fallLength-this.z);
		let alpha = (this.z+this.RADIUS)/(2*this.RADIUS);
		this.ele.style.fontSize = 15 * scale + "px";
		this.ele.style.opacity = alpha+0.5;
		this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
		this.ele.style.zIndex = parseInt(scale*100);
		this.ele.style.left = this.x + this.CX - this.ele.offsetWidth/2 +"px";
		this.ele.style.top = this.y + this.CY - this.ele.offsetHeight/2 +"px";
	},
	animate: function(){
		let that = this;
		setInterval(function() {
			that.rotateX();
			that.rotateY();
			that.move();
		} , 17)
	}
}

export default class {

	initEnv(){
		this.tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag");
		this.paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
		this.CX = this.paper.offsetWidth/2;
		this.CY = this.paper.offsetHeight/2;
		this.EX = this.paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft;
		this.EY = this.paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;
		this.RADIUS =300;
		this.fallLength = 500;
		this.tags=[];
		this.angleX = Math.PI/500;
		this.angleY = Math.PI/500;
		if("addEventListener" in window){
			this.paper.addEventListener("mousemove" , (event) => {
				let x = event.clientX - this.EX - this.CX;
				let y = event.clientY - this.EY - this.CY;
				this.angleY = x*0.0001;
				this.angleX = y*0.0001;
			});
		}else {
			this.paper.attachEvent("onmousemove" , (event) => {
				let x = event.clientX - this.EX - this.CX;
				let y = event.clientY - this.EY - this.CY;
				this.angleY = x*0.0001;
				this.angleX = y*0.0001;
			});
		}
	}

	initEle(){
		for(let i=0;i<this.tagEle.length;i++){
			let a , b;
			let k = (2*(i+1)-1)/this.tagEle.length - 1;
			a = Math.acos(k);
			b = a*Math.sqrt(this.tagEle.length*Math.PI);
			let x = this.RADIUS * Math.sin(a) * Math.cos(b);
			let y = this.RADIUS * Math.sin(a) * Math.sin(b); 
			let z = this.RADIUS * Math.cos(a);
			let t = new Tag(this.tagEle[i] , x , y , z, this);
			this.tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
			this.tags.push(t);
			t.move();
		}
	}

    init(){
		this.initEnv()
		this.initEle()
    }
}