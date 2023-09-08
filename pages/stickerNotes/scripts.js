console.log('testando');

function show(){
    let createBox = document.getElementsByClassName('createBox')[0];
    let textArea = document.getElementById('userInput');
    createBox.style.display = 'block';

}
function hide(event){
    if (event.key === 'Enter'){

        let input = document.getElementById('userInput').value;
        divStyle(input);
        input = '';
        event.target.closest('.createBox').style.display = 'none';
        console.log('teste');
        }b
  
    }

function divStyle(text){
    let notes = document.getElementsByClassName('notes')[0];
    let div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = '<div class="detalhes">'+'<p>'+text+'</p>'+'</div>';

    notes.appendChild(div);
}



