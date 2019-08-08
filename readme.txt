=== svelte ===

Contributors: automattic
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready

Requires at least: 4.5
Tested up to: 4.8
Stable tag: 1.0.0
License: GNU General Public License v2 or later
License URI: LICENSE

A starter theme called svelte.

== Description ==

This is a basic theme with svelteJS

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload Theme and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.
4. Edit the gulpfile, and change the url variable to be configure to your local path
5. In the command line, cd into your theme directory. Then run thoses commands:
npm i
gulp watch

.....
npm i == This will install all dependencies
gulp watch == starts a server and then make a dist folder of your svelte files.
