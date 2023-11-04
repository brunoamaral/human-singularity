---
categories:
date: {{ getenv "post_datetime"}}
description:
draft: false
resources:
 - src: {{ getenv "post_image" }}
   name: "header"
layout: instagram
location:
  - link: {{ getenv "google_maps_link"}}
  - latitude: {{ getenv "latitude" }}
  - longitude: {{ getenv "longitude" }}
options:
  unlisted: false
stories:
subtitle:
title: "{{ getenv "post_title" }}"
disable_comments: false
tags: {{ getenv "post_tags"}}
cta:
  - label: 
    url: 
    classes:
---

{{ getenv "post_content" }}
