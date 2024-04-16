# Mappedin WordPress Plugin

The Mappedin Plugin for WordPress allows users to easily add interactive indoor maps to WordPress pages using a simple shortcode. Refer to the [Mappedin Plugin for WordPress Guide](https://developer.mappedin.com/web/v6/embed/mappedin-plugin-for-wordpress/) for more information.

Note: A Mappedin account is required. This plugin will not add maps to your WordPress pages without one. Visit [www.mappedin.com](www.mappedin.com) for more information.

This plugin requires access to Mappedin's cloud services to download map data. The Mappedin renderer is not included in this plugin because its versioning is independently controlled by Mappedin cloud infrastructure.

The Mappedin Plugin for WordPress does not require a subscription and is free to use. Enhanced map functionality is available with a paid subscription. For more information refer to the [Mappedin Pricing Page](https://mappedin.com/pricing).

## About Mappedin

Mappedin provides its customers with a more intuitive and engaging way to navigate their venues. Web maps are fully responsive and mobile-friendly, ensuring that customers can access them from any device. Additionally, Mappedin offers a range of advanced features such as search functionality, location-based services, and real-time updates, providing businesses with a powerful tool for enhancing their online presence and improving the customer experience.

For more information about Mappedin, visit [www.mappedin.com](www.mappedin.com).

## Wordpress Environment

- Tested up to: 6.5.0
- Requires at least: 3.6.0
- PHP Version: 7.2+
- Stable tag: 1.0.0

License: MIT
License URI: https://opensource.org/license/mit/

## Installation

The Mappedin Plugin for WordPress can be obtained from the [WordPress Plugin Store](https://wordpress.org/plugins/mappedin/) or downloaded directly from Github.

Please refer to the [WordPress plugin installation](https://wordpress.org/documentation/article/manage-plugins/#installing-plugins-1) documentation and follow the steps for your preferred method of installation.

## Configuration

Mappedin users will need to provide their Map URL.

### How to get your Map URL

1. Log into [Mappedin](https://app.mappedin.com/editor/)
2. Click the green Preview button.
3. Click Share.
4. Enable sharing.
5. Click the Copy Link button. The map URL is not copied to your clipboard.

If you have not yet created a map, one of the following demo map URLs could be used:

- Demo Mall: `https://app.mappedin.com/map/65c0ff7430b94e3fabd5bb8c`
- Demo Office: `https://app.mappedin.com/map/64ef49e662fd90fe020bee61`
- Demo School: `https://app.mappedin.com/map/65c12d9b30b94e3fabd5bb91`

You can find more demo map URLs on the [Mappedin Demo Maps Page](https://developer.mappedin.com/web/v6/trial-keys-and-maps/).

### How to configure the Mappedin Plugin

1. Open your WordPress Admin Dashboard.
2. Choose Mappedin from the left admin menu.
3. Paste your Map URL.
4. Click Save.

Refer to the [Mappedin Plugin for WordPress Guide](https://developer.mappedin.com/web/v6/embed/mappedin-plugin-for-wordpress/) for more information.

## Adding Mappedin to a WordPress Page

1. Add a new shortcode block to the page.
2. Enter `[mappedin]` as the shortcode.
