
//Constantes
let gravidade = 0.7, atrito = 0.99;
//Cordenadas
let origem,posicaoMassa;
let massaX, massaY;
//Velocidade, angulo, e Pendulo
let velocidade = 0,angulo,comprimento = 350,aceleracao;
//Sliders
let SliderAtrito,SliderComprimento;


function setup() {

  createCanvas(windowWidth, windowHeight);
  //define o angulo em radianos entre 30 e 180 graus
  angulo = PI / random(1,6);

  //define os pontos de origem, da corda, e das cordenadas polares da massa
  origem =[width/2,height/2];


  //cria os sliders

  SliderAtrito = createSlider(1,3);
  SliderAtrito.position(10,0);
  SliderAtrito.size(100);


}

function draw() {
    background(95, 205, 217);

    atualizarAtrito();
    FrenteTras()
    fisica(gravidade,comprimento);

    PosDaMassa();
    desenharCenario()
    
}
function FrenteTras(){
    if(keyIsDown(RIGHT_ARROW))
        velocidade += 0.001;
     if(keyIsDown(LEFT_ARROW))
        velocidade -= 0.001;

}

function fisica(gravidade, comprimento){
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

function atualizarAtrito(){
    if (SliderAtrito.value() == 3)
        atrito = 0.99;
    else if (SliderAtrito.value() == 2)
            atrito = 1;
        else    
            atrito = 0.7
    

}
function desenharCenario(){

    fill(255,255,0);
    circle(0, 0, 500);
    
    fill(50, 150, 0);
    rect(0, (height+100)/2, width, height/2);

    noStroke();
    fill(92, 56, 12);
    rect(posicaoMassa[0]-50,posicaoMassa[1]-150,100, 20, 100);

    strokeWeight(5);
    stroke(150)
    line(origem[0]+50,origem[1]-150,posicaoMassa[0]+40,posicaoMassa[1]-150);
    line(origem[0]-50,origem[1]-150,posicaoMassa[0]-40,posicaoMassa[1]-150);

    noStroke();
}