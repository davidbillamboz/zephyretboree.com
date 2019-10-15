import CMS from 'netlify-cms-app';

import HeaderPreview from './preview-templates/HeaderPreview';
// import FooterPreview from './preview-templates/FooterPreview';

CMS.registerPreviewTemplate('header', HeaderPreview);
// CMS.registerPreviewTemplate('footer', FooterPreview);
