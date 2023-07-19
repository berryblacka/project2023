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
function fadeInElement() {
  anime({
    targets: '#fadeInElement',
    begin() {
      document.getElementById('fadeInElement').style.display = 'block';
    },
    opacity: (0, 1), // Целевое значение непрозрачности (1 - полностью видимый)
    duration: 2000, // Продолжительность анимации в миллисекундах
    easing: 'easeInOutSine', // Эффект плавности анимации
  });
}

// Запускаем анимацию пульсации при загрузке страницы
$(document).ready(() => {
  animatePulse();
  $('#pulseElement').on('click', () => {
    // Вызываем функцию плавного появления нового элемента
    fadeInElement();
  });
});

// Обработчик события клика на pulseElement
