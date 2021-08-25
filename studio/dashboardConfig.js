export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6125ee14d610d49d0ad85bd9',
                  title: 'Sanity Studio',
                  name: 'black-sea-bird-studio-8msnaemf',
                  apiId: 'c5fa5bfc-384f-4e7e-8304-36342dcd3ba0'
                },
                {
                  buildHookId: '6125ee148d49359357eb9e2e',
                  title: 'Blog Website',
                  name: 'black-sea-bird-web',
                  apiId: '659bc675-3733-4fee-a5eb-b8d2cf3194ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atryx/black-sea-bird',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://black-sea-bird-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
