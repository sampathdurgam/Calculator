

const dis = document.getElementById("dis");


function display(input){
    dis.value += input;

}
function clr(){
    dis.value = "";

}
function calculate(){
    try{
    dis.value = eval(dis.value);
    }
    catch(error){
        dis.value = "ERROR"
    }

}
function del()
{
    dis.value = dis.value.slice(0, -1);
}