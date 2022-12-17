const textarea = document.getElementById("textarea");

// При загрузке страницы получаем текст из хранилища
const savedText = localStorage.getItem("text");
if (savedText) {
  textarea.value = savedText;
}

// При изменении текста в поле ввода сохраняем его в хранилище
textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
