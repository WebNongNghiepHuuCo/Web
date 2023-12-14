import antdEnUS from 'antd/es/locale/en_US';
import enMsg from '../locales/en_US.json';
import { flattenMessages } from '~/helpers/flatten';

const EnLang = {
  antd: antdEnUS,
  locale: 'en-US',
  messages: {
    ...flattenMessages(enMsg)
  }
};
export default EnLang;
