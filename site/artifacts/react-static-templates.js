

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404'
      
const t_1 = universal(import('__react_static_root__/src/pages/Home'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/Home'
      
const t_2 = universal(import('__react_static_root__/src/pages/Service'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/Service'
      
const t_3 = universal(import('__react_static_root__/src/pages/About'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/About'
      
const t_4 = universal(import('__react_static_root__/src/pages/Contact'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/Contact'
      
const t_5 = universal(import('__react_static_root__/src/pages/English'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/English'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404': t_0,
'__react_static_root__/src/pages/Home': t_1,
'__react_static_root__/src/pages/Service': t_2,
'__react_static_root__/src/pages/About': t_3,
'__react_static_root__/src/pages/Contact': t_4,
'__react_static_root__/src/pages/English': t_5
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404"

