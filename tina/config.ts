import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "src/content/homepage",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "object", name: "cta", label: "CTA", fields: [
                { type: "string", name: "text", label: "Text" },
                { type: "string", name: "href", label: "Href" }
              ] },
              { type: "object", name: "image", label: "Hero Image", fields: [
                { type: "image", name: "mobile", label: "Mobile Image" },
                { type: "image", name: "desktop", label: "Desktop Image" },
                { type: "string", name: "alt", label: "Alt Text" }
              ] }
            ]
          },
          {
            type: "object",
            name: "imageGroup",
            label: "Hero Image Group",
            fields: [
              { type: "object", name: "left", label: "Left Image", fields: [
                { type: "image", name: "src", label: "Image" },
                { type: "string", name: "alt", label: "Alt" }
              ] },
              { type: "object", name: "right", label: "Right Image", fields: [
                { type: "image", name: "src", label: "Image" },
                { type: "string", name: "alt", label: "Alt" }
              ] }
            ]
          },
          {
            type: "object",
            name: "heroCards",
            label: "Hero Cards",
            list: true,
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "title", label: "Title" }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "desc", label: "Description" }
            ]
          },
          {
            type: "object",
            name: "servicesBlock",
            label: "Services Block",
            fields: [
              { type: "string", name: "topper", label: "Topper" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text" },
              { type: "object", name: "button", label: "Button", fields: [
                { type: "string", name: "text", label: "Text" },
                { type: "string", name: "href", label: "Href" }
              ] },
              { type: "object", name: "cards", label: "Cards", list: true, fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "text", label: "Text" },
                { type: "string", name: "href", label: "Href" },
                { type: "object", name: "image", label: "Image", fields: [
                  { type: "image", name: "mobile", label: "Mobile Image" },
                  { type: "image", name: "desktop", label: "Desktop Image" },
                  { type: "string", name: "alt", label: "Alt" }
                ] }
              ] }
            ]
          },
          {
            type: "object",
            name: "steps",
            label: "How We Work (Steps)",
            list: true,
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Text" }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery",
            list: true,
            fields: [
              { type: "string", name: "caption", label: "Caption" },
              { type: "image", name: "image", label: "Image" }
            ]
          },
          {
            type: "object",
            name: "quote",
            label: "Quote",
            fields: [
              { type: "string", name: "text", label: "Quote Text" },
              { type: "string", name: "name", label: "Author" },
              { type: "image", name: "background", label: "Background Image" }
            ]
          },
          {
            type: "object",
            name: "ctaContact",
            label: "CTA Contact",
            fields: [
              { type: "string", name: "topper", label: "Topper" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "phoneLabel", label: "Phone Label" },
              { type: "string", name: "emailLabel", label: "Email Label" },
              { type: "string", name: "addressLabel", label: "Address Label" }
            ]
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "permalink", label: "Permalink" },
              { type: "string", name: "eleventyNavigationKey", label: "Eleventy Nav Key" },
              { type: "number", name: "eleventyNavigationOrder", label: "Eleventy Nav Order" },
              { type: "string", name: "keywords", label: "Keywords", list: true },
              { type: "image", name: "image", label: "Image" }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "Services",
        path: "src/content/services",
        fields: [
          { type: "object", name: "intro", label: "Intro", fields: [
            { type: "string", name: "topper", label: "Topper" },
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "text", label: "Text" }
          ] },
          { type: "object", name: "serviceCards", label: "Service Cards", list: true, fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
            { type: "string", name: "href", label: "Href" },
            { type: "image", name: "image", label: "Image" }
          ] },
          { type: "object", name: "seo", label: "SEO", fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
            { type: "image", name: "image", label: "Image" }
          ] }
        ]
      },
      {
        name: "projects",
        label: "Projects",
        path: "src/content/projects",
        fields: [
          { type: "object", name: "intro", label: "Intro", fields: [
            { type: "string", name: "topper", label: "Topper" },
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "text", label: "Text" }
          ] },
          { type: "object", name: "gallery", label: "Gallery", list: true, fields: [
            { type: "string", name: "caption", label: "Caption" },
            { type: "image", name: "image", label: "Image" }
          ] },
          { type: "object", name: "seo", label: "SEO", fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
            { type: "image", name: "image", label: "Image" }
          ] }
        ]
      },
      {
        name: "contact",
        label: "Contact",
        path: "src/content/contact",
        fields: [
          { type: "object", name: "contactBlock", label: "Contact Block", fields: [
            { type: "string", name: "topper", label: "Topper" },
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "text", label: "Text" }
          ] },
          { type: "object", name: "details", label: "Contact Details", fields: [
            { type: "string", name: "phoneLabel", label: "Phone Label" },
            { type: "string", name: "emailLabel", label: "Email Label" },
            { type: "string", name: "addressLabel", label: "Address Label" }
          ] },
          { type: "object", name: "seo", label: "SEO", fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
            { type: "image", name: "image", label: "Image" }
          ] }
        ]
      }
    ],
  },
});
