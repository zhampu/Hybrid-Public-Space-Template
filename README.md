# Hybrid-Public-Space-Template
A website template for passing Markdown to Html and having the footnotes as  side notes

example: http://juangomez.co/hybridpublicspaces/

This website and *Kids-Manif* where made as part of Master Project class in [Digital Media Bremen](http://digitalmedia-bremen.de/)

# How it works?

Thesis.md file is changed to HTML thanks to [Markdownit](https://github.com/markdown-it/markdown-it#usage-examples).
The Footnotes of the file are also parsed with [Footnotes plugin](https://github.com/markdown-it/markdown-it-footnote)

The Main.js then changes the Footnotes into Side notes and places them in the correct position.

# Change the content

The Thesis.md file is the content of my thesis but change it to your own Markdown to test the layout.

# Footnote to Side notes

Pandoc templating always put the references as footnotes.

The advantage ot this template is that it will take all the foot notes like this:


Here's a simple footnote,[^1]

[^1]: This is the first footnote.

[Markdown Syntax](https://www.markdownguide.org/extended-syntax/)


and transform them in side notes that will match the position of the reference in the scroll of the text.

# To-Do

- [ ] Make the Print.css for HTML2PRINT this allows you to print your thesis in your browser without passing through Word or Indesign
- [x] Make a table of content
- [ ] Add extra page for interviews, graphs , etc

# Acknowlednment

thanks to [Nicolas](https://github.com/azertypow) for his help!
