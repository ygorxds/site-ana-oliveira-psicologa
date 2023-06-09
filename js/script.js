function openWhatsApp() {
    // Substitua "seu_numero" pelo número de telefone para o qual deseja enviar a mensagem
    var phoneNumber = "5521978788006";
    
    // Abra o link do WhatsApp com o número de telefone e uma mensagem predefinida
    window.open("https://wa.me/" + phoneNumber + "?text=Olá, gostaria de entrar em contato!", "_blank");
}

var slides = document.getElementsByClassName('custom-slide');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('custom-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('custom-active');
}

showSlide(0); // Show the first slide initially

// Add event listeners for arrow clicks
document.getElementById('nextBtn').addEventListener('click', function() {
  showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', function() {
  showSlide(currentSlide - 1);
});