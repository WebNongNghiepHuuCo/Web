import React from 'react';
import { CheckOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import lang from '~/assets/data/language.data.json';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';

function getLanguageDetail(locale) {
  const data = lang.filter((elm) => elm.langId === locale);
  return data[0];
}

const SelectedLanguage = ({ locale }) => {
  const language = getLanguageDetail(locale);
  const { langName, icon } = language;
  sessionStorage.setItem('lang', locale);
  return (
    <div className='flex items-center'>
      <img
        style={{ maxWidth: '20px' }}
        src={`/images/flags/${icon}.png`}
        alt={langName}
      />
      <span className='font-weight-semibold ml-2 flex items-center'>
        <DownOutlined className='font-size-xs h-full' />
      </span>
    </div>
  );
};

export const NavLanguage = ({ configDisplay }) => {
  const {
    data: { locale },
    actions: { onLocaleChange }
  } = useTheme();

  const languageList = [];
  lang.map((elm) => {
    const obj = {
      label: (
        <span
          className='flex items-center'
          onClick={() => onLocaleChange(elm.langId)}
        >
          <div className='flex items-center mr-3'>
            <img
              style={{ maxWidth: '20px' }}
              src={`/images/flags/${elm.icon}.png`}
              alt={elm.langName}
            />
            <span className='font-weight-normal ml-2'>{elm.langName}</span>
          </div>
          {locale === elm.langId ? (
            <CheckOutlined className='text-success' />
          ) : null}
        </span>
      ),
      key: elm.langId
    };
    languageList.push(obj);
  });

  const languageOption = <Menu items={languageList} />;

  return (
    <Dropdown
      placement='bottomRight'
      overlay={languageOption}
      trigger={['click']}
    >
      {configDisplay ? (
        <div className='cursor-pointer flex items-center' onClick={(e) => e.preventDefault()}>
          <SelectedLanguage locale={locale} />
        </div>
      ) : (
        <Menu mode='horizontal'>
          <Menu.Item key='language'>
            <div className='cursor-pointer' onClick={(e) => e.preventDefault()}>
              <GlobalOutlined className='nav-icon mr-0' />
            </div>
          </Menu.Item>
        </Menu>
      )}
    </Dropdown>
  );
};

export default NavLanguage;
