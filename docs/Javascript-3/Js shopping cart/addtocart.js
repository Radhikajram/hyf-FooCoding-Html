 var i = 1;      // COUNTER, FOR CHECKBOX ID.

function myFunction(obj) {

    var  cartdiv = document.getElementById('addtocart');
  
  

      if (obj.value !== '') {

         let div = document.createElement('div');
          div.classList.add('cartrow');

          var chk = document.createElement('input');  // CREATE CHECK BOX.
          chk.setAttribute('type', 'checkbox');       // SPECIFY THE TYPE OF ELEMENT.
          chk.setAttribute('id', 'productchk' + i.toString());     // SET UNIQUE ID.
          chk.setAttribute('value', obj.value);
          chk.setAttribute('name', 'products');

          var lbl = document.createElement('label');  // CREATE LABEL.
          lbl.setAttribute('for', 'productlbl' + i.toString());

          // On click of checkbox changes the background color of label.

          chk.onclick =  function(e) {
              if (e.target.checked  ==  true)
            
              {
               // lbl.style.setProperty("text-decoration", "line-through")
                lbl.style.backgroundColor="green"
              }
              else 
                lbl.style.backgroundColor="#ddeedd"
      

          };

          // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
          lbl.appendChild(document.createTextNode(obj.value));

          var btn = document.createElement("BUTTON");   // Create a <button> element
          btn.className = "removebtn";   
          btn.innerHTML = "Remove";   

          var br = document.createElement("br");
          // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
          div.appendChild(chk);
          div.appendChild(lbl);
          div.appendChild(btn);
          div.appendChild(br);

          cartdiv.appendChild(div);

          obj.value = '';
          document.getElementById(obj.id).focus();

          i = i + 1;


      }

      CheckforDelete();
}

// Loop through the class of removebtn and remove the item from cart.

function  CheckforDelete()
{
    var removeCartItem  = document.getElementsByClassName('removebtn');


        for(var i = 0; i < removeCartItem.length;i++)
        {
            var button  = removeCartItem[i];
            button.addEventListener(('click'),function(event)
            {
                var buttonClicked  = event.target;
                buttonClicked.parentElement.remove();
            
            })
        }
}

