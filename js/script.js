import tabs from './modules/tabs';
import calc from './modules/calc';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import cards from './modules/cards';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const   modalSelector = '.modal', 
            modalTimerId = setTimeout(() => openModal(modalSelector, modalTimerId), 5000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    forms('.form', modalSelector, modalTimerId);
    modal('[data-modal]', modalSelector, modalTimerId);
    timer('.timer', '2021-03-01');
    cards();
    slider({
        container:      '.offer__slider',
        slide:          '.offer__slide',
        nextArrow:      '.offer__slider-next',
        prevArrow:      '.offer__slider-prev',
        totalCounter:   '#total',
        currentCounter: '#current',
        wrapper:        '.offer__slider-wrapper',
        field:          '.offer__slider-inner'
    });
});