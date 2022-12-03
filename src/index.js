import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import axios from 'axios';
import { fetchPhotos } from './js/fetchPhotos';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.load-more');
let currentpage = 1;
let currentquery = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  currentpage = 1;
  gallery.innerHTML = '';
  currentquery = event.currentTarget.searchQuery.value.trim();
  if (currentquery === '') {
    return;
  }
});
