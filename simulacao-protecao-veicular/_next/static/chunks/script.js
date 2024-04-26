// script.js

$(document).ready(function () {
    $('#id-phone').mask('(00) 90000-0000');
    $('#id-phone2').mask('(00) 90000-0000');
    $('#id-plate').mask('AAA-0B00', {
        translation: {
            'A': {
                pattern: /[A-Za-z]/
            },
            'B': {
                pattern: /[A-Za-z0-9]/
            }
        }
    });

    $('#id-plate2').mask('AAA-0B00', {
        translation: {
            'A': {
                pattern: /[A-Za-z]/
            },
            'B': {
                pattern: /[A-Za-z0-9]/
            }
        }
    });
});

// Função para controlar a reprodução dos vídeos
function controlarVideos() {
    let videos = document.querySelectorAll('.video-player');
    let playButtons = document.querySelectorAll('.play-button');

    videos.forEach(function (video, index) {
        playButtons[index].addEventListener('click', function () {
            togglePlayPause(video, playButtons[index]);
        });

        video.addEventListener('click', function () {
            togglePlayPause(video, playButtons[index]);
        });

        function togglePlayPause(video, playButton) {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'block';
            }
        }

        video.addEventListener('play', function () {
            playButtons[index].style.display = 'none';
        });

        video.addEventListener('pause', function () {
            playButtons[index].style.display = 'block';
        });
    });
}

// Função para controlar os dropdowns
function controlarDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    // Itera sobre cada par de elementos para adicionar o evento de clique
    dropdownToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', function () {
            // Usa o índice para encontrar o elemento .dropdown-content correspondente
            dropdownContents[index].classList.toggle('hidden');
        });
    });
}

// Função para aplicar máscaras aos campos de entrada
function aplicarMascaras() {
    $('#id-phone').mask('(00) 90000-0000');
    $('#id-phone2').mask('(00) 90000-0000');
    $('#id-plate').mask('AAA-0B00', {
        translation: {
            'A': {
                pattern: /[A-Za-z]/
            },
            'B': {
                pattern: /[A-Za-z0-9]/
            }
        }
    });

    $('#id-plate2').mask('AAA-0B00', {
        translation: {
            'A': {
                pattern: /[A-Za-z]/
            },
            'B': {
                pattern: /[A-Za-z0-9]/
            }
        }
    });
}

// Chama as funções de controle quando a página carregar
window.addEventListener('DOMContentLoaded', function () {
    controlarVideos();
    controlarDropdowns();
    aplicarMascaras();
});