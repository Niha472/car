var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car_width=100;
car_height=100;
car_x=10;
car_y=10;
car_image="car2.png";
background_img="racing.gif"
function add(){
    car_image_tag=new Image();
    car_image_tag.src=car_image;
    car_image_tag.onload=uploadrover;
    mars_image_tag=new Image();
    mars_image_tag.src=background_img;
    mars_image_tag.onload=uploadbackground;
}
function uploadrover(){
    ctx.drawImage(car_image_tag,car_x,car_y,car_width,car_height )
}
function uploadbackground(){
    ctx.drawImage(mars_image_tag,0,0,canvas.width,canvas.height )
}
window.addEventListener("keydown",Mykeydown);
function Mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38')
    {
        console.log("up_key_press");
        up();
    }
    if(keypress=='40')
    {
        console.log("down_key_press");
        down();
    }
    if(keypress=='37')
    {
        console.log("left_key_press");
        left();
    }
    if(keypress=='39')
    {
        console.log("right_key_press");
        right();
    }
}
function up(){
    if(rover_y>=0)
    {
        console.log("up_key_press"+car_x,car_y)
        car_y= car_y-10
        uploadbackground()
        uploadrover()
    }

}
function down(){
    if(car_y<=500)
    {
        console.log("down_key_press"+rover_x,rover_y)
        car_y= car_y+10
        uploadbackground()
        uploadrover()
    }
    }
    function left(){
        if(car_x>=0)
        {
            console.log("left_key_press"+car_x,car_y)
            car_x= car_x-10
            uploadbackground()
            uploadrover()
        }
        }
        function right(){
            if(car_x<=700)
            {
                console.log("right_key_press"+car_x,car_y)
                car_x= car_x+10
                uploadbackground()
                uploadrover()
            }
            }