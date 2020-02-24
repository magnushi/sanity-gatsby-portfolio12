export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e540da8791dedbfe73408f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio12-studio',
                  apiId: 'e148b2d2-3282-4195-a41c-450a51649fe0'
                },
                {
                  buildHookId: '5e540da8ee454fadbdf93084',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio12',
                  apiId: '079d2bd8-4195-4909-b962-561864791042'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio12',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio12.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
