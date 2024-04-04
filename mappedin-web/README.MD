# Mappedin Web WordPress Plugin

The Mappedin Web Plugin for WordPress allows users to easily add interactive indoor maps to WordPress pages using a simple shortcode. Refer to the [Mappedin Web Plugin for WordPress Guide](https://developer.mappedin.com/pre-built-applications/mappedin_web_plugin_for_wordpress) for more information.

Note: A subscription to Mappedin Web is required. This plugin will not add maps to your WordPress pages without one. Visit [www.mappedin.com](www.mappedin.com) for more information.

This plugin requires access to Mappedin's cloud services to download map data and to download Mappedin Web, which renders the map. The Mappedin Web renderer is not included in this plugin because its versioning is independently controlled by Mappedin cloud infrastructure.

## About Mappedin

Mappedin provides its customers with a more intuitive and engaging way to navigate their venues. Web maps are fully responsive and mobile-friendly, ensuring that customers can access them from any device. Additionally, Mappedin offers a range of advanced features such as search functionality, location-based services, and real-time updates, providing businesses with a powerful tool for enhancing their online presence and improving the customer experience.

For more information about Mappedin, visit [www.mappedin.com](www.mappedin.com).

## Wordpress Environment

- Tested up to: 6.5.0
- Requires at least: 2.9.0
- PHP Version: 7.2+
- Stable tag: 1.0.4

License: MIT
License URI: https://opensource.org/license/mit/

## Installation

The Mappedin Web Plugin for WordPress can be obtained from the [WordPress Plugin Store](https://wordpress.org/plugins/mappedin-web/) or downloaded directly from Github.

Please refer to the [WordPress plugin installation](https://wordpress.org/documentation/article/manage-plugins/#installing-plugins-1) documentation and follow the steps for your preferred method of installation.

## Configuration

Mappedin users will need to provide their Client ID, Client Secret, and Venue Slug. Contact Mappedin if you have any questions regarding the information required for these settings.

1. Open your WordPress Admin Dashboard.
2. Choose Mappedin Web from the left admin menu.
3. Enter your Mappedin Client Id, Client Secret and Venue Slug.
4. Enter the language code for the map's default language.
5. Enter the width and height for the map in a CSS unit.
6. Click Save.

Refer to the [Mappedin Web Plugin for WordPress Guide](https://developer.mappedin.com/pre-built-applications/mappedin_web_plugin_for_wordpress) for more information.

## Adding Mappedin Web to a WordPress Page

1. Add a new shortcode block to the page.
2. Enter `[mappedin-web]` as the shortcode.
