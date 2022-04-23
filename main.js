things_to_draw = ["pen", "paper", "book", "bottle", "socks", "apple", "pizza"];
timer_counter = "0";
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = "0";
function setup() {
    canvas = createCanvas(280, 280);
    canvas.position(500, 200);
    background("white");
    synth = window.speechSynthesis;    
}

function updateCanvas(){
background("white");
document.getElementById("name_of_sketch_to_draw").innerHTML = Element_of_array;
}


random_no = Math.floor((Math.random() * things_to_draw.length) + 1);
Element_of_array = things_to_draw[random_no];
console.log(Element_of_array);
document.getElementById("name_of_sketch_to_draw").innerHTML = Element_of_array;

function draw() {
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
line(pmouseX , pmouseY , mouseX , mouseY);    
}
}
function check_sketch(){
timer_counter++
if(timer_counter>400){
timer_counter = 0;
timer_check = "completed";
}
if(timer_check = "completed"){
timer_check = "";
answer_holder = "";
}   
}
