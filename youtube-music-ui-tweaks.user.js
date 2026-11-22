// ==UserScript==
// @name         YouTube Music UI Tweaks
// @namespace    https://music.youtube.com/
// @version      1.0.0
// @description  Shared layout, artwork dimming, and menu interaction tweaks for YouTube Music.
// @match        https://music.youtube.com/*
// @run-at       document-start
// @noframes
// @grant        GM_addStyle
// ==/UserScript==

(() => {
  'use strict';

  GM_addStyle(`
    @media (forced-colors: none) {
      html:root:root {
        --ytm-radius-compact: 4px;
        --ytm-radius-medium: 8px;
        --ytm-radius-popup: 14px;
        --ytm-radius-pill: 24px;
      }

      html:root ytmusic-app tp-yt-app-drawer[persistent] #guide-wrapper.ytmusic-app {
        transition: background-color .2s, border-color .2s;
      }

      html:root ytmusic-guide-entry-renderer tp-yt-paper-item.ytmusic-guide-entry-renderer {
        border-radius: var(--ytm-radius-medium);

        &::before {
          border-radius: inherit;
        }
      }

      html:root ytmusic-search-box .search-container.ytmusic-search-box > .search-box.ytmusic-search-box {
        border-radius: var(--ytm-radius-pill);
      }

      html:root ytmusic-search-box .search-container.ytmusic-search-box {
        overflow: visible;
      }

      html:root ytmusic-search-box #suggestion-list.ytmusic-search-box {
        margin-block-start: 8px;
        border-radius: var(--ytm-radius-popup);
      }

      html:root :is(
        ytmusic-guide-section-renderer #buttons,
        ytmusic-guide-signin-promo-renderer #sign-in-button,
        ytmusic-add-to-playlist-renderer #actions
      ) :is(button, a, tp-yt-paper-button):not(:disabled, [disabled], [aria-disabled="true"]) {
        border-radius: var(--ytm-radius-pill);
      }

      html:root ytmusic-guide-section-renderer #buttons
        :is(button, a.ytSpecButtonShapeNextHost, a.yt-spec-button-shape-next, tp-yt-paper-button) {
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-inline: 0;
        padding-inline: 12px;
        text-align: center;

        & > :is(.ytSpecButtonShapeNextIcon, .yt-spec-button-shape-next__icon, yt-icon, yt-formatted-string) {
          margin-inline: 0;
        }
      }

      html:root ytmusic-immersive-header-renderer ytmusic-menu-renderer {
        & :is(#button-shape button, #button.ytmusic-menu-renderer) {
          &:hover:not(:disabled, [disabled], [aria-disabled="true"]) {
            border-radius: 50%;
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
        border-width: 1px;
        border-style: solid;
        border-radius: var(--ytm-radius-pill);
      }

      html:root #browse-page ytmusic-section-list-renderer #header
        ytmusic-chip-cloud-renderer[chip-type="DEFAULT"] ytmusic-chip-cloud-chip-renderer a[role="tab"] {
        border-width: 1px;
        border-style: solid;
      }

      ytmusic-chip-cloud-chip-renderer a:has(> [data-ytm-chip-label]) > yt-formatted-string.text {
        display: none;
      }

      html:root ytmusic-search-page ytmusic-tabs {
        transition: background-color .2s;
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
        border-width: 1px;
        border-style: solid;
      }

      html:root ytmusic-browse-response[has-background] .immersive-background.ytmusic-browse-response {
        opacity: .22;
      }

      html:root ytmusic-player-page:not([player-fullscreened]) .background-thumbnail.ytmusic-player-page {
        opacity: .24;
      }

      html:root ytmusic-player-page:not([is-mobile-web]) #tab-renderer.ytmusic-player-page
        > .ytmusic-tab-renderer:has(> ytmusic-player-queue#queue):not([hidden]) {
        padding-inline-end: calc(var(--ytmusic-scrollbar-width, 8px) + 4px);
      }

      html:root ytmusic-carousel-shelf-renderer
        :is(ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer) {
        border-radius: var(--ytm-radius-compact);
      }

      html:root ytmusic-player-bar:not([is-mobile-web], [player-fullscreened]) #right-controls.ytmusic-player-bar {
        margin-inline: 0 16px;
      }

      html:root ytmusic-player-bar:not([player-fullscreened])
        yt-icon-button.ytmusic-player-bar:hover:not([disabled], [aria-disabled="true"], :has(> button:disabled)) {
        border-radius: 50%;
      }

      html:root ytmusic-player-bar[player-fullscreened] .play-pause-button.ytmusic-player-bar {
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;

        & > button.yt-icon-button {
          display: grid;
          place-items: center;
        }

        &:hover:not([disabled], [aria-disabled="true"], :has(> button:disabled)) {
          background-color: rgb(255 255 255 / 20%);
        }
      }

      html:root ytmusic-player-bar #hover-time-info.ytmusic-player-bar {
        border-radius: var(--ytm-radius-compact);
        font-weight: 500;
        white-space: nowrap;
      }

      html:root ytmusic-player[player-page-open]:not([player-ui-state=FULLSCREEN])
        #song-image #thumbnail.ytmusic-player {
        border-radius: var(--ytm-radius-medium);
        overflow: hidden;
      }

      html:root ytmusic-player[player-page-open]:is(
        [video-mode]:not([has-av-switcher]), [has-av-switcher][playback-mode=OMV_PREFERRED]
      ) {
        border-radius: 0;
      }

      html:root ytmusic-comments {
        & ytd-comment-view-model[hovered] .continuation.ytd-comment-view-model {
          border-left-width: 1px;
        }
      }

      html:root ytmusic-two-row-item-renderer:not([has-circle-cropped-thumbnail])
        .image-wrapper.ytmusic-two-row-item-renderer {
        border-radius: var(--ytm-radius-medium);
        overflow: hidden;

        & > ytmusic-thumbnail-renderer.image:not([thumbnail-crop=MUSIC_THUMBNAIL_CROP_CIRCLE]) {
          border-radius: inherit;
        }
      }

      html:root :is(ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer):not([has-circle-cropped-thumbnail])
        :is(.left-items, .thumbnail-wrapper):not(:has([thumbnail-crop=MUSIC_THUMBNAIL_CROP_CIRCLE]))
        > :is(ytmusic-thumbnail-renderer.thumbnail, ytmusic-item-thumbnail-overlay-renderer.thumbnail-overlay) {
        border-radius: var(--ytm-radius-compact);
        overflow: hidden;
      }

      html:root ytmusic-player-queue-item .left-items.ytmusic-player-queue-item,
      html:root ytmusic-player-bar .image.ytmusic-player-bar {
        border-radius: var(--ytm-radius-compact);
      }

      html:root ytmusic-player-queue-item .left-items.ytmusic-player-queue-item > .thumbnail.ytmusic-player-queue-item {
        border-radius: inherit;
      }

      html:root :is(ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer,
        ytmusic-player-queue-item) .thumbnail-overlay > ytmusic-background-overlay-renderer {
        background: rgb(0 0 0 / 50%);
      }

      html:root ytmusic-multi-page-menu-renderer {
        border-radius: var(--ytm-radius-popup);
      }

      html:root :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer) {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--ytm-radius-popup);
      }

      html:root :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer)
        > tp-yt-paper-listbox:is(.ytmusic-menu-popup-renderer, .ytmusic-playback-rate-popup-renderer) {
        border: 0;
        border-radius: 0;
      }

      html:root ytmusic-multi-select-menu-renderer #container.ytmusic-multi-select-menu-renderer {
        border-radius: var(--ytm-radius-popup);
        overflow: hidden;
      }

      html:root ytmusic-popup-container :is(tp-yt-paper-dialog, ytmusic-dialog):not(
        [fullscreen], :fullscreen, :has(ytmusic-upsell-dialog-renderer)
      ) {
        border-radius: var(--ytm-radius-popup);
      }

      html:root ytmusic-app :is(a, button, [tabindex]):focus-visible,
      html:root ytmusic-search-box:focus-within .search-box.ytmusic-search-box {
        outline-offset: -2px;
      }

      /* Opening a menu with the pointer can focus its first item. Keep that
         focus invisible until the user navigates with the keyboard. */
      html:root :is(ytmusic-menu-popup-renderer, ytmusic-multi-select-menu-renderer) {
        --ytmusic-menu-item-focus-background-color: transparent;
        --paper-item-focused-background-color: transparent;
        --paper-item-focused-before-opacity: 0;

        & #items :is(
          ytmusic-menu-navigation-item-renderer,
          ytmusic-menu-service-item-renderer,
          ytmusic-toggle-menu-service-item-renderer,
          ytmusic-multi-select-menu-item-renderer,
          ytmusic-menu-service-item-download-renderer > tp-yt-paper-item
        ):not([is-disabled], [disabled], [aria-disabled="true"], [is-request-in-progress]) {
          &:is(:focus, :focus-within):not(:hover) {
            background-color: transparent;
          }

          &:is(:hover, :focus-visible:not(.no-focus-outline *),
            :has(:focus-visible:not(.no-focus-outline *))) {
            background-color: color-mix(in srgb, currentColor 24%, transparent);
          }
        }
      }
    }
  `);

  const chipSelector = 'ytmusic-browse-response ytmusic-section-list-renderer #header ytmusic-chip-cloud-chip-renderer';

  function restoreCategoryLabels() {
    for (const chip of document.querySelectorAll(chipSelector)) {
      const anchor = chip.querySelector('a[role="tab"]');
      if (!anchor) continue;

      const fallback = anchor.querySelector('[data-ytm-chip-label]');
      const hasNativeLabel = Array.from(anchor.childNodes).some(node =>
        node !== fallback && node.textContent.trim()
      );
      if (hasNativeLabel) {
        fallback?.remove();
        continue;
      }

      // Firefox can expose the page's renderer data through an Xray wrapper.
      const data = (chip.wrappedJSObject ?? chip).data?.text;
      const label = (data?.simpleText ?? data?.runs?.map(run => run.text).join('') ?? '').trim();
      if (!label) {
        fallback?.remove();
        continue;
      }

      if (fallback) {
        if (fallback.textContent !== label) fallback.textContent = label;
        continue;
      }

      const text = document.createElement('span');
      text.className = 'text ytmusic-chip-cloud-chip-renderer';
      text.setAttribute('data-ytm-chip-label', '');
      text.textContent = label;
      anchor.append(text);
    }
  }

  const categoryObserver = new MutationObserver(records => {
    const chipsChanged = records.some(({ target, addedNodes }) => {
      const element = target.nodeType === Node.ELEMENT_NODE ? target : target.parentElement;
      return element?.closest(chipSelector) || Array.from(addedNodes).some(node =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches(chipSelector) || node.querySelector(chipSelector))
      );
    });
    if (chipsChanged) restoreCategoryLabels();
  });
  categoryObserver.observe(document, {
    childList: true,
    subtree: true,
    characterData: true,
    attributeFilter: ['aria-selected']
  });
  customElements.whenDefined('ytmusic-chip-cloud-chip-renderer').then(restoreCategoryLabels);
  restoreCategoryLabels();
})();
