/* -------------------------- Javascript Code ----------------------------- */

let button = document.querySelector('button');
let input = document.querySelector('input');
let ol = document.querySelector('ol');

// ************** adding listItem ****************
button.addEventListener('click', function () {
   let item = document.createElement('li');
   item.innerText = input.value
   input.value = "";
   ol.appendChild(item);

   // ************** Delete Button ****************
   let dltBtn = document.createElement('button');
   dltBtn.innerText = 'Remove';
   dltBtn.classList.add('Remove');
   item.appendChild(dltBtn);
});

ol.addEventListener('click', function (e) {
   if (e.target.nodeName = "BUTTON");
   let listItem = e.target.parentElement;
   listItem.remove();
});



/* -------------------------- Jquery Code ----------------------------- */

// let $button = $('button');
// let $input = $('input');
// let $ol = $('ol');

// $button.on('click', function () {
//    let $item = $('<li></li>');
//    $item.text($input.val());
//    $input.val('');
//    $ol.append($item);

//    let $dltBtn = $('<button></button>');
//    $dltBtn.text('Remove');
//    $dltBtn.addClass('Remove');
//    $item.append($dltBtn);
// });

// $ol.on('click', 'button', function () {
//    $(this).parent().remove();
// });