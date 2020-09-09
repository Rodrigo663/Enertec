// type is 'success' or 'failure'

export const hideAlert = () => {
  var el = $('.alert');
  if (el) {
    el.remove();
  }
};
export const showAlert = (type, msg, time = 5000) => {
  hideAlert();
  const markup = `<div class='alert alert--${type}'>${msg}</div>`;
  $('body').append(markup);

  window.setTimeout(hideAlert, time);


  
};
