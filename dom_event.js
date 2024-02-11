
const btn = document.getElementById('click');

        btn.onclick = function (){
            document.body.style.backgroundColor = 'red';
        }

    // 2nd type  
    let makePink = document.getElementById('pink-btn');

      makePink.addEventListener('click', function(){
        document.body.style.backgroundColor = 'pink';
      })


    //   3rd type use all time ....
    document.getElementById('green-btn').addEventListener('click', function(){
        document.body.style.backgroundColor = 'green';
      })

    //   chenge text use inerHtml
    function onClick(){
        let nickName =  document.getElementById('action');
        nickName.innerHTML = 'Update by onclick attribute!!!';
       }

    // chenge text use addEventListener
    document.getElementById('Event-lisener').addEventListener('click', function(){
        document.getElementById('action').innerText = 'Update by Event Lisener Event!!!';
      })


    //   chenge text form input field
      document.getElementById('input-btn').addEventListener('click', function(){
        let inputField =  document.getElementById('input-field');
        let inputText = inputField.value;
 
        document.getElementById('input-text').innerText = inputText;
        inputField.value = ' ';
 
      })