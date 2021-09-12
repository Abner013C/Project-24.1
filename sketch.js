const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;
var marble1, marble2, marble3, marble4, marble5, marble6;
var roof;
var rightwall, leftwall;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,200,75);
    stone = new Stone(300,200,100,100);
    iron = new Iron(600,200,70,100);
    marble1 = new Marble(400,200,5);
    marble2 = new Marble(410,200,5);
    marble3 = new Marble(420,200,5);
    marble4 = new Marble(430,200,5);
    marble5 = new Marble(440,200,5);
    marble6 = new Marble(450,200,5);
    roof = new Plane(600,0,1200,20);
    rightwall = new Plane(0,300,20,600);
    leftwall = new Plane(1200,300,20,600);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    marble1.display();
    marble2.display();
    marble3.display();
    marble4.display();
    marble5.display();
    marble6.display();
    roof.display();
    rightwall.display();
    leftwall.display();
}