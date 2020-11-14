const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box, ground, box2, box3;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(400,200,50,50);
    ground = new Ground(400,380,800,20);
    box2 = new Box(430,100,50,100);
    box3 = new Box(200,200,50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    box.display();
    ground.display();
    box2.display();
    box3.display();

}