// ==UserScript==
// @name         YouTube Music Light Mode
// @namespace    https://music.youtube.com/
// @version      1.1.7
// @description  A light colour palette for YouTube Music that follows your device setting.
// @match        https://music.youtube.com/*
// @run-at       document-start
// @noframes
// @grant        GM_addStyle
// ==/UserScript==

(() => {
  'use strict';

  GM_addStyle(`
    @media (forced-colors: none) and (prefers-color-scheme: light) {
      html:root:root {
        color-scheme: light !important;

        --ytm-surface: #fcfcfc;
        --ytm-surface-low: #f7f7f7;
        --ytm-surface-container: #efefef;
        --ytm-surface-high: #e9e9e9;
        --ytm-surface-highest: #e2e2e2;
        --ytm-on-surface: #1c1c1c;
        --ytm-on-variant: #535353;
        --ytm-outline: #777;
        --ytm-divider: #d6d6d6;
        --ytm-track: #b9b9b9;
        --ytm-primary: #000;
        --ytm-on-primary: #fff;
        --ytm-primary-container: #dedede;
        --ytm-on-primary-container: #181818;
        --ytm-selected-hover: #ccc;
        --ytm-hover: rgb(28 28 28 / .08);
        --ytm-pressed: rgb(28 28 28 / .12);
        --ytm-disabled: rgb(28 28 28 / .38);
        --ytm-inverse: #323232;
        --ytm-on-inverse: #f5f5f5;
        --ytm-elevation: 0 1px 2px #1c1c1c20, 0 8px 26px #1c1c1c21;
        --ytm-link: #065fd4;
        --ytm-artwork-wash: #fcfcfc55;
        --ytm-hero-scrim: #fcfcfce6;
      }

      html:root:root {
        --ytm-button-hover: color-mix(in srgb, var(--ytm-on-surface) 14%, transparent);

        --ytmusic-background: var(--ytm-surface);
        --ytmusic-general-background-c: var(--ytm-surface);
        --ytmusic-general-background-a: var(--ytm-surface-low);
        --ytmusic-brand-background-solid: var(--ytm-surface-container);
        --ytmusic-nav-bar: var(--ytm-surface-low);
        --ytmusic-player-bar-background: var(--ytm-surface-container);
        --ytmusic-player-page-background: var(--ytm-surface);
        --ytmusic-horizontal-action-card-background: var(--ytm-surface-low);
        --ytmusic-item-section-info-panel-overview-background: var(--ytm-surface-container);
        --ytmusic-text-primary: var(--ytm-on-surface);
        --ytmusic-text-secondary: var(--ytm-on-variant);
        --ytmusic-text-disabled: var(--ytm-disabled);
        --ytmusic-text-primary-inverse: var(--ytm-on-primary);
        --ytmusic-inverted-background: var(--ytm-primary);
        --ytmusic-overlay-text-primary: var(--ytm-on-surface);
        --ytmusic-overlay-text-secondary: var(--ytm-on-variant);
        --ytmusic-overlay-text-disabled: var(--ytm-disabled);
        --ytmusic-overlay-button-primary: var(--ytm-pressed);
        --ytmusic-overlay-button-secondary: var(--ytm-hover);
        --ytmusic-icon-inactive: var(--ytm-on-variant);
        --ytmusic-icon-disabled: var(--ytm-disabled);
        --ytmusic-color-close-button: var(--ytm-on-variant);
        --ytmusic-inline-badge-color: var(--ytm-on-variant);
        --ytmusic-color-badge: var(--ytm-on-variant);
        --ytmusic-message-renderer-text-color: var(--ytm-on-variant);
        --ytmusic-inactive-tab: var(--ytm-on-variant);
        --ytmusic-wordmark-text: var(--ytm-on-surface);
        --ytmusic-alert-with-actions-header-text: var(--ytm-on-surface);
        --ytmusic-two-column-browse-results-description-color: var(--ytm-on-variant);
        --ytmusic-call-to-action-disclaimer: var(--ytm-on-variant);
        --ytmusic-call-to-action: var(--ytm-link);
        --ytmusic-themed-blue: var(--ytm-link);
        --ytmusic-touch-response: var(--ytm-on-surface);
        --ytmusic-focus-active: var(--ytm-primary);
        --ytmusic-guide-entry-focus-border: var(--ytm-primary);
        --ytmusic-guide-hover: var(--ytm-hover);
        --ytmusic-guide-signin-promo-text-secondary: var(--ytm-on-variant);
        --ytmusic-guide-divider: var(--ytm-divider);
        --ytmusic-divider: var(--ytm-divider);
        --ytmusic-ten-percent-layer: var(--ytm-hover);
        --ytmusic-progress-container: var(--ytm-divider);
        --ytmusic-player-bar-container-color: var(--ytm-divider);
        --ytmusic-player-bar-ink-color: var(--ytm-on-variant);
        --ytmusic-player-bar-repeat-disabled: var(--ytm-disabled);
        --ytmusic-player-bar-disabled-secondary-color: var(--ytm-disabled);
        --ytmusic-player-controls-button-disabled: var(--ytm-disabled);
        --ytmusic-play-pause-button-background: var(--ytm-primary);
        --ytmusic-responsive-header-primary-button-background: var(--ytm-primary);
        --ytmusic-responsive-list-item-checked-background-bauhaus: var(--ytm-primary-container);
        --ytmusic-multiselect-form-item-hover-background-color: var(--ytm-hover);
        --ytmusic-menu-renderer-button-hover-background: var(--ytm-hover);
        --ytmusic-shelf-bottom-button-border-color: transparent;
        --ytmusic-navigation-button-outline-color: var(--ytm-outline);
        --ytmusic-immersive-carousel-button-border: var(--ytm-outline);
        --ytmusic-outline-button-border-color: var(--ytm-outline);
        --ytmusic-color-input-border: var(--ytm-outline);
        --ytmusic-toggle-button-chip-border-color: var(--ytm-outline);
        --ytmusic-toggle-button-chip-active-background: var(--ytm-primary-container);
        --ytmusic-badge-chip-background: var(--ytm-surface-high);
        --ytmusic-badge-chip-inactive-hover: var(--ytm-pressed);
        --ytmusic-explore-chip-background: var(--ytm-surface-high);
        --ytmusic-search-bar-background-bauhaus: var(--ytm-surface-container);
        --ytmusic-search-bar-border-bauhaus: var(--ytm-divider);
        --ytmusic-search-border: var(--ytm-divider);
        --ytmusic-search-box-text-secondary: var(--ytm-on-variant);
        --ytmusic-search-suggestion-text-secondary: var(--ytm-on-variant);
        --ytmusic-search-suggestion-icon-color: var(--ytm-on-variant);
        --ytmusic-search-suggestion-focus-active: var(--ytm-primary);
        --ytmusic-search-suggestion-focus-active-background: var(--ytm-hover);
        --ytmusic-menu-popup-background: var(--ytm-surface-high);
        --ytmusic-dialog-background-color: var(--ytm-surface-high);
        --ytmusic-confirm-dialog-outline: var(--ytm-divider);
        --ytmusic-dropdown-background: var(--ytm-surface-high);
        --ytmusic-dropdown-item-hover-background: var(--ytm-hover);
        --ytmusic-dropdown-border-color: var(--ytm-divider);
        --ytmusic-setting-item-toggle-inactive-bar: var(--ytm-outline);
        --ytmusic-color-white-opacity-0-05: var(--ytm-hover);
        --ytmusic-color-white1-alpha10: var(--ytm-hover);

        --yt-sys-color-baseline--base-background: var(--ytm-surface);
        --yt-sys-color-baseline--raised-background: var(--ytm-surface-high);
        --yt-sys-color-baseline--text-primary: var(--ytm-on-surface);
        --yt-sys-color-baseline--text-secondary: var(--ytm-on-variant);
        --yt-sys-color-baseline--text-primary-inverse: var(--ytm-on-primary);
        --yt-sys-color-baseline--outline: var(--ytm-divider);
        --yt-sys-color-baseline--touch-response: var(--ytm-on-surface);

        --t3e41d7b17b187f69: var(--ytm-surface);
        --t518e925f61bdcb91: var(--ytm-surface-high);
        --tbdeaf5bc17152abc: var(--ytm-surface-low);
        --tffc2fd3a644f6275: var(--ytm-on-surface);
        --t4a6da19e16bf221a: var(--ytm-on-variant);
        --t6216186c28b3834b: var(--ytm-on-primary);
        --t2d807bb79e75606d: var(--ytm-link);
        --t7f4f2c6d54836ce0: var(--ytm-hover);
        --t1aab759cd9ddbe39: var(--ytm-hover);
        --tf3fc855af2285f5f: var(--ytm-divider);

        background-color: var(--ytm-surface);
      }

      html:root body {
        background-color: var(--ytm-surface);
        color: var(--ytm-on-surface);
      }

      html:root ytmusic-nav-bar .ytmusic-cast-button:is(
        .cast-button, .chromecast-icon, .cast-connected-button-icon) {
        --iron-icon-fill-color: var(--ytm-on-surface);
        --icon-color: var(--ytm-on-surface);
      }

      html:root ytmusic-nav-bar .app-bar-button.ytmusic-nav-bar {
        background-color: var(--ytm-surface-container);
        color: var(--ytm-link);
        box-shadow: inset 0 0 0 1px var(--ytm-divider);
      }

      html:root ytmusic-nav-bar .app-bar-button.ytmusic-nav-bar:hover {
        background-color: var(--ytm-surface-highest);
      }

      html:root :is(ytmusic-nav-bar, ytmusic-guide-renderer) :is(#guide-button, #guide-icon) {
        --icon-color: var(--ytm-on-surface);
        --iron-icon-fill-color: var(--ytm-on-surface);
        color: var(--ytm-on-surface);
      }

      html:root :is(ytmusic-nav-bar, ytmusic-guide-renderer) #guide-button:hover {
        background-color: var(--ytm-hover);
      }

      html:root ytmusic-app #guide-wrapper.ytmusic-app {
        background-color: var(--ytm-surface-low);
      }

      html:root ytmusic-guide-entry-renderer[active] tp-yt-paper-item.ytmusic-guide-entry-renderer {
        --ytmusic-text-primary: var(--ytm-on-primary-container);
        background-color: var(--ytm-primary-container);
      }

      html:root ytmusic-guide-entry-renderer[active] tp-yt-paper-item.ytmusic-guide-entry-renderer:hover {
        background-color: var(--ytm-selected-hover);
      }

      html:root ytmusic-guide-entry-renderer:not([is-primary]) #play-button.ytmusic-guide-entry-renderer {
        --ytmusic-play-button-guide-icon-color: var(--ytm-on-primary);
        background-color: var(--ytm-primary);
      }

      html:root ytmusic-guide-entry-renderer[play-button-state=loading] #play-button.ytmusic-guide-entry-renderer,
      html:root ytmusic-guide-entry-renderer[play-button-state=playing] #play-button.ytmusic-guide-entry-renderer {
        --ytmusic-play-button-guide-icon-color: var(--ytm-primary);
        background-color: transparent;
      }

      html:root ytmusic-search-box {
        --ytmusic-search-background: var(--ytm-surface-high);
      }

      html:root ytmusic-search-box:is([opened], [has-query]) {
        border-color: transparent;
      }

      html:root ytmusic-search-box:is([opened], [has-query]) .search-container.ytmusic-search-box {
        box-shadow: none;
      }

      html:root ytmusic-search-box #suggestion-list.ytmusic-search-box {
        box-shadow: var(--ytm-elevation);
      }

      html:root :is(
        ytmusic-guide-section-renderer #buttons,
        ytmusic-guide-signin-promo-renderer #sign-in-button,
        ytmusic-add-to-playlist-renderer #actions
      ) :is(button, a, tp-yt-paper-button):not(:disabled, [disabled], [aria-disabled="true"]) {
        --icon-color: currentColor;
        --iron-icon-fill-color: currentColor;
        color: var(--ytm-on-surface);
        background-color: var(--ytm-surface-high);
        border-color: transparent;

        &:hover {
          background-color: var(--ytm-surface-highest);
        }
      }

      html:root :is(ytmusic-detail-header-renderer, ytmusic-immersive-header-renderer) .more-button {
        --ytmusic-toggle-button-color: var(--ytm-on-surface);
      }

      html:root ytmusic-immersive-header-renderer ytmusic-menu-renderer {
        --ytmusic-menu-renderer-overflow-button-color: var(--ytm-on-surface);

        & :is(#button-shape button, #button.ytmusic-menu-renderer) {
          --icon-color: currentColor;
          --iron-icon-fill-color: currentColor;
          color: var(--ytmusic-menu-renderer-overflow-button-color);

          &:hover:not(:disabled, [disabled], [aria-disabled="true"]) {
            background-color: var(--ytm-button-hover);
          }
        }
      }

      html:root :is(
        ytmusic-carousel-shelf-basic-header-renderer #more-content-button,
        ytmusic-shelf-renderer #bottom-button,
        .ytmusicGridCarouselShelfHeaderTrailingButton,
        ytmusic-app .ytSectionHeaderViewModelTrailingActionsContainer > yt-flexible-actions-view-model,
        ytmusic-card-shelf-renderer .actions-container ytmusic-toggle-button-renderer
      ) :is(button, a, tp-yt-paper-button):not(:disabled, [disabled], [aria-disabled="true"]),
      html:root ytmusic-shelf-renderer .more-button.ytmusic-shelf-renderer
        :is(button, a.ytSpecButtonShapeNextHost, tp-yt-paper-button):not(:disabled, [disabled], [aria-disabled="true"]),
      html:root :is(ytmusic-carousel-shelf-renderer, ytmusic-immersive-carousel-shelf-renderer)
        :is(#previous-items-button, #next-items-button),
      html:root .ytmusicGridCarouselShelfSectionHeader .ytmusicGridCarouselShelfChevronButton button[aria-label],
      html:root .ytSectionHeaderViewModelChevron button {
        --yt-button-color: var(--ytm-on-surface);
        --icon-color: currentColor;
        --iron-icon-fill-color: currentColor;
        color: var(--ytm-on-surface);
        background-color: transparent;
        border: 1px solid var(--ytm-outline);

        &:hover:not(:disabled, [disabled], [aria-disabled="true"]) {
          background-color: var(--ytm-button-hover);
          border-color: var(--ytm-on-variant);
        }

        &:is(:disabled, [disabled], [aria-disabled="true"]) {
          color: var(--ytm-outline);
          border-color: var(--ytm-divider);
          opacity: 1;
        }
      }

      html:root ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer {
        --yt-endpoint-hover-color: var(--ytm-on-surface);
        color: var(--ytm-on-surface);
        background-color: var(--ytm-surface-container);
        border-color: var(--ytm-divider);
      }

      html:root ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer:hover {
        background-color: var(--ytm-surface-highest);
      }

      html:root ytmusic-chip-cloud-chip-renderer:is([is-selected], [selected], .iron-selected)
        a.ytmusic-chip-cloud-chip-renderer {
        --yt-endpoint-hover-color: var(--ytm-on-primary-container);
        background-color: var(--ytm-primary-container) !important;
        border-color: transparent;
        color: var(--ytm-on-primary-container) !important;
      }

      html:root ytmusic-chip-cloud-chip-renderer:is([is-selected], [selected], .iron-selected)
        a.ytmusic-chip-cloud-chip-renderer:hover {
        background-color: var(--ytm-selected-hover) !important;
      }

      html:root #browse-page ytmusic-section-list-renderer #header
        ytmusic-chip-cloud-renderer[chip-type="DEFAULT"] ytmusic-chip-cloud-chip-renderer a[role="tab"] {
        background-color: transparent;
        border: 1px solid var(--ytm-outline);

        &:hover {
          background-color: var(--ytm-button-hover);
          border-color: var(--ytm-on-variant);
        }
      }

      html:root #browse-page ytmusic-section-list-renderer #header
        ytmusic-chip-cloud-renderer[chip-type="DEFAULT"] ytmusic-chip-cloud-chip-renderer a[role="tab"][aria-selected="true"],
      html:root ytmusic-search-page ytmusic-chip-cloud-chip-renderer
        a.ytmusic-chip-cloud-chip-renderer:is(
          [aria-selected="true"],
          [role="button"]:has(> yt-icon):not(:has(> .text))
        ),
      html:root ytmusic-search-page ytmusic-chip-cloud-chip-renderer:is(
        [is-selected], [selected], .iron-selected, [data-ytm-clear-filter]
      )
        a.ytmusic-chip-cloud-chip-renderer {
        --yt-endpoint-hover-color: var(--ytm-on-primary);
        --icon-color: currentColor;
        --iron-icon-fill-color: currentColor;
        background-color: var(--ytm-primary) !important;
        border-color: transparent;
        color: var(--ytm-on-primary) !important;

        &:hover {
          background-color: #292929 !important;
        }
      }

      html:root ytmusic-search-page ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer {
        background-color: var(--ytm-surface-container);

        &:is(:hover, :focus-visible) {
          background-color: color-mix(in srgb, var(--ytm-on-surface) 14%, var(--ytm-surface-container));
        }
      }

      html:root ytmusic-search-page ytmusic-tabs {
        &.stuck {
          background-color: var(--ytmusic-nav-bar);
        }

        & .tab-container.ytmusic-tabs {
          border-color: var(--ytm-divider);
        }

        & .tab.ytmusic-tabs {
          color: var(--ytm-on-variant);

          &.selected {
            color: var(--ytm-primary);
            border-bottom-color: var(--ytm-primary);
          }
        }
      }

      html:root ytmusic-card-shelf-renderer {
        & :is(.undercards-container-text, #undercards > yt-formatted-string,
          #undercards > yt-attributed-string, #undercards ytmusic-message-renderer[render-style=RENDER_STYLE_SIMPLE_HEADER]),
        & :is(.undercards-container-text, #undercards > yt-formatted-string,
          #undercards > yt-attributed-string, #undercards ytmusic-message-renderer[render-style=RENDER_STYLE_SIMPLE_HEADER]) * {
          --ytmusic-message-renderer-text-color: #000;
          --ytmusic-text-primary: #000;
          --yt-endpoint-color: #000;
          --yt-endpoint-hover-color: #000;
          --yt-endpoint-visited-color: #000;
          color: #000 !important;
          -webkit-text-fill-color: #000 !important;
        }
      }

      html:root :is(
        ytmusic-card-shelf-renderer .main-action-container :is(ytmusic-menu-renderer, yt-button-shape, yt-icon-button),
        ytmusic-player-bar:not([player-fullscreened]) .middle-controls-buttons
          :is(ytmusic-like-button-renderer, ytmusic-menu-renderer)
      ) {
        --ytmusic-text-primary: #000;
        --ytmusic-menu-renderer-overflow-button-color: #000;
        --yt-button-color: #000;
        --icon-color: #000;
        --iron-icon-fill-color: #000;
        color: #000;

        & :is(yt-button-shape, button, yt-icon-button, yt-icon, .ytIconWrapperHost) {
          color: #000 !important;
        }

        & svg [fill]:not([fill="none"], [fill^="url("]) {
          fill: #000;
        }

        & svg [stroke]:not([stroke="none"], [stroke^="url("]) {
          stroke: #000;
        }
      }

      html:root ytmusic-live-badge-renderer,
      html:root ytmusic-live-badge-renderer yt-formatted-string {
        color: #fff;
      }

      html:root ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER])
        button.ytmusic-navigation-button-renderer:is(:hover, :focus-within) {
        background-color: var(--ytm-surface-highest);
      }

      html:root :is(
        ytmusic-card-shelf-renderer :is(#actions, .actions-container) :is(
          ytmusic-toggle-button-renderer :is(button, a, tp-yt-paper-button),
          :is(button, a):is(.ytSpecButtonShapeNextOutline, .yt-spec-button-shape-next--outline),
          yt-button-renderer.style-white-translucent :is(button, a, tp-yt-paper-button)
        ),
        ytmusic-card-shelf-renderer:not([has-under-card-content]) :is(#actions, .actions-container)
          :is(button, a, tp-yt-paper-button):not(.ytSpecButtonShapeNextFilled, .yt-spec-button-shape-next--filled),
        .ytmusicHorizontalActionCardViewModelHostBodyButton
          :is(button, a):is(.ytSpecButtonShapeNextOutline, .yt-spec-button-shape-next--outline)
      ):not(:disabled, [disabled], [aria-disabled="true"]) {
        --yt-button-color: var(--ytm-card-action-ink, var(--ytm-on-surface));
        --icon-color: currentColor;
        --iron-icon-fill-color: currentColor;
        color: var(--yt-button-color) !important;
        -webkit-text-fill-color: currentColor !important;
        background-color: transparent;
        border: 1px solid var(--ytm-on-variant) !important;

        &:hover {
          background-color: var(--ytm-button-hover) !important;
        }

        & :is(yt-icon, .ytIconWrapperHost, .ytSpecButtonShapeNextIcon, .yt-spec-button-shape-next__icon) {
          color: inherit !important;
        }

        & :is(.ytSpecButtonShapeNextButtonTextContent, .yt-spec-button-shape-next__button-text-content, yt-formatted-string) {
          -webkit-text-fill-color: inherit !important;
        }
      }

      html:root ytmusic-browse-response[has-background]:not([disable-gradient])
        .background-gradient.ytmusic-browse-response,
      html:root ytmusic-player-page:not([player-fullscreened]) .background-gradient.ytmusic-player-page {
        background-image: linear-gradient(to bottom, var(--ytm-artwork-wash), var(--ytm-surface));
      }

      html:root ytmusic-immersive-header-renderer
        .image.ytmusic-immersive-header-renderer ~ .content-container-wrapper.ytmusic-immersive-header-renderer {
        background-color: var(--ytm-hero-scrim);
      }

      html:root ytmusic-responsive-header-renderer[is-playlist-detail-page]
        #action-buttons.ytmusic-responsive-header-renderer ytmusic-menu-renderer {
        --ytmusic-menu-renderer-overflow-button-color: var(--ytm-on-surface);
        --icon-color: var(--ytm-on-surface);
        --iron-icon-fill-color: var(--ytm-on-surface);
        background-color: var(--ytm-surface-high) !important;

        & :is(button, yt-icon-button):not(:disabled, [disabled], [aria-disabled="true"]) {
          color: var(--ytm-on-surface);
        }
      }

      html:root ytmusic-player-page:not([player-fullscreened]) #side-panel.ytmusic-player-page {
        --ytmusic-static-brand-black: var(--ytm-surface);
      }

      html:root ytmusic-player-page:not([player-fullscreened]) tp-yt-paper-tabs {
        --paper-tabs-selection-bar-color: var(--ytm-primary);
      }

      html:root ytmusic-player-page:not([player-fullscreened]) tp-yt-paper-tabs
        .tp-yt-paper-tabs[style-target=content],
      html:root ytmusic-player-page:not([player-fullscreened]) tp-yt-paper-tab.ytmusic-player-page {
        color: var(--ytm-on-variant);
      }

      html:root ytmusic-player-page:not([player-fullscreened])
        tp-yt-paper-tab.ytmusic-player-page.iron-selected {
        color: var(--ytm-primary);
      }

      html:root ytmusic-player-page:not([player-fullscreened]) tp-yt-paper-tab.ytmusic-player-page[disabled] {
        color: var(--ytm-disabled);
      }

      html:root ytmusic-player-queue-item:is([play-button-state=loading], [play-button-state=paused],
        [play-button-state=playing]),
      html:root ytmusic-responsive-list-item-renderer:is([play-button-state=loading],
        [play-button-state=paused], [play-button-state=playing]) {
        background-color: var(--ytm-primary-container);
      }

      html:root ytmusic-player-controls:not([player-fullscreened]):not([is-advertisement])
        .play-pause-button-wrapper.ytmusic-player-controls {
        color: var(--ytm-on-primary);
      }

      html:root ytmusic-player-bar:not([player-fullscreened]) {
        box-shadow: 0 -1px var(--ytm-divider);
      }

      html:root ytmusic-player-bar:not([player-fullscreened])
        yt-icon-button.ytmusic-player-bar:hover:not([disabled], [aria-disabled="true"], :has(> button:disabled)) {
        background-color: color-mix(in srgb, var(--ytm-on-surface) 16%, var(--ytm-surface-container));

        &:active {
          background-color: color-mix(in srgb, var(--ytm-on-surface) 23%, var(--ytm-surface-container));
        }
      }

      html:root ytmusic-player-bar:not([player-fullscreened]) #progress-bar.ytmusic-player-bar {
        --paper-slider-container-color: var(--ytm-track);
        --paper-slider-secondary-color: var(--ytm-outline);
      }

      html:root ytmusic-player-bar #hover-time-info.ytmusic-player-bar {
        color: var(--ytm-on-inverse);
        background-color: var(--ytm-inverse);
      }

      html:root ytmusic-player-page:not([player-fullscreened]) ytmusic-av-toggle .av-toggle {
        background-color: var(--ytm-surface-high);
      }

      html:root ytmusic-player-page:not([player-fullscreened]) ytmusic-av-toggle .ytmusic-av-toggle:is(
        .song-button, .video-button) {
        background-color: transparent;
        color: var(--ytm-on-variant);
      }

      html:root ytmusic-player-page:not([player-fullscreened])
        ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle,
      html:root ytmusic-player-page:not([player-fullscreened])
        ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
        background-color: var(--ytm-primary-container);
        color: var(--ytm-on-primary-container);
      }

      html:root ytmusic-app :is(.thumbnail-overlay, .image-overlay),
      html:root :is(ytmusic-player-page, ytmusic-player-bar, ytmusic-player-controls)[player-fullscreened] {
        --ytmusic-overlay-text-primary: #fff;
        --ytmusic-overlay-text-secondary: #ffffffe0;
        --ytmusic-overlay-text-disabled: #ffffff66;
        --ytmusic-overlay-button-primary: #ffffff4d;
        --ytmusic-overlay-button-secondary: #ffffff26;
      }

      html:root :is(ytmusic-player-bar, ytmusic-player-controls)[player-fullscreened] {
        --ytmusic-player-bar-background: transparent;
        --ytmusic-text-primary: #fff;
        --ytmusic-text-secondary: #ffffffe0;
        --ytmusic-icon-inactive: #ffffffe0;
      }

      html:root ytmusic-player :is(.song-media-controls.ytmusic-player, #bezel.ytmusic-player) {
        --ytmusic-text-primary: #fff;
        --icon-color: #fff;
        --iron-icon-fill-color: #fff;
        color: #fff;

        & yt-icon-button.ytmusic-player:not([disabled]) {
          color: inherit;
        }
      }

      html:root ytmusic-comments {
        --td8562cdc203bc683: var(--ytm-divider);
        --t02c0a2c868c14ce8: var(--ytm-outline);
        --yt-endpoint-color: var(--ytm-link);
        --yt-endpoint-hover-color: var(--ytm-link);
        --yt-endpoint-visited-color: var(--ytm-link);
        --yt-button-color: var(--ytm-on-surface);
        color: var(--ytm-on-surface);
        background-color: var(--ytm-surface);

        & :is(
          yt-formatted-string.ytd-comments-header-renderer,
          #author-text.ytd-comment-view-model:not(.channel-owner),
          #content-text.ytd-comment-view-model,
          ytd-comment-engagement-bar[is-liked] :is(#vote-count-left, #vote-count-middle),
          .removed-placeholder.ytd-comment-thread-renderer
        ) {
          color: var(--ytm-on-surface);
        }

        & :is(
          #red-commenting-text.ytd-comments-header-renderer,
          #published-time-text.ytd-comment-view-model,
          .more-button.ytd-comment-view-model,
          .less-button.ytd-comment-view-model,
          .translate-button.ytd-comment-view-model,
          .dot.ytd-comment-replies-renderer,
          #placeholder-text.ytd-comment-reply-dialog-renderer,
          #simplebox-placeholder.ytd-comment-simplebox-renderer,
          ytd-comment-engagement-bar,
          #reply-button-end.ytd-comment-engagement-bar
        ) {
          color: var(--ytm-on-variant);
        }

        & #published-time-text.ytd-comment-view-model {
          --yt-endpoint-color: var(--ytm-on-variant);
          --yt-endpoint-visited-color: var(--ytm-on-variant);
        }

        & #content-text.ytd-comment-view-model {
          --yt-endpoint-color: var(--ytm-link);
          --yt-endpoint-hover-color: var(--ytm-link);
          --yt-endpoint-visited-color: var(--ytm-link);
        }

        & .channel-owner.ytd-comment-view-model {
          background-color: var(--ytm-primary-container);
          color: var(--ytm-on-primary-container);
        }

        & #pinned-comment-badge.ytd-comment-view-model :is(
          ytw-pinned-comment-badge-renderer, .ytwPinnedCommentBadgeRendererCommentPin
        ) {
          --icon-color: currentColor;
          --iron-icon-fill-color: currentColor;
          color: var(--ytm-on-variant);
        }

        & ytd-author-comment-badge-renderer {
          --ytd-author-comment-badge-name-color: var(--ytm-on-surface);
          --yt-endpoint-color: var(--ytd-author-comment-badge-name-color);
          --yt-endpoint-hover-color: var(--ytd-author-comment-badge-name-color);
          --yt-endpoint-visited-color: var(--ytd-author-comment-badge-name-color);

          &[creator] {
            --ytd-author-comment-badge-background-color: var(--ytm-primary-container);
            --ytd-author-comment-badge-name-color: var(--ytm-on-primary-container);
          }

          & #icon.ytd-author-comment-badge-renderer {
            color: var(--ytd-author-comment-badge-name-color);
          }
        }

        & #action-menu.ytd-comment-view-model :is(button, yt-icon-button, yt-icon, .ytIconWrapperHost) {
          --icon-color: currentColor;
          --iron-icon-fill-color: currentColor;
          color: var(--ytm-on-variant);
        }

        & ytd-creator-heart-renderer {
          /* Use one silhouette for the red heart and its surface-colored border. */
          --ytm-heart-shape: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21 3.8 13.3C-2 7.7 5.5.8 12 6.6c6.5-5.8 14 1.1 8.2 6.7Z'/%3E%3C/svg%3E");

          & #hearted-thumbnail.ytd-creator-heart-renderer {
            border-color: var(--ytm-divider);
          }

          & :is(#hearted, #hearted-border).ytd-creator-heart-renderer {
            mask: var(--ytm-heart-shape) center / contain no-repeat;
            background-color: currentColor;

            & > * {
              visibility: hidden;
            }
          }

          & #hearted.ytd-creator-heart-renderer {
            color: #f03;
          }

          & #hearted-border.ytd-creator-heart-renderer {
            color: var(--ytm-surface);
          }

          & #unhearted.ytd-creator-heart-renderer {
            color: var(--ytm-on-variant);
          }
        }

        & :is(ytd-comment-simplebox-renderer, ytd-comment-reply-dialog-renderer) #placeholder-area {
          border-color: var(--ytm-divider);
        }

        & :is(.continuation.ytd-comment-view-model, .ytSubThreadConnection, .ytSubThreadContinuation) {
          border-color: var(--ytm-divider);
        }

        & ytd-comment-view-model[hovered] .continuation.ytd-comment-view-model {
          border-color: var(--ytm-outline);
        }

        & .ytSubThreadHovered > .ytSubThreadThreadline :is(.ytSubThreadConnection, .ytSubThreadContinuation) {
          border-color: var(--ytm-outline);
        }

        & ytd-commentbox {
          --paper-input-container-input-color: var(--ytm-on-surface);
          --paper-input-container-focus-color: var(--ytm-primary);

          & #contenteditable-textarea.ytd-commentbox {
            --contenteditable-root-style-placeholder-with-aria-color: var(--ytm-on-variant);
            color: var(--ytm-on-surface);

            &[aria-label]:empty::before {
              color: var(--ytm-on-variant);
            }
          }

          & #input-container.ytd-commentbox {
            --paper-input-container-underline-color: var(--ytm-outline);
            --paper-input-container-underline-focus-color: var(--ytm-primary);
          }
        }

        & :is(button, a):is(.ytSpecButtonShapeNextText, .ytSpecButtonShapeNextTonal, .ytSpecButtonShapeNextOutline) {
          &:is(.ytSpecButtonShapeNextMono, .ytSpecButtonShapeNextMonoInverse) {
            color: var(--ytm-on-surface);
          }

          &.ytSpecButtonShapeNextCallToAction.ytSpecButtonShapeNextText {
            color: var(--ytm-link);
          }

          &:hover:not(:disabled, [aria-disabled="true"], .ytSpecButtonShapeNextDisabled) {
            background-color: var(--ytm-hover);
          }
        }
      }

      html:root :is(ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer,
        ytmusic-player-queue-item) :is(ytmusic-menu-renderer.menu, .save-to-library-button) {
        --ytmusic-menu-renderer-overflow-button-color: var(--ytm-on-surface);
        --yt-button-color: var(--ytm-on-surface);
        --icon-color: var(--ytm-on-surface);
        --iron-icon-fill-color: var(--ytm-on-surface);
        color: var(--ytm-on-surface);

        & :is(button, a, yt-icon-button):not(:disabled, [disabled], [aria-disabled="true"]) {
          color: var(--ytm-on-surface);

          &:is(.ytSpecButtonShapeNextFilled, .yt-spec-button-shape-next--filled) {
            background-color: var(--ytm-surface-high);
          }
        }
      }

      html:root ytmusic-multi-row-list-item-renderer:is(:hover, [focus-within])
        ytmusic-menu-renderer.menu.ytmusic-multi-row-list-item-renderer {
        background: var(--ytm-surface-high);
      }

      /* Use the artist-header hover treatment for other compact action buttons. */
      html:root :is(
        ytmusic-menu-renderer,
        ytmusic-like-button-renderer,
        ytmusic-player-bar:not([player-fullscreened]) .middle-controls-buttons
      ) :is(button.ytSpecButtonShapeNextIconButton, button.yt-spec-button-shape-next--icon-button, yt-icon-button) {
        &:hover:not(:disabled, [disabled], [aria-disabled="true"], :has(> button:disabled),
          ytmusic-player-bar[player-fullscreened] *) {
          background-color: var(--ytm-button-hover) !important;
        }
      }

      html:root ytmusic-popup-container {
        --paper-dialog-background-color: var(--ytm-surface-high);
        --paper-listbox-background-color: var(--ytm-surface-high);
      }

      html:root ytmusic-multi-page-menu-renderer {
        --t08a7c6c176cbc5c2: var(--ytmusic-search-bar-background-bauhaus);
        --yt-endpoint-color: var(--ytm-on-surface);
        --yt-endpoint-hover-color: var(--ytm-on-surface);
        --yt-endpoint-visited-color: var(--ytm-on-surface);
        --yt-compact-link-color: var(--ytm-on-surface);
        --yt-compact-link-icon-color: var(--ytm-on-surface);
        background-color: var(--ytmusic-search-bar-background-bauhaus);
        color: var(--ytm-on-surface);
        box-shadow: var(--ytm-elevation);

        & :is(
          #account-name.ytd-active-account-header-renderer,
          #name.ytd-google-account-header-renderer,
          #channel-title.ytd-account-item-renderer,
          #selected.ytd-account-item-renderer,
          #studio-redirect.ytd-account-item-renderer,
          #back-button.ytd-simple-menu-header-renderer,
          yt-formatted-string.ytd-account-item-section-header-renderer,
          h2.yt-multi-page-menu-section-renderer
        ) {
          color: var(--ytm-on-surface);
        }

        & :is(
          #channel-handle.ytd-active-account-header-renderer,
          #email.ytd-active-account-header-renderer,
          #email.ytd-google-account-header-renderer,
          yt-formatted-string.ytd-account-item-renderer[secondary],
          #subtitle.ytd-compact-link-renderer,
          ytd-compact-link-renderer[compact-link-style=compact-link-style-type-disclaimer] #label
        ) {
          color: var(--ytm-on-variant);
        }

        & ytd-simple-menu-header-renderer {
          background-color: var(--ytmusic-search-bar-background-bauhaus);
          color: var(--ytm-on-surface);
        }

        & :is(
          ytd-active-account-header-renderer,
          ytd-simple-menu-header-renderer,
          #container.ytd-google-account-header-renderer,
          .ytmusicMultiPageMenuRendererSections > *,
          .ytmusicMultiPageMenuRendererFooter > *
        ) {
          border-color: var(--ytm-divider);
        }

        & #manage-account.ytd-active-account-header-renderer {
          --yt-endpoint-color: var(--ytm-link);
          --yt-endpoint-hover-color: var(--ytm-link);
          --yt-endpoint-visited-color: var(--ytm-link);
          color: var(--ytm-link);

          & a {
            color: inherit;
          }
        }
      }

      html:root :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer) {
        background-color: var(--ytmusic-menu-popup-background);
      }

      /* Draw the border around the scroll viewport, independent of its rows. */
      html:root ytmusic-menu-popup-renderer {
        box-sizing: border-box;
        border: 1px solid var(--ytm-outline);
      }

      html:root :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer)
        > tp-yt-paper-listbox:is(.ytmusic-menu-popup-renderer, .ytmusic-playback-rate-popup-renderer) {
        --paper-listbox-background-color: transparent;
      }

      html:root ytmusic-menu-popup-renderer > tp-yt-paper-listbox.ytmusic-menu-popup-renderer {
        border-width: 0;
      }

      html:root :is(
        ytmusic-sort-filter-button-renderer > button,
        yt-sort-filter-sub-menu-renderer :is(#icon-label, #label-icon, [style-target=label-text])
      ) {
        --icon-color: var(--ytm-on-surface);
        --iron-icon-fill-color: var(--ytm-on-surface);
        color: var(--ytm-on-surface);
      }

      html:root ytmusic-sort-filter-button-renderer > button.ytmusic-sort-filter-button-renderer {
        border-color: var(--ytm-divider);
        background-color: var(--ytm-surface-container);
      }

      html:root :is(
        ytmusic-sort-filter-button-renderer > button.ytmusic-sort-filter-button-renderer,
        yt-sort-filter-sub-menu-renderer yt-dropdown-menu tp-yt-paper-menu-button
      ):is(:hover, :focus-visible):not([disabled], :disabled, [aria-disabled="true"]) {
        background-color: var(--ytm-button-hover);
      }

      html:root tp-yt-paper-listbox.yt-dropdown-menu:has(.item.yt-dropdown-menu),
      html:root ytmusic-multi-select-menu-renderer :is(#container, #items).ytmusic-multi-select-menu-renderer {
        background-color: var(--ytm-surface-high);
        color: var(--ytm-on-surface);
      }

      html:root tp-yt-paper-listbox.yt-dropdown-menu {
        & :is(.item, .yt-simple-endpoint, #subtitle).yt-dropdown-menu {
          --yt-endpoint-color: var(--ytm-on-surface);
          --yt-endpoint-hover-color: var(--ytm-on-surface);
          color: var(--ytm-on-surface);
        }

        & :is(.iron-selected, tp-yt-paper-item).yt-dropdown-menu:is(.iron-selected, :hover, :focus-visible) {
          background-color: var(--ytm-button-hover);
        }
      }

      html:root :is(ytmusic-menu-popup-renderer, ytmusic-multi-select-menu-renderer) {
        --ytm-menu-icon: var(--ytm-on-surface);
        --ytm-menu-highlight: #c9c9c9;
        --ytmusic-menu-item-focus-background-color: transparent;

        & #items :is(
          ytmusic-menu-navigation-item-renderer,
          ytmusic-menu-service-item-renderer,
          ytmusic-toggle-menu-service-item-renderer,
          ytmusic-multi-select-menu-item-renderer,
          ytmusic-menu-service-item-download-renderer > tp-yt-paper-item,
          [role="menuitem"]
        ):not([is-disabled], [disabled], [aria-disabled="true"], [is-request-in-progress]):is(
          :hover, :focus-visible:not(.no-focus-outline *), :has(:focus-visible:not(.no-focus-outline *))
        ) {
          background-color: var(--ytm-menu-highlight);
        }

        & :is([is-disabled], [disabled], [aria-disabled="true"]) {
          --ytm-menu-icon: var(--ytm-disabled);
        }

        & :is(
          .icon.ytmusic-menu-navigation-item-renderer,
          .icon.ytmusic-menu-service-item-renderer,
          .icon.ytmusic-toggle-menu-service-item-renderer,
          .icon.ytmusic-multi-select-menu-item-renderer,
          .ytmusic-menu-service-item-download-renderer:is(.primary-entry-icon, .secondary-entry-icon)
        ) {
          --icon-color: var(--ytm-menu-icon);
          --iron-icon-fill-color: var(--ytm-menu-icon);
          color: var(--ytm-menu-icon);
          fill: currentColor;

          & svg:not([fill="none"], [fill^="url("]),
          & svg [fill]:not([fill="none"], [fill^="url("]) {
            fill: var(--ytm-menu-icon);
          }

          & svg[stroke]:not([stroke="none"], [stroke^="url("]),
          & svg [stroke]:not([stroke="none"], [stroke^="url("]) {
            stroke: var(--ytm-menu-icon);
          }
        }
      }

      html:root ytmusic-settings-page .category-menu-item:focus:not(.iron-selected) {
        background-color: var(--ytm-hover);
      }

      html:root ytmusic-settings-page .category-menu-item.iron-selected {
        background-color: var(--ytm-primary-container);
        color: var(--ytm-on-primary-container);
      }

      html:root ytmusic-popup-container yt-notification-action-renderer {
        --t1405e70a39276293: var(--ytm-inverse);
        --t6216186c28b3834b: var(--ytm-on-inverse);
      }

      html:root ytmusic-app :is(a, button, [tabindex]):focus-visible,
      html:root ytmusic-search-box:focus-within .search-box.ytmusic-search-box {
        outline: 2px solid var(--ytm-primary);
      }

      html:root ytmusic-logo picture:has(img[src*="on_platform_logo_dark.svg"]) {
        position: relative;
      }

      html:root ytmusic-logo img[src*="on_platform_logo_dark.svg"] {
        clip-path: inset(0 65% 0 0);
      }

      html:root ytmusic-logo picture:has(img[src*="on_platform_logo_dark.svg"])::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--ytm-on-surface);
        mask: url("https://music.youtube.com/img/on_platform_logo_dark.svg") center / contain no-repeat;
        clip-path: inset(0 0 0 35%);
        pointer-events: none;
      }

      html:root :is(ytmusic-card-shelf-renderer, .ytmusicHorizontalActionCardViewModelHostBodyButton) {
        --ytm-card-action-ink: #000;
      }

      html:root ytmusic-card-shelf-renderer {
        --ytmusic-text-secondary: color-mix(in srgb, var(--ytm-on-surface) 44%, var(--ytm-on-variant));
        --ytmusic-overlay-text-secondary: var(--ytmusic-text-secondary);

        & .card-container.ytmusic-card-shelf-renderer {
          background-color: var(--ytm-surface-low);
        }

        & .immersive-background.ytmusic-card-shelf-renderer::before {
          background-image: linear-gradient(
            180deg, color-mix(in srgb, var(--ytm-surface-low) 58%, transparent), var(--ytm-surface-high) 87%
          );
        }
      }

      /* Use the inverse stock treatment for solid white controls. */
      html:root ytmusic-app :is(
        .ytSpecButtonShapeNextFilled:is(.ytSpecButtonShapeNextMono, .ytSpecButtonShapeNextOverlay, .ytSpecButtonShapeNextOverlayDark),
        .yt-spec-button-shape-next--filled:is(.yt-spec-button-shape-next--mono, .yt-spec-button-shape-next--overlay, .yt-spec-button-shape-next--overlay-dark),
        :is(yt-button-renderer, ytmusic-toggle-button-renderer).style-mono-filled[is-paper-button],
        yt-button-renderer:is(.style-dark-on-white, .watch-button)[is-paper-button]
      ):not(:disabled, [disabled], [aria-disabled="true"]) {
        --yt-button-color: #fff;
        --icon-color: #fff;
        --iron-icon-fill-color: #fff;
        background-color: #000 !important;
        color: #fff !important;
        -webkit-text-fill-color: #fff !important;

        &:hover {
          background-color: #292929 !important;
        }
      }

      html:root ytd-simple-menu-header-renderer #back-button,
      html:root ytd-simple-menu-header-renderer #back-button :is(button, yt-icon-button, yt-icon, .ytIconWrapperHost, svg) {
        --yt-button-color: #000;
        --icon-color: #000;
        --iron-icon-fill-color: #000;
        color: #000 !important;
      }

      html:root ytd-simple-menu-header-renderer #back-button :is(svg, svg [fill]):not([fill="none"]) {
        fill: #000;
      }

      html:root ytd-simple-menu-header-renderer #back-button :is(svg, svg *)[stroke]:not([stroke="none"]) {
        stroke: #000;
      }
    }
  `);
})();
