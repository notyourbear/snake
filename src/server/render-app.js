import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import * as colors from '../shared/colors'

const renderApp = title =>
    `<!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
        <style>
          body { background: ${colors.BACKGROUND} }
        </style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}"></div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`

export default renderApp
