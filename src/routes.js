import React from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));
const Registercomplaint = React.lazy(() => import('./components/RegisterComplaint/Registercomplaint'));
const InitiateLoan = React.lazy(() => import('./components/Launch/InitiateLoan'));
const Inbox = React.lazy(() => import('./components/Inbox/Inbox'));
const Charts = React.lazy(() => import('./components/Charts/Charts'));
const Geostats = React.lazy(() => import('./components/Charts/Geostats'));
const Search = React.lazy(() => import('./components/Search/Search'));
const Eligibility = React.lazy(() => import('./components/Eligibility/Eligibility'));
const Ruleengine = React.lazy(() => import('./components/Ruleengine/Ruleengine'));
const StickyNotes = React.lazy(() => import('./components/StickyNotes/StickyNotes'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/geostats', name: 'Geostats', component: Geostats },
  { path: '/registercomplaint', exact: true, name: 'registercomplaint', component: Registercomplaint },
  { path: '/workflow/createloanapp/createloanapp', exact: true, name: 'CreateLoanApp', component: InitiateLoan },
  { path: '/inbox', exact: true, name: 'Inbox', component: Inbox },
  { path: '/search', exact: true, name: 'search', component: Search },
  { path: '/eligibility', exact: true, name: 'eligibility', component: Eligibility },
  { path: '/ruleengine', exact: true, name: 'ruleengine', component: Ruleengine },
  { path: '/stickynotes', exact: true, name: 'stickynotes', component: StickyNotes },
];

export default routes;
