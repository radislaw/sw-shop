import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import xorWith from 'lodash/xorWith'

export default (x, y) => isEmpty(xorWith(x, y, isEqual))
