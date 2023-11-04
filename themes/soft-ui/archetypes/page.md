---
authors:
  - bruno-amaral
date: {{ .Date }}
description: ""
draft: false
resources: 
 - src: images/
   name: "header"
 - src: "gallery/*.jpg"
   name: gallery-:counter
   title: gallery-title-:counter
 - src:
   name: slide-1
  params:
    pretitle: 
    description: 
slug:
subtitle: 
tags: 
  - 
categories: 
  - 
title: "{{ replace (getenv "SLUG") "-" " " | title }}"
disable_comments: false
layout: page
cta:
  - label: 
    url: 
    classes:
options:
  unlisted: false
  showHeader: true
  hideFooter: false
  hideSubscribeForm: false
  header:
scripts:
  -
---
