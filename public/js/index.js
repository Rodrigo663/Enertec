import '@babel/polyfill';
import * as EmailValidator from 'email-validator';
import axios from 'axios';
import { showAlert, hideAlert } from './alert.js'
import { sendData } from './send.js';

const more = $('#more');
const body = $('body');
if(more.length) {
  const carousel = $('.big-carousel-box ');
  const div = $('.blur-div');
 
  const cut  =$('#customers');
  const button = $('.x-button');
  const c = $('.section-carousel');
  function toggle() {
    more.toggleClass('u-none');
    c.toggleClass('u-static');
    cut.toggleClass('u-none');

    div.toggleClass('u-none');
    carousel.toggleClass('u-none');
    

  }
  button.on('click', () => {
    toggle();

  });
  
  more.on('click', (e) =>   {

    toggle();
   
  })  
}

//////////////////////////////////////
//////// HOME

const toggleButton = $('.toggle-button');

if(toggleButton.length) {
  const element = $('.right-navbar');
  const icon = $('#icon-1');
  const icon2 = $('#icon-2');
  toggleButton.on('click', (e) => {
    element.toggleClass("u-none");
    icon.toggleClass('u-none');
    body.toggleClass('u-static');
    icon2.toggleClass('u-none');
    
  

  });


}



//////////////////////////////////////
//////// SOLAR
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const input = $("#valor-da-luz");

var markup = `
<h1 class="u-center-text big-heading">Design Studio</h1>
<h4 class="u-center-text u-margin-bottom-big heading-tertiary" style='font-size: 1.8rem; text-transform: none;'>Salve dinheiro e seja feliz</h4>

<form id='the-form' action="">
  <span class="  input-symbol-euro">
    <input  class='u-margin-bottom-big input' max='100000' min='25' placeholder='conta de luz mensal média'  type="number" name="currency">
  </span>  
  <button id='btn-form' style='padding: 0.7rem 4rem;' class='u-center-block btn__animated btn--border btn--black'>Veja as suas economias</button>

`;
const myDesign= $('#design'); 
const form = $("#the-form");

if(input.length) {
  input.keyup(function () {
    input.val(this.value.match(/^[0-9_(.-)]*$/));
  });
}
if (form.length) {
  /^[40-49]*$/

  $("#btn-form").on("click", (e) => {
    const value = input.val();
    // Check if the user typed everything right
    if (value > 25 && value <= 100000) {
        
      e.preventDefault();
      const numberOfPanels = Math.round(value / 25);
      const nextYears = numberWithCommas(
        Math.round((74.856666666 * (300 * value)) / 100)
      );

      myDesign.toggleClass('little-bigger')
      const price = numberWithCommas(numberOfPanels * 800);
      form.empty();
      var html = `
              <div class="recommends u-margin-bottom-medium">
              <div class="recommends__elements">
              <div class="recommends-text">
                  <p class='sub-title recommends__little'>Enertec recommenda</p>
                  <p class="recommends__number">${numberOfPanels} painéis solares</p>
                  <a href="#" class="recommends__link">R$${price}</a>
  
              </div>
              
  
              <img class='recommends__image' src="/img/single-panel.png" alt="panel">
              </div>
  
  
              <div class="recommends__savings">
                  <p>
                  Economia estimada de 25 anos R$ ${nextYears}</p>
              </div>
              </div>
              <button onclick="location.reload();" style='padding: 0.7rem 4rem;' class='u-center-block btn__animated btn--border btn--black'>Redefinir</button>
    `;

      form.append(html);
    } else {
    }
  });
}




///////////////////////////////
////// THE-FORM 
const bigForm = $('.big-form');

if(bigForm.length) {
    const button = $('.btn--green');
    let  interest;
    let object;
    const regex = '^(?:0|\\(?\\+4[0-9]\\)?\s?|0033\\s?)[1-79](?:[-.\\s]?\\d\\d){4}$';


    button.on('click',async(e) => {

      if(EmailValidator.validate($('.big-form__email').val()) && 
      $('.big-form__name').val().length > 3 &&
      $('.big-form__last-name').val().length > 3 &&
      document.querySelector('.big-form__cellphone').checkValidity()) {
        e.preventDefault();
        const radio1 = $('#exampleRadios1').is(':checked');
        const radio2 = $('#exampleRadios2').is(':checked'); 
        
        object = {
          nome: $('.big-form__name').val(),
          sobrenome: $('.big-form__last-name').val(),
          
          email: $('.big-form__email').val(),
          número: $('.big-form__cellphone').val(),
          interesse: radio1 ? 'painel-solar' : radio2 ? 'automação' : 'ambos'
        };  
        button.text('Enviando...');
        
        await sendData(object);


        button.text('Enviar');


      } else {
          console.log('');
      };

      //e.preventDefault();
     // console.log('What you ' +  $('.big-form__last-name').val().length);
      // if($('.big-form__last-name').val().length > 3 && $('.big-form__name').val().length > 3 && 
      // $('.big-form__email').val())
      // e.preventDefault();


    });

}