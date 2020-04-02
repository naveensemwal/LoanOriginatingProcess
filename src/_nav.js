
export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Inbox',
      url: '/inbox',
      icon: 'fa fa-inbox',
    },
    {
      name: 'Launch',
      url: '/launch',
      icon: 'icon-settings',
      children: [
        {
          name: 'Initiate Loan Process',
          url: '/workflow/createloanapp/createloanapp',
          icon: 'fa fa-handshake-o'
        },
        {
          name: 'Register Complaint',
          url: '/registercomplaint',
          icon: 'fa fa-money'
        },
      ]
    },
    {
      name: 'My Reports',
      icon: 'fa fa-bar-chart',
      children: [
        {
          name: 'Loan Performance',
          url: '/charts',
          icon: 'fa fa-line-chart'
        },
      ]
    },
    {
      name: 'Utilities',
      icon: 'fa fa-globe',
      children: [
        {
          name: 'Case Search',
          url: '/search',
          icon: 'fa fa-search'
        },
        {
          name: 'Eligibility Calculator',
          url: '/eligibility',
          icon: 'fa fa-calculator'
        },
        {
          name: 'My Notes',
          url: '/stickynotes',
          icon: 'fa fa-sticky-note'
        },
        {
          name: 'Rules engine',
          url: '/ruleengine',
          icon: 'fa fa-table'
        },
      ]
    },
  ],
};

