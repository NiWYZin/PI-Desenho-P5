let x,y;
let comprimento = 0;
let anguloRad;
let velocidadeAng = 0;
let gravidade = -0.4;
let Atrito = 0.99;
let origem;
let massa;
let circuloY;



function setup() {
  createCanvas(windowWidth, windowHeight);

  anguloRad = Math.PI / random(1,6);

  slider = createSlider(1,2);
  slider.position(10,0);
  slider.size(100);

  slider2 = createSlider (2,400);
  slider2.position(10,50);
  slider2.size (100);

  origem =[width/2,height/2];
  botao = createButton("relancar");
  botao.position(10,20);
  botao.mousePressed(relancar);
}

function draw() {
    comprimento = slider2.value();
    origem =[width/2,height/2];
    background(0,0,0,50);
    if(slider.value() == 1){
        Atrito = 1.0;
        velocidadeAng = 0.1;
        
    } else if (slider.value() == 2){
        Atrito = 0.99;
    }


    fisica(gravidade,comprimento);
    posY()

    strokeWeight(5);
    stroke(255,255,0)
    fill(255,0,0);
    line(origem[0],origem[1],massa[0],massa[1]);
    line(origem[0]+50,origem[1],massa[0]+50,massa[1]);
    fill(255,0,0);
    circle(massa[0],massa[1],40);
    circle(massa[0]+50,massa[1],40);
    

}

function fisica(gravidade, comprimento){
    let AceleracaoAngular;
    AceleracaoAngular = (gravidade / comprimento) * sin(anguloRad);
    velocidadeAng += AceleracaoAngular;
    velocidadeAng *= Atrito;
    anguloRad += velocidadeAng;
}
function relancar(){
    anguloRad = Math.PI / random(1,6);
    velocidadeAng = 0;
}

function posY(){

    x = origem[0] + comprimento * sin(anguloRad);
    y = origem[1] + comprimento * cos(anguloRad);
    massa = [x,y];

}


