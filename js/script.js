// Attraverso l'apposita API di Boolean,
// generare 10 indirizzi email e
// stamparli in pagina all'interno di una lista.

function mailGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function(data) {
            const res = data.response;
            console.log(res);
            generateMail(res);
        },
        error: function() {
            console.log('error');
        }
    });

    function generateMail(string) {

      const target = $('#list');

      target.append('<ul>' + string + '</ul>')

    };

function init() {
   mailGenerator();
}
document.addEventListener('DOMContentLoaded', init);
