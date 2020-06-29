import csv from './assets/data.csv'
// import WebpackLogo from '@/assets/webpack-logo.png'
// import './styles/styles.css'
import './styles/styles.scss'
import './styles/reset.css'
import './app.js'

const API = {
    // ACTUAL_NEWS: 'https://renemorozowich.com/wp-json/wp/v2/posts/?per_page=20',
    ACTUAL_NEWS: 'https://renemorozowich.com/wp-json/wp/v2/posts',
    LATEST_NEWS: 'https://renemorozowich.com/wp-json/wp/v2/posts?categories=33',
    POST_MEDIA: 'https://renemorozowich.com/wp-json/wp/v2/media/'
  };

  window.addEventListener('DOMContentLoaded', () => {
    const actualWrapper = document.querySelector('#main-news'),
          latestWrapper = document.querySelector('#latest-news');
  
    renderActualPosts(actualWrapper);
    renderLatestPosts(latestWrapper);
  });
  
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
  
  const getImage = (id) => {
    return getData(API.POST_MEDIA + id).then(data => data.source_url);
  }
  
  const actualPostTemplate = (title, image, date) => (
    `<div class="col-eld 4 col-sm-12 col-md-6">
    <div class="main-news__item" style="background-image: url(${image});">
        <div class="box-background"></div>
        <a href="">
            <div class="item-theme policy">
                <span>policy</span>
            </div>
        </a>
        <a href="">
            <div class="main-news-item__header">
                <span>${title}</span>
            </div>
        </a>                                   
        <a href="">
            <div class="main-news-date">
                <span>${new Date(date).toLocaleDateString()}</span>
            </div> 
        </a>
        <a href="">
            <div class="author__main">
                <span>Evgeny Tretyak</span>
            </div> 
        </a>
        </div>
    </div>`
  );

  const latestPostTemplate = (title, date) => (
    `
    <div class="right-news">
    <div class="right-news__item">
        <a href="">
            <div class="right-news__theme">
                sports
            </div>
            <div class="right-news__header">
            ${title}
            </div>
            <div class="right-news__date">
            ${new Date(date).toLocaleDateString()} <span class="theme__author">Evgeny Tretyak</span>
            </div> 
        </a>
        <div class="hr"></div>
    </div> 
    `
  );

  const renderActualPosts = (parent) => {
    getData(API.ACTUAL_NEWS)
      .then(posts => {
        posts.map((item) => {
          getImage(item.featured_media)
            .then(data => {
              parent.innerHTML += actualPostTemplate(item.title.rendered, data, item.date);
            });
        });
      });
  }

  const renderLatestPosts = (parent) => {
    getData(API.LATEST_NEWS)
      .then(posts => {
        posts.map((item) => {          
          parent.innerHTML += latestPostTemplate(item.title.rendered, item.date);
        })
      })
  }