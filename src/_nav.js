
//For coreUI Dashboard
const item = {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer icons font-1xl',
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
      icon: 'fa fa-cog',
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
        {
          name: 'Geo Performance',
          url: '/geostats',
          icon: 'fa fa-globe'
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

export { item }

// For dashboard
export default {
  navs: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer icons font-1xl',
      itemGroup: []
    },
    {
      title: true,
      name: 'Components',
      itemGroup: [
        {
          name: 'Inbox',
          url: '/inbox',
          icon: 'fa fa-inbox',
        },
        {
          name: 'Launch',
          url: '/launch',
          icon: 'fa fa-cog',
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
            {
              name: 'Geo Performance',
              url: '/geostats',
              icon: 'fa fa-globe'
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
      ]
    }
  ],
};



