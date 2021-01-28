const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,division1,particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 270;

function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(700,625,1400,20)
    division1 = new Divisions(5,515,15,270)
    division2 = new Divisions(265+50,515,15,270)
    division3 = new Divisions(525+50,515,15,270)
    division4 = new Divisions(785+50,515,15,270)
    division5 = new Divisions(1045+50,515,15,270)
    division6 = new Divisions(1305+50,515,15,270)

    for (var i = 40; i<=width; i=i+50){
        fill("black")
        plinkos.push(new plinko(i,120,10))
    }

    
    for (var i = 40; i<=width; i=i+50){
        fill("black")
        plinkos.push(new plinko(i,202,10))
    }

    
    for (var i = 40; i<=width; i=i+50){
        fill("black")
        plinkos.push(new plinko(i,271,10))
    }
}

function draw(){
    background("lightBlue");
    if(frameCount % 30 === 0){
        particles.push(new Particle(random(0, 1300), 10,10,random (0 ,0)))        
      }

      for(var i = 0; i < particles.length; i++){
        particles[i].display();
      }
    Engine.update(engine);
    for(var p=0;p<plinkos.length;p++){
        plinkos[p].display()
        }

    
    console.log(mouseY)
    console.log(mouseX)
    division1.display()
    division2.display()
    division3.display()
    division4.display()
    division5.display()
    division6.display()
    
 
    ground.display();
}