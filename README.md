# Project 7 - WordPress Pentesting

Time spent: **3** hours spent in total

> Objective: Find, analyze, recreate, and document **five vulnerabilities** affecting an old version of WordPress

## Pentesting Report

1. (Required) WordPress-Comment-Overflow
  - [ ] Summary: By placing a long enough reply on a post, 64kb, the excess 64kb will be truncated and what's left in potentially malicious code. 
    - Vulnerability types: XSS
    - Tested in version: 4.2
    - Fixed in version: 4.4
  - [ ] GIF Walkthrough: ![Alt Text](https://media.giphy.com/media/7E5lCjTAVgn5xGBnEq/giphy.gif)
  - [ ] Steps to recreate: Create a post. Go to this website, https://gist.github.com/ethicalhack3r/48d4e3e73c9241bd5b8c, copy the text. Leave a reply on the created post. An alert should come up on the page. 
1. (Required) Authenticated Attachment Name Stored XSS
  - [ ] Summary: By inserting a link into a post and making both the url and test test javascript. I can do XSS.
    - Vulnerability types: XSS
    - Tested in version: 4.2
    - Fixed in version: 4.5.3
  - [ ] GIF Walkthrough: ![Alt Text](https://media.giphy.com/media/4NrBRwPZR8YdDkZw5E/giphy.gif)
  - [ ] Steps to recreate: Create a post, in the post insert a link. Put the url and text to equal this "\<script>alert("xss")\</script>" ignoring the backslashes
1. (Required) Authenticated Stored Cross-Site Scripting via Image Filename
  - [ ] Summary: This is another XSS vulnerability that revolves around image filenames
    - Vulnerability types: XSS
    - Tested in version: 4.2
    - Fixed in version: 4.7
  - [ ] GIF Walkthrough: 
  - [ ] Steps to recreate: Upload a file. Change the the title of the file to some malcious code. When you view the image, the code runs.
