# Hybrid-Public-Space-Template
A website template for passing Markdown to Html and having the footnotes as  side notes

example: http://juangomez.co/hybridpublicspaces/

# Change the content

The Thesis.md file is the content of my thesis but change it to your own Markdown to test the layout.

# Footnote to Side notes

Pandoc templating always put the references as footnotes.

The advantage ot this template is that it will take all the foot notes like this:


Here's a simple footnote,[^1]

[^1]: This is the first footnote.

[Markdown Syntax](https://www.markdownguide.org/extended-syntax/)


and transform them in side notes that will match the position of the reference in the scroll of the text.

# To-DO

- [ ] Make the Print.css for HTML2PRINT this allows you to print your thesis in your browser without passing through Word or Indesign
- [ ] Make a table of content
- [ ] Add extra page for interviews, graphs , etc




Copyright (c) {{ year }} {{ organization }}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
