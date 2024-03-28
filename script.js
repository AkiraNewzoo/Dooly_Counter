let count = 0; // Текущее значение счетчика

const numbersElement = document.getElementById("numbers"); // Элемент цифры счетчика
const clickerElement = document.getElementById("clicker"); // Элемент кнопки
const facesElement = document.getElementById("faces"); // Элемент блока с фотографией

// Обработчик события нажатия кнопки
clickerElement.addEventListener("click", () => {
  // Увеличить значение счетчика
  count++;

  // Обновить текст элемента цифры
  numbersElement.textContent = count;

  // Изменить фотографию
  changePhoto();
});

// Функция для изменения изображения
function changeImage() {
  // Если кнопка нажата
  if (clickerElement.classList.contains("active")) {
    // Установить фоновое изображение 2
    facesElement.style.backgroundImage = "url(../img/2.png)";
  } else {
    // Установить фоновое изображение 1
    facesElement.style.backgroundImage = "url(../img/1.png)";
  }
}

// Обработчик события зажатия кнопки
clickerElement.addEventListener("mousedown", () => {
  // Добавить класс "active" к кнопке
  clickerElement.classList.add("active");

  // Изменить изображение
  changeImage();
});

// Обработчик события отпускания кнопки
clickerElement.addEventListener("mouseup", () => {
  // Удалить класс "active" с кнопки
  clickerElement.classList.remove("active");

  // Изменить изображение
  changeImage();
});



