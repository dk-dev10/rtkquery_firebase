import MagazineDetail from 'pages/Magazine/MagazineDetail';
import PodcastDetail from 'pages/Podcast/PodcastDetail';
import AuthorDetail from 'pages/Author/AuthorDetail';
import Magazine from 'pages/Magazine/Magazine';
import Podcast from 'pages/Podcast/Podcast';
import Register from 'pages/Auth/Register';
import Author from 'pages/Author/Author';
import Login from 'pages/Auth/Login';
import Edit from 'pages/Admin/Edit';
import User from 'pages/User/User';
import Home from 'pages/Home';

export const routes = [
  {
    link: '/',
    component: Home,
    nav: {
      type: 'nav',
      title: 'Home',
    },
    private: false,
  },
  {
    link: '/magazine',
    component: Magazine,
    nav: {
      type: 'nav',
      title: 'Magazine',
    },
    private: false,
  },
  {
    link: 'magazine/:id',
    component: MagazineDetail,
    nav: undefined,
    private: false,
  },
  {
    link: '/podcast',
    component: Podcast,
    nav: undefined,
    private: false,
  },
  {
    link: 'podcast/:id',
    component: PodcastDetail,
    nav: undefined,
    private: false,
  },
  {
    link: '/author',
    component: Author,
    nav: {
      type: 'nav',
      title: 'Author',
    },
    private: false,
  },
  {
    link: 'author/:id',
    component: AuthorDetail,
    nav: undefined,
    private: false,
  },

  {
    link: '/update/:id',
    component: Edit,
    nav: undefined,
    private: false,
  },
  {
    link: '/login',
    component: Login,
    nav: undefined,
    private: false,
  },
  {
    link: '/register',
    component: Register,
    nav: undefined,
    private: false,
  },
  {
    link: '/profile',
    component: User,
    nav: {
      type: 'dropdown',
      title: 'Profile',
    },
    private: true,
  },
  {
    link: '/new',
    component: Edit,
    nav: {
      type: 'dropdown',
      title: 'Create',
    },
    private: false,
  },
];
