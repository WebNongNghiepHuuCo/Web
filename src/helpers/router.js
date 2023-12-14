import { generatePath } from 'react-router'
import history from '~/history'

/**
 * Redirect to path with state
 * @param {string} path
 * @param {object} state
 */
export const redirectRouter = (path, state) => {
  history.push(generatePath(path, state))
}
