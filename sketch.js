const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball, ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ballOptions ={
        restitution: 2
    }

    var ballOptions1 ={
        restitution: 1
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,200,25,ballOptions);
    World.add(world,ball);
   
    ball2 = Bodies.circle(300,200,30,ballOptions1);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("teal");
    ellipse(ball.position.x,ball.position.y,25,25);
    fill("green");
    ellipse(ball2.position.x,ball2.position.y,30,30);     
}