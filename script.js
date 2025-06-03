/**
 * Função para exibir um feedback interativo quando o botão de interação social é clicado.
 * Seleciona o elemento HTML com o ID 'feedback' e modifica seu conteúdo de texto.
 */
function mostrarFeedback() {
  const feedbackElement = document.getElementById("feedback"); // Obtém a referência ao elemento de feedback
  feedbackElement.textContent = "A interação social nos conecta!"; // Define o texto do feedback
  feedbackElement.style.fontWeight = "bold"; // Aplica estilo em negrito ao texto
  feedbackElement.style.color = "#2ecc71"; // Define a cor do texto para verde
  feedbackElement.style.transition = "all 0.5s ease"; // Adiciona uma transição suave para mudanças de estilo
}
