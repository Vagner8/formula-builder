const contexts = [
  require.context('./library', true, /\.(ts|js)$/),
  require.context('./common', true, /\.(ts|js)$/),
  require.context('./app', true, /\.(ts|js)$/)
]

contexts.forEach(context => context.keys().forEach(context))