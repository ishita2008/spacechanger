var plane
var backImg
var spaceship1
var gameState = "play"
  

function preload(){

	backImg=loadImage("assests/background1.jpg")
	spaceship1Image=loadImage("assests/spaceship1.png")
	spaceship2Image=loadImage("assests/spaceship2.png")
	spaceship3Image=loadImage("assests/spaceship3.png")
	spaceship6Image=loadImage("assests/spaceship6.png")
	spaceship5Image=loadImage("assests/spaceship5.png")
	spaceshipchanger=loadImage("assests/spaceshipchanger.png")
	obstacleImg=loadAnimation("assests/plane1.png","assests/plane2.png","assests/plane3b.png","assests/plane4bb.png")
	blastImg=loadAnimation("assests/blast.png","assests/blast2.png","assests/blast3.png","assests/blast4.png")
}
 

function setup(){
	
	createCanvas(500,800)

	sky=createSprite(250,400)
	sky.addImage(backImg)

	spaceship1=createSprite(270,500,150,300)
	spaceship1.addImage(spaceship1Image)
	
	spaceship1.scale=0.8

	

	changerGroup=new Group()

	obstacleGroup=new Group();

	

	






}

function draw(){

	background(0)


	if(gameState==="play"){

		sky.velocityY=+1

		if(keyDown("left_arrow")){
			spaceship1.x=spaceship1.x-3;
		}

		if(keyDown("space")){
			spaceship1.velocityY=-10
		}

		spaceship1.velocityY = spaceship1.velocityY + 0.8

		if(keyDown("right_arrow")){
			spaceship1.x=spaceship1.x+3
		}

		  
		if(sky.y > 700){
			sky.y = 300
		  }


	}

	
	

		
	


	spawnShipChanger();

	if(changerGroup.isTouching(spaceship1)){
		switch(round(random(1,5))){

			case 1:spaceship1.addImage(spaceship1Image);
			break;
			case 2:spaceship1.addImage(spaceship2Image);
			break;
			case 3:spaceship1.addImage(spaceship3Image);
			break;
			case 4:spaceship1.addImage(spaceship5Image);
			break;
			case 5:spaceship1.addImage(spaceship6Image);
			break;
		
			default: break;
			
		
		}
		changerGroup[0].destroy();
	}

	
	
	











    spawnobstacleChanger();



	
   drawSprites();

}
function spawnShipChanger(){
	if(frameCount%240===0){
	x=round(random(20,480))

		shipChanger=createSprite(x,0)
		shipChanger.addImage(spaceshipchanger)
		
		shipChanger.velocityY=+2
		shipChanger.scale=0.3
		changerGroup.add(shipChanger)


	}
}
function spawnobstacleChanger(){
	if(frameCount%240===0){

		x=round(random(20,480))


		obstacle=createSprite(x,0)
		obstacle.velocityY=3
		obstacle.addAnimation("obstacle",obstacleImg)
		obstacle.y = Math.round(random(70,250))
		obstacleGroup.add(obstacle);



	}
}




