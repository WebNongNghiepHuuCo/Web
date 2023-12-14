import antdJaJP from 'antd/es/locale/ja_JP';
import jaMsg from '../locales/ja_JP.json';
import { flattenMessages } from '~/helpers/flatten';

const JaLang = {
  antd: antdJaJP,
  locale: 'ja-JP',
  messages: {
    ...flattenMessages(jaMsg)
  }
};
export default JaLang;
