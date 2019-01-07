(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{238:function(e,t,i){"use strict";i.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=i(6),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[i("h1",{attrs:{id:"fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Fields")]),e._v(" "),i("blockquote",[i("p",[e._v("A Field is a specific type of value within a Collection. For example, you might have "),i("em",[e._v("Title")]),e._v(", "),i("em",[e._v("Body")]),e._v(", "),i("em",[e._v("Author")]),e._v(", and "),i("em",[e._v("Date Published")]),e._v(" fields within an "),i("em",[e._v("Articles")]),e._v(" collection. Each field represents a database column.")])]),e._v(" "),i("h2",{attrs:{id:"adding-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adding-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding Fields")]),e._v(" "),i("p",[e._v("To get started, go to "),i("em",[e._v("Settings > Collections & Fields")]),e._v(', choose the Collection you want to add the field to, then click "New Field".')]),e._v(" "),i("h3",{attrs:{id:"_1-choose-an-interface"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-choose-an-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Choose an Interface")]),e._v(" "),i("p",[e._v("Do you want a Toggle? Text Input? Map? Dropdown? Relationship? There are many Core Interfaces available here, with even more Extension Interfaces available. This is always the first step when creating a new field, and dictates the rest of the process.")]),e._v(" "),i("h3",{attrs:{id:"_2-set-the-schema-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-the-schema-options","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Set the Schema Options")]),e._v(" "),i("p",[e._v('Only the "Name" is required for this step, but it\'s good to familiarize yourself with the other options to get the most out of each field.')]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Name")]),e._v(" — The database column name and API field key. Lowercase alphanumeric and underscores.")]),e._v(" "),i("li",[i("strong",[e._v("Display Name")]),e._v(" — A formatted preview of how users will see the field name throughout the App.")]),e._v(" "),i("li",[i("strong",[e._v("Note")]),e._v(" — Optional helper text shown beside the field on the Item Detail page.")]),e._v(" "),i("li",[i("strong",[e._v("Advanced Options")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Directus Type")]),e._v(" — Directus specific type that the interface supports (eg: "),i("code",[e._v("string")]),e._v(", "),i("code",[e._v("number")]),e._v(").")]),e._v(" "),i("li",[i("strong",[e._v("Datatype")]),e._v(" — Database-specific type to use (eg: "),i("code",[e._v("VARCHAR")]),e._v(", "),i("code",[e._v("INT")]),e._v(", etc).")]),e._v(" "),i("li",[i("strong",[e._v("Length")]),e._v(" — Max size of data that can be contained by this field.")]),e._v(" "),i("li",[i("strong",[e._v("Default")]),e._v(" — The default value for this field. Used for new items if the field is left blank.")]),e._v(" "),i("li",[i("strong",[e._v("Validation")]),e._v(" — A RegEx string used to validate the value on save.")]),e._v(" "),i("li",[i("strong",[e._v("Validation Message")]),e._v(" — Custom validation message displayed if the above validation fails")]),e._v(" "),i("li",[i("strong",[e._v("Required")]),e._v(" — Whether or not this field requires a value.")]),e._v(" "),i("li",[i("strong",[e._v("Readonly")]),e._v(" — Whether or not this field's interface is interactive on the item detail page")]),e._v(" "),i("li",[i("strong",[e._v("Unique")]),e._v(" — Whether or not this field's value must be unique within the collection.")]),e._v(" "),i("li",[i("strong",[e._v("Hidden Detail")]),e._v(" — Hides the field on the Item Detail page.")]),e._v(" "),i("li",[i("strong",[e._v("Hidden Browse")]),e._v(" — Hides the field on the Item Browse page.")])])])]),e._v(" "),i("h3",{attrs:{id:"_3-relationship-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-relationship-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Relationship Setup")]),e._v(" "),i("p",[e._v("This step only appears if you selected a relational interface, such as "),i("em",[e._v("Many to Many")]),e._v(" or "),i("em",[e._v("Translations")]),e._v(". If you're unfamiliar with relationships you can learn how to configure them in our "),i("router-link",{attrs:{to:"/guides/relationships.html"}},[e._v("Relationships Guide")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"_4-interface-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-interface-options","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Interface Options")]),e._v(" "),i("p",[e._v('Interfaces are highly customizable with options that allow you to tailor them to individual uses. These vary depending on interface complexity, with less-common options hidden within an "Advanced" accordion.')]),e._v(" "),i("h2",{attrs:{id:"field-layout"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#field-layout","aria-hidden":"true"}},[e._v("#")]),e._v(" Field Layout")]),e._v(" "),i("p",[e._v("You can change the order, size, position, and grouping of fields on the Item Detail page to create tailored forms for each collection. A unified interface is in development to modify all of these options at once.")]),e._v(" "),i("h2",{attrs:{id:"column-order"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#column-order","aria-hidden":"true"}},[e._v("#")]),e._v(" Column Order")]),e._v(" "),i("p",[e._v("Directus fields completely mirror their respective database columns, however the specific order of columns in the database can be used to optimize query performance. Therefore Directus allows you to manage column order and field layout separately. Use the drag handles on the left of each field to update their order in the database.")]),e._v(" "),i("h2",{attrs:{id:"deleting-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deleting-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Deleting Fields")]),e._v(" "),i("p",[e._v('Clicking the "×" icon on the right side of the Fields interface will completely delete the field from the schema as well as all its Item data. You are prompted to confirm this action, however once the field delete is executed the change takes place immediately.')]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("It is possible to irreverisbly delete massive amounts of data with this feature. Proceed with extreme caution.")])])])},[],!1,null,null,null);o.options.__file="fields.md";t.default=o.exports}}]);