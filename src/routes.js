import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Geostats = React.lazy(() => import('./views/Charts/Geostats'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const Dashboard = React.lazy(() => import('./SIB/Sibdashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Inbox = React.lazy(() => import('./views/Inbox/Inbox'));
const DSA = React.lazy(() => import('./views/Workflow/DSA/DSA'));
const DSA_Sales = React.lazy(() => import('./views/Workflow/DSA/Sales/Sales'));
const DSA_DDE = React.lazy(() => import('./views/Workflow/DSA/DDE/DDE'));
const DSA_DDE_1 = React.lazy(() => import('./views/Workflow/DSA/DDE_1/DDE'));
const DSA_UW = React.lazy(() => import('./views/Workflow/DSA/Underwriter/Underwriter'));
const DSA_UW_1 = React.lazy(() => import('./views/Workflow/DSA/Underwriter_1/Underwriter'));
const DSA_DIS = React.lazy(() => import('./views/Workflow/DSA/Disbursement/Disbursement'));
const BIL = React.lazy(() => import('./views/Workflow/BIL/BIL'));
const CreateLoanApp = React.lazy(() => import('./views/Launch/Launch'));
const Eligibility = React.lazy(() => import('./views/Utilities/Eligibility/Eligibility'));
const Search = React.lazy(() => import('./views/Search/Search'));
const StickyNotes = React.lazy(() => import('./views/StickyNotes/StickyNotes'));
const Ruleengine = React.lazy(() => import('./views/Ruleengine/Ruleengine'));
const Registercomplaint = React.lazy(() => import('./SIB/Registercomplaint'));
const Complaintdetail = React.lazy(() => import('./SIB/Complaintdetail'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/geostats', name: 'Geostats', component: Geostats },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/inbox', exact: true,  name: 'Inbox', component: Inbox },
  { path: '/workflow/dsa', exact: true,  name: 'DSA', component: DSA },
  { path: '/workflow/dsa/sales/:id', exact: true,  name: 'Sales', component: DSA_Sales },
  { path: '/workflow/dsa/dde', exact: true,  name: 'DDE', component: DSA_DDE },
  { path: '/workflow/dsa/dde_1/:id', exact: true,  name: 'DDE', component: DSA_DDE_1},
  { path: '/workflow/dsa/underwriter', exact: true,  name: 'Underwriter', component: DSA_UW },
  { path: '/workflow/dsa/underwriter_1/:id', exact: true,  name: 'Underwriter', component: DSA_UW_1},
  { path: '/workflow/dsa/disbursement/:id', exact: true,  name: 'disbursement', component: DSA_DIS },
  { path: '/workflow/bil', exact: true,  name: 'BIL', component: BIL },
  { path: '/workflow/createloanapp/createloanapp', exact: true,  name: 'CreateLoanApp', component: CreateLoanApp },
  { path: '/eligibility', exact: true,  name: 'eligibility', component: Eligibility },
  { path: '/search', exact: true,  name: 'search', component: Search },
  { path: '/stickynotes', exact: true,  name: 'stickynotes', component: StickyNotes },
  { path: '/ruleengine', exact: true,  name: 'ruleengine', component: Ruleengine },
  { path: '/registercomplaint', exact: true,  name: 'registercomplaint', component: Registercomplaint },
  { path: '/Complaint/:id', exact: true,  name: 'Complaint Details', component: Complaintdetail },
];

export default routes;
