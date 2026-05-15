# HTML Tags Reference

## Document Structure
```html
<!DOCTYPE html>       <!-- declares HTML5 document -->
<html>                <!-- root element -->
<head>                <!-- metadata / SEO / title related data is defined here (not visible) -->
<body>                <!-- visible page content -->
```

## Metadata (inside <head>)
```html
<title>              <!-- tab/window title -->
<meta>               <!-- charset, viewport, description -->
<link>               <!-- link external CSS -->
<style>              <!-- inline CSS -->
<script>             <!-- JavaScript -->
```

## Headings & Text
```html
<h1> to <h6>         <!-- headings, h1 = biggest -->
<p>                  <!-- paragraph -->
<span>               <!-- inline text container -->
<div>                <!-- block container -->
<strong>             <!-- bold (semantic importance) -->
<em>                 <!-- italic (emphasis) -->
<br>                 <!-- line break (self-closing) -->
<hr>                 <!-- horizontal rule/divider -->
<pre>                <!-- preformatted text -->
<code>               <!-- inline code -->
```

## Links & Media
```html
<a href="url">       <!-- hyperlink -->
<img src="url" alt=""> <!-- image (self-closing) -->
<video src="url">    <!-- video -->
<audio src="url">    <!-- audio -->
<iframe src="url">   <!-- embed another page -->
```

## Lists
```html
<ul>                 <!-- unordered list (bullets) -->
<ol>                 <!-- ordered list (numbers) -->
<li>                 <!-- list item (used in both) -->
<dl>                 <!-- description list -->
<dt>                 <!-- term -->
<dd>                 <!-- definition -->
```

## Tables
```html
<table>              <!-- table wrapper -->
<thead>              <!-- table header group -->
<tbody>              <!-- table body group -->
<tr>                 <!-- table row -->
<th>                 <!-- header cell (bold + centered) -->
<td>                 <!-- data cell -->
```

## Forms
```html
<form>               <!-- form wrapper -->
<input type="text">  <!-- text field -->
<input type="email"> <!-- email field -->
<input type="password"> <!-- password field -->
<input type="checkbox"> <!-- checkbox -->
<input type="radio"> <!-- radio button -->
<input type="submit"> <!-- submit button -->
<textarea>           <!-- multiline text input -->
<select>             <!-- dropdown -->
<option>             <!-- dropdown item -->
<label>              <!-- label for input -->
<button>             <!-- clickable button -->
```

## Semantic Layout (HTML5)
```html
<header>             <!-- page/section header -->
<nav>                <!-- navigation links -->
<main>               <!-- main page content -->
<section>            <!-- thematic section -->
<article>            <!-- self-contained content -->
<aside>              <!-- sidebar content -->
<footer>             <!-- page/section footer -->
```

## Quick Rules
- Most tags need an opening `<tag>` and closing `</tag>`
- Self-closing tags don't need a closing tag: `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`
- Attributes go inside the opening tag: `<a href="url" class="btn">`
- `id` = unique identifier, `class` = reusable style group