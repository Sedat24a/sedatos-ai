export const navigation = [

  {
    id:"dashboard",
    title:"Kontrol Paneli",
    icon:"dashboard",
    path:"/"
  },

  {
    id:"ai",
    title:"AI Yardýmcý Pilot",
    icon:"smart_toy",
    path:"/ai"
  },

  {
    id:"business",
    title:"Business OS",
    icon:"business",
    children:[
      {
        title:"CRM",
        path:"/crm"
      },
      {
        title:"ERP",
        path:"/erp"
      },
      {
        title:"Finans",
        path:"/finance"
      }
    ]
  },

  {
    id:"realestate",
    title:"Gayrimenkul",
    icon:"home",
    path:"/real-estate"
  },

  {
    id:"settings",
    title:"Ayarlar",
    icon:"settings",
    path:"/settings"
  }

];
