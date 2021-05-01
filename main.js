
function up()
{
if(car2_y >=0)
{
car2_y = car2_y - 10;
console.log("When w is pressed, x = " + car2_x + " | y = " +car2_y);
uploadBackground();
uploadcar2();
}
}

function down()
{
if(car2_y <=500)
{
car_y = car_y + 10;
console.log("When s is pressed, x = " + car_x + " | y = " +car2_y);
uploadBackground();
uploadcar2();
}
}

function left()
{
if(car2_x >=0)
{
car_x = car_x - 10;
console.log("When a is pressed, x = " + car_x + " | y = " +car2_x);
uploadBackground();
uploadcar2();
}
}

function right()
{
if(car2_x <=700)
{
car2_x = car2_x + 10;
console.log("When d is pressed, x = " + car2_x + " | y = " +car2_x);
uploadBackground();
uploadcar2();
}
}

function up()
{
if(car1_y >=0)
{
car1_y = car1_y - 10;
console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}

function down()
{
if(car_y <=500)
{
car_y = car_y + 10;
console.log("When down arrow is pressed, x = " + car_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}

function left()
{
if(car1_x >=0)
{
car_x = car_x - 10;
console.log("When left arrow is pressed, x = " + car_x + " | y = " +car1_x);
uploadBackground();
uploadcar1();
}
}

function right()
{
if(car1_x <=700)
{
car1_x = car1_x + 10;
console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_x);
uploadBackground();
uploadcar1();
}
}
