import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as a}from"./Button-BICverQo.js";import"./index-Bc2G9s8g.js";const y=({isOpen:g,title:f,onClose:t,showFooter:b=!0,footerContent:x,children:v})=>g?e.jsx("div",{className:"modal-overlay",onClick:t,"data-testid":"modal-overlay",children:e.jsxs("div",{className:"modal-container",onClick:j=>j.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h3",{className:"modal-title",children:f}),e.jsx("button",{className:"modal-close-btn",onClick:t,"aria-label":"Close modal",children:"×"})]}),e.jsx("div",{className:"modal-body",children:v}),b&&e.jsx("div",{className:"modal-footer",children:x||e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"custom-btn",style:{background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},onClick:t,children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:t,children:"Confirm"})]})})]})}):null;y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={title:"Components/Modal",component:y,tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},title:{control:"text"},showFooter:{control:"boolean"},onClose:{action:"closed"}}},o={args:{isOpen:!0,title:"Reset Repository Confirmation",children:e.jsx("p",{children:"Are you sure you want to revert all local commits? This action will overwrite your local main branch with the origin branch and cannot be undone."})}},r={args:{isOpen:!0,title:"Visual Regression Detected",children:e.jsx("p",{children:"The danger state button color does not match the baseline screenshot. Would you like to accept this new change or reject it?"}),showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"danger",children:"Reject Change"}),e.jsx(a,{variant:"primary",children:"Accept & Update Baseline"})]})}},n={args:{isOpen:!0,title:"Quick Information Notice",children:e.jsx("p",{children:"Your visual tests are currently running in the background of your GitHub Actions CI pipeline. We will notify you immediately if any mismatched pixels exceed the 0.1% threshold."}),showFooter:!1}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Reset Repository Confirmation',
    children: <p>
        Are you sure you want to revert all local commits? This action will overwrite your local main
        branch with the origin branch and cannot be undone.
      </p>
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Visual Regression Detected',
    children: <p>
        The danger state button color does not match the baseline screenshot. Would you like to accept
        this new change or reject it?
      </p>,
    showFooter: true,
    footerContent: <>
        <Button variant="danger">Reject Change</Button>
        <Button variant="primary">Accept & Update Baseline</Button>
      </>
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Quick Information Notice',
    children: <p>
        Your visual tests are currently running in the background of your GitHub Actions CI pipeline.
        We will notify you immediately if any mismatched pixels exceed the 0.1% threshold.
      </p>,
    showFooter: false
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const k=["Default","WithCustomFooter","WithoutFooter"];export{o as Default,r as WithCustomFooter,n as WithoutFooter,k as __namedExportsOrder,N as default};
