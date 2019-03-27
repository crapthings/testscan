App.accessRule('*')
App.accessRule("blob:*")

App.accessRule('http://*/*', { type: 'navigation' })
App.accessRule('https://*/*', { type: 'navigation' })
App.accessRule('data:*', { type: 'navigation' })
