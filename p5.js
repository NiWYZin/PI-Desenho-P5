

//Constantes
let gravidade = 0.7, atrito = 0.99;

//Cordenadas polares, e pontos de origem
let origem,posicaoMassa;
let massaX, massaY;

//Velocidade, angulo, e comprimento das cordas
let velocidade = 0,angulo,comprimento = 350,aceleracao;

//Slider
let SliderAtrito;




function setup() {

  createCanvas(windowWidth, windowHeight);
  
  //define o angulo em radianos entre 30 e 180 graus
  angulo = PI / random(1,6);

  //define os pontos de origem, da corda, e das cordenadas polares da massa
  origem =[width/2,(height/2)-350];


  //cria o slider

  SliderAtrito = createSlider(1,3);
  SliderAtrito.position(width-250,50);
  SliderAtrito.size(200);


}

function draw() {
    //O cenário
    background(95, 205, 217);
    desenharCenario();

    //A fisica e algumas outras coisas interativas
    SliderDeAtualizarAtrito();
    empurrarbalanço()
    fisica(gravidade,comprimento);

    //A criança e o balanço 
    PosDaMassa();
    desenharPendulo();

    

}
function empurrarbalanço(){
    if(keyIsDown(LEFT_ARROW))
        velocidade -= 0.005;
     if(keyIsDown(RIGHT_ARROW))
        velocidade += 0.005;

}

function fisica( gravidade, comprimento){
    let aceleracao;
    aceleracao = (-gravidade / comprimento) * sin(angulo);
    velocidade += aceleracao;
    velocidade *= atrito;
    angulo += velocidade;
}

function PosDaMassa(){

    massaX = origem[0] + comprimento * sin(angulo);
    massaY = origem[1] + comprimento * cos(angulo);
    posicaoMassa = [massaX,massaY];

}

function SliderDeAtualizarAtrito(){

    fill(255,255,255);
    textSize(30)
    text("Troque o atrito",width-250,50);

if(SliderAtrito.value() == 3){
    atrito = 0.99;
} else if (SliderAtrito.value() == 2){
atrito = 1;
} else 
    atrito = 0.7;


}
function desenharPendulo(){

    
    noStroke();
    fill(92, 56, 12);
    rect(posicaoMassa[0]-60,posicaoMassa[1]-15,120, 20, 50);

    desenharCriança(posicaoMassa[0], posicaoMassa[1]);

    strokeWeight(5);
    stroke(150)
    line(origem[0]-60,origem[1],posicaoMassa[0]-50,posicaoMassa[1]);
    line(origem[0]+60,origem[1],posicaoMassa[0]+50,posicaoMassa[1]);

    desenharBalanço(origem[0], origem[1]);

    noStroke();

}
function desenharCriança(x, y){
    fill(50, 100, 255);
    circle(x,y-50, 100);
    
    fill(255, 153, 85);
    circle(x,y-100, 100);
    circle(x+50,y-100, 30);

    fill(255);
    circle(x+20,y-110, 20);
    fill(0);
    circle(x+20,y-110, 15);

    circle(x+35,y-75, 15);

    fill(50, 100, 255);

    rect((x-50),(y-50)-130, 90, 50, 20);
    rect((x-50)+30,(y-50)-100, 90, 20, 20);
}

function desenharBalanço(x, y){
    strokeWeight(15);
    stroke(92, 56, 12);
    line(x-150,y-10, x+150, y-10);
    line(x-150,y-10, x-150, y+400);
    line(x+150,y-10, x+150, y+400);


}

function desenharCenario(){

    noStroke();
    fill(255,255,0);
    circle(0, 0, 700);
    fill(50, 150, 0);
    rect(0, (height+100)/2, width, height/2);

}