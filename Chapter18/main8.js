$(document).ready(function() {
    'use strict';

    console.log('18.8 요소 스타일링');
    function highlightParas(containing) {
        if (typeof containing === 'string')
            containing = new RegExp(`\\b${containing}\\b`, 'i');
        const paras = document.getElementsByTagName('p');
        console.log(paras);
        for (let p of paras) {
            if (containing.test(p.textContent))
                p.classList.add('highlight');
        }
    }
    highlightParas('unique');

    function removeParaHighlights() {
        const paras = document.querySelectorAll('p.highlight');
        for (let p of paras)
            p.classList.remove('highlight');
    }
    removeParaHighlights();

    console.log('18.9 데이터 속성');
    // const highlightActions = document.querySelectorAll('[data-action="highlight"]');
    // console.log('highlightActions[0].dataset.containing:',    highlightActions[0].dataset.containing);
    // console.log('highlightActions[0].dataset.caseSensitive:', highlightActions[0].dataset.caseSensitive);
    // highlightActions[0].dataset.containing = "giraffe";  console.log('highlightActions[0].dataset.containing:',    highlightActions[0].dataset.containing);
    // highlightActions[0].dataset.caseSensitive = "true";  console.log('highlightActions[0].dataset.caseSensitive:', highlightActions[0].dataset.caseSensitive);

    console.log('18.10 이벤트');
    const highlightActions = document.querySelectorAll('[data-action="highlight"]');
    for (let a of highlightActions) {
        a.addEventListener('click', evt => {
            evt.preventDefault();
            highlightParas(a.dataset.containing);
        });
    }
    const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
    for (let a of removeHighlightActions) {
        a.addEventListener('click', evt => {
            evt.preventDefault();
            removeParaHighlights();
        });
    }
})