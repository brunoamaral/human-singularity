---
authors:
  - bruno-amaral
categories: 
  - 
date: {{ .Date }}
description: ""
draft: false
resources: 
 - src: images/
   name: "header"
 - src: "gallery/*.jpg"
   name: gallery-:counter
   title: gallery-title-:counter
slug:
subtitle: 
tags: 
  - 
title: {{ replace .Name "-" " " | title }}
disable_comments: false
cta:
  - label: 
    url: 
    classes:
options:
  hideFooter: false
  hideSubscribeForm: false
  showHeader: true
  unlisted: false
scripts:
  - 
---