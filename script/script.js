const darkModeButton = document.querySelector("[type=checkbox]")


function changeColors(){
  if(darkModeButton.checked == true){
    document.body.style.setProperty('--cor-6', '#f7f9ff');
    document.body.style.setProperty('--cor-0', '#1D1F29');
    document.body.style.setProperty('--cor-1', '#63687D');
    document.body.style.setProperty('--cor-7', 'white');
    document.body.style.setProperty('--cor-4', '#F1F3FA');
    document.body.style.setProperty('--cor-8', '#E1E4F0');
  }
  else{
    document.body.style.setProperty('--cor-6', '#20222F');
    document.body.style.setProperty('--cor-0', '#FFFFFF');
    document.body.style.setProperty('--cor-1', '#8C98C6');
    document.body.style.setProperty('--cor-7', '#1D1F29');
    document.body.style.setProperty('--cor-4', '#252b42');
    document.body.style.setProperty('--cor-8', '#333A55');
  }
  
}