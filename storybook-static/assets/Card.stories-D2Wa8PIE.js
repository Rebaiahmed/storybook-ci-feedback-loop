import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as v}from"./Button-BICverQo.js";import"./index-Bc2G9s8g.js";const j=({status:s="default",tag:o,title:n,description:i,errorMsg:N="Failed to load dashboard widget data.",onRetry:c,footerContent:l})=>s==="loading"?e.jsxs("div",{className:"custom-card custom-card-loading","data-testid":"card-skeleton",children:[e.jsx("div",{className:"skeleton-tag skeleton-shimmer"}),e.jsx("div",{className:"skeleton-title skeleton-shimmer"}),e.jsx("div",{className:"skeleton-text skeleton-shimmer"}),e.jsx("div",{className:"skeleton-text-short skeleton-shimmer"}),e.jsx("div",{className:"skeleton-footer skeleton-shimmer"})]}):s==="error"?e.jsx("div",{className:"custom-card custom-card-error","data-testid":"card-error",children:e.jsxs("div",{className:"error-container",children:[e.jsx("span",{className:"error-icon",role:"img","aria-label":"error",children:"⚠️"}),e.jsx("p",{className:"error-message",children:N}),e.jsx("p",{className:"error-hint",children:"Please check your network settings and try again."}),c&&e.jsx(v,{variant:"danger",onClick:c,style:{marginTop:"0.5rem"},children:"Retry Connection"})]})}):e.jsxs("div",{className:"custom-card","data-testid":"card-default",children:[o&&e.jsx("span",{className:"card-tag",children:o}),n&&e.jsx("h4",{className:"card-title",children:n}),i&&e.jsx("p",{className:"card-description",children:i}),l&&e.jsx("div",{className:"card-footer",children:l})]});j.__docgenInfo={description:"",methods:[],displayName:"Card",props:{status:{required:!1,tsType:{name:"union",raw:"'default' | 'loading' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},tag:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Failed to load dashboard widget data.'",computed:!1}},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const R={title:"Components/Card",component:j,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","loading","error"]},tag:{control:"text"},title:{control:"text"},description:{control:"text"},errorMsg:{control:"text"},onRetry:{action:"retried"}}},r={args:{status:"default",tag:"Chromatic Integration",title:"Visual Regression Pipeline",description:"Chromatic scans every story and automates component screenshot comparisons with 0% configuration.",footerContent:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Status: Active"}),e.jsx(v,{variant:"primary",style:{padding:"0.4rem 0.8rem",fontSize:"0.85rem"},children:"Explore"})]})}},t={args:{status:"loading"}},a={args:{status:"error",errorMsg:"Connection lost: Chromatic API is currently unreachable."}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: 'default',
    tag: 'Chromatic Integration',
    title: 'Visual Regression Pipeline',
    description: 'Chromatic scans every story and automates component screenshot comparisons with 0% configuration.',
    footerContent: <>
        <span style={{
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>Status: Active</span>
        <Button variant="primary" style={{
        padding: '0.4rem 0.8rem',
        fontSize: '0.85rem'
      }}>
          Explore
        </Button>
      </>
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'loading'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'error',
    errorMsg: 'Connection lost: Chromatic API is currently unreachable.'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const T=["Default","LoadingSkeleton","ErrorState"];export{r as Default,a as ErrorState,t as LoadingSkeleton,T as __namedExportsOrder,R as default};
