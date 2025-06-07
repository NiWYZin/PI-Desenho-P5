
//Constantes
let gravidade = -0.4, atrito = 0.99;
//Cordenadas
let origem,posicaoMassa;
let massaX, massaY;
//Velocidade, angulo, e pendulo
let velocidade = 0,angulo,comprimento,aceleracao;
//Sliders
let SliderAtrito,SliderComprimento;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angulo = PI / random(1,6);
  origem =[width/2,height/2];

  SliderAtrito = createSlider(1,3);
  SliderAtrito.position(10,0);
  SliderAtrito.size(100);

  SliderComprimento = createSlider (20,400);
  SliderComprimento.position(10,50);
  SliderComprimento.size (100);

}

function draw() {
    background(0,0,0,50);
    comprimento = SliderComprimento.value();
    atualizarAtrito();
    FrenteTras()
    fisica(gravidade,comprimento);
    
    
    PosDaMassa();
    desenharPendulo()
    

}
function FrenteTras(){
    if(keyIsDown(LEFT_ARROW))
        velocidade += 0.01;
     if(keyIsDown(RIGHT_ARROW))
        velocidade -= 0.01;

}

function fisica(gravidade, comprimento){
    let aceleracao;
    aceleracao = (gravidade / comprimento) * sin(angulo);
    velocidade += aceleracao;
    velocidade *= atrito;
    angulo += velocidade;
}

function PosDaMassa(){

    massaX = origem[0] + comprimento * sin(angulo);
    massaY = origem[1] + comprimento * cos(angulo);
    posicaoMassa = [massaX,massaY];

}

function atualizarAtrito(){

    switch(SliderAtrito.value()){
        case 1: atrito = 1.0;break;
        case 2: atrito = 0.7;break;
        default: atrito = 0.99;
    }

}
function desenharPendulo(){

    strokeWeight(5);
    stroke(255,255,0)
    fill(255,0,0);
    line(origem[0],origem[1],posicaoMassa[0],posicaoMassa[1]);


    fill(255,0,0);
    circle(posicaoMassa[0],posicaoMassa[1],100);

}

