/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
});

loginFormElement.addEventListener('submit',function(event){
    event.preventDefault();
    // todo 1 :mendapatkan input email dan password pengguna dari form
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /*todo 2 : buat logika perbandingan dengan kondisi :
      jika variabel email identik dengan expectedEmail dan password identik dengan expectedpassword,
      panggil fungsi gotoHome()
      jika tidak,maka panggil fungsi showPopup()
    */
   if(email == expectedEmail && password == expectedPassword){
    goToHome();
   } else {
    showPopUp();
   }
});