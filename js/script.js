/* eslint-disable no-undef */
function animatePulse() {
  anime({
    targets: '#pulseElement',
    scale: [
      { value: 1 },
      { value: 1.5 },
      { value: 1 }, // Задержка перед повторной анимацией
    ],
    duration: 1500, // Продолжительность анимации в миллисекундах
    easing: 'easeInOutSine', // Эффект плавности анимации
    complete() {
      // Когда анимация завершается, вызываем функцию снова, чтобы создать бесконечную пульсацию
      animatePulse();
    },
  });
}

// Функция для плавного появления нового элемента

// Запускаем анимацию пульсации при загрузке страницы
$(document).ready(() => {
  animatePulse();
  $('#pulseElement').on('click', () => {
    // Вызываем функцию плавного появления нового элемента
    $('#fadeInElement').toggleClass('dis');
  });
});

// Обработчик события клика на pulseElement
