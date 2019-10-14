/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { navigate } from 'gatsby';
import getBrowserLang from 'browser-lang';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

function getPagePathForLang(homeSlug, defaultLang, page, lang) {
  const pageSlug = page.slug === homeSlug ? '' : page.slug;
  let pagePath = lang === defaultLang ? '/' : `${lang}/`;
  if (pageSlug) {
    pagePath += `${pageSlug}/`;
  }
  return pagePath;
}

function getPageLang(defaultLang, page) {
  return page.lang === 'default' ? defaultLang : page.lang;
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  const { pageContext } = props;
  const { i18n, story } = pageContext;

  if (!story) {
    return element;
  }

  const pageLang = getPageLang(i18n.defaultLang, story);

  // Detect from navigator
  let browserLang = getBrowserLang({
    languages: i18n.whitelistLangs,
    fallback: i18n.fallbackLang,
  });

  // Detect from localstorage
  if (localStorage) {
    const langFromStorage = localStorage.getItem('lang');
    // Check if lang is whitelisted
    if (i18n.whitelistLangs.includes(langFromStorage)) {
      browserLang = langFromStorage;
    } else {
      localStorage.removeItem('lang');
    }
  }

  // The detected lang is different, we need to redirect
  if (browserLang !== pageLang) {
    const newPagePath = getPagePathForLang(
      'home',
      i18n.defaultLang,
      story,
      browserLang
    );
    navigate(newPagePath, { replace: true });
    return <></>;
  }

  return element;
};
