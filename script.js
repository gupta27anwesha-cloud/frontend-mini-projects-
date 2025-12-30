const button=
document.getElementById('colorBtn');
const greeting=
document.getElementById(greeting);
button.addEventListener('click',() =>
{
    //This changes the text color when you click the button 
    greeting.style.color='blue';
    alert('You clicked the button! JavaScript is working!');
});