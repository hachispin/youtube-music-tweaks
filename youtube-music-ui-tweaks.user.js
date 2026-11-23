// ==UserScript==
// @name         YouTube Music UI Tweaks
// @namespace    https://music.youtube.com/
// @version      1.2.5
// @description  Shared layout, artwork dimming, and menu interaction tweaks for YouTube Music.
// @match        https://music.youtube.com/*
// @run-at       document-start
// @noframes
// @grant        GM_addStyle
// ==/UserScript==

(() => {
  'use strict';

  GM_addStyle(`
    img[data-ytm-artwork-fallback] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    :is(.image-wrapper, .left-items):has(> img[data-ytm-artwork-fallback]:not([hidden])) {
      & > :is(ytmusic-thumbnail-renderer.image, ytmusic-thumbnail-renderer.thumbnail, yt-img-shadow.thumbnail),
      & > .thumbnail-wrapper > ytmusic-thumbnail-renderer.thumbnail {
        visibility: hidden;
      }
    }

    .left-items > img[data-ytm-artwork-fallback] {
      border-radius: var(--ytm-radius-compact, 2px);
    }

    [has-circle-cropped-thumbnail] :is(.image-wrapper, .left-items) > img[data-ytm-artwork-fallback],
    :is(.image-wrapper, .left-items):has(
      > ytmusic-thumbnail-renderer[thumbnail-crop="MUSIC_THUMBNAIL_CROP_CIRCLE"],
      > .thumbnail-wrapper > ytmusic-thumbnail-renderer[thumbnail-crop="MUSIC_THUMBNAIL_CROP_CIRCLE"]
    ) > img[data-ytm-artwork-fallback] {
      border-radius: 50%;
    }

    ytmusic-responsive-list-item-renderer[unplayable] .left-items > img[data-ytm-artwork-fallback] {
      visibility: hidden;
    }

    @media (forced-colors: none) {
      html:root:root {
        --ytm-radius-compact: 4px;
        --ytm-radius-medium: 8px;
        --ytm-radius-menu: 2px;
        --ytm-radius-popup: 14px;
        --ytm-radius-pill: 24px;
        --ytm-thumbnail-scrim: rgb(0 0 0 / 50%);
        --ytm-menu-hover: var(--ytmusic-search-suggestion-focus-active-background, rgb(255 255 255 / 10%));
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

      /* The inner field already has a border in both search states. */
      html:root ytmusic-search-box:not([is-mobile-view]):is([opened], [has-query]) {
        border-width: 0;
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
        padding-inline: 7px 17px;
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
        border-radius: var(--ytm-radius-pill);
      }

      ytmusic-chip-cloud-chip-renderer a:has(> [data-ytm-chip-label]) > yt-formatted-string.text {
        display: none;
      }

      ytmusic-chip-cloud-chip-renderer[chip-style="STYLE_ICON_SECOND"] [data-ytm-chip-icon] {
        order: 1;
      }

      html:root ytmusic-search-page ytmusic-tabs {
        transition: background-color .2s;
      }

      html:root :is(
        ytmusic-search-page,
        #browse-page ytmusic-section-list-renderer #header ytmusic-chip-cloud-renderer[chip-type="DEFAULT"]
      ) ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer {
        height: 36px;
        min-width: 36px;
        border: 0;
        border-radius: var(--ytm-radius-medium);
      }

      @media (prefers-color-scheme: dark) {
        html:root :is(
          ytmusic-search-page,
          #browse-page ytmusic-section-list-renderer #header ytmusic-chip-cloud-renderer[chip-type="DEFAULT"]
        ) ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer {
          --ytm-filter-base: var(--ytmusic-background);
          --ytm-filter-fill: color-mix(in srgb, var(--ytmusic-color-white1) 10%, var(--ytm-filter-base));
          --yt-endpoint-color: currentColor;
          --yt-endpoint-hover-color: currentColor;
          --yt-endpoint-visited-color: currentColor;
          --icon-color: currentColor;
          --iron-icon-fill-color: currentColor;
          background-color: var(--ytm-filter-fill);
          color: var(--ytmusic-color-white1);

          &:is(:hover, :focus-visible) {
            background-color: color-mix(in srgb, var(--ytmusic-color-white1) 12%, var(--ytm-filter-fill));
          }

          & > yt-icon {
            color: inherit;
          }
        }

        html:root #browse-page ytmusic-section-list-renderer #header ytmusic-chip-cloud-renderer[chip-type="DEFAULT"]
          ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer {
          --ytm-filter-base: transparent;
        }

        html:root :is(
          ytmusic-search-page,
          #browse-page ytmusic-section-list-renderer #header ytmusic-chip-cloud-renderer[chip-type="DEFAULT"]
        ) :is(
          ytmusic-chip-cloud-chip-renderer a.ytmusic-chip-cloud-chip-renderer[aria-selected="true"],
          ytmusic-chip-cloud-chip-renderer:is([is-selected], [selected], .iron-selected, [data-ytm-clear-filter])
            a.ytmusic-chip-cloud-chip-renderer
        ) {
          --ytm-filter-fill: var(--ytmusic-color-white1);
          color: var(--ytmusic-color-black4);

          &:is(:hover, :focus-visible) {
            background-color: color-mix(in srgb, var(--ytmusic-color-black4) 12%, var(--ytm-filter-fill));
          }
        }
      }

      html:root ytmusic-browse-response[has-background] .immersive-background.ytmusic-browse-response {
        opacity: .22;
      }

      html:root ytmusic-player-page:not([player-fullscreened]) .background-thumbnail.ytmusic-player-page {
        opacity: .24;
      }

      html:root ytmusic-player-page:not([is-mobile-web]) #tab-renderer.ytmusic-player-page
        > :is(.ytmusic-tab-renderer:has(> ytmusic-player-queue#queue),
          ytmusic-section-list-renderer.ytmusic-tab-renderer):not([hidden]) {
        box-sizing: border-box;
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

      html:root ytmusic-player[player-page-open]
        :is(#song-video, .song-media-controls).ytmusic-player {
        border-radius: inherit;
      }

      html:root ytmusic-player[player-page-open]:not(
        [player-ui-state=FULLSCREEN], [player-fullscreened] *, :fullscreen, :fullscreen *
      ):is(
        [video-mode]:not([has-av-switcher]), [has-av-switcher][playback-mode=OMV_PREFERRED]
      ) {
        border-radius: var(--ytm-radius-medium);
        overflow: hidden;
      }

      html:root ytmusic-player:is([player-ui-state=FULLSCREEN], [player-fullscreened] *, :fullscreen, :fullscreen *) {
        border-radius: 0;
      }

      html:root ytmusic-player[player-ui-state=MINIPLAYER] .song-media-controls.ytmusic-player {
        background: linear-gradient(rgb(0 0 0 / 60%), transparent 50%);
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

      html:root ytmusic-player-queue-item,
      html:root ytmusic-player-queue-item .left-items.ytmusic-player-queue-item,
      html:root ytmusic-player-bar .image.ytmusic-player-bar {
        border-radius: var(--ytm-radius-compact);
      }

      html:root ytmusic-player-queue-item .left-items.ytmusic-player-queue-item > .thumbnail.ytmusic-player-queue-item {
        border-radius: inherit;
      }

      html:root :is(ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer,
        ytmusic-player-queue-item, ytmusic-card-shelf-renderer) .thumbnail-overlay > ytmusic-background-overlay-renderer {
        background: var(--ytm-thumbnail-scrim);
      }

      @media (hover: hover) {
        html:root ytmusic-player:is(
          [video-mode]:not([has-av-switcher]), [has-av-switcher][playback-mode=OMV_PREFERRED]
        ):not([is-mobile-web], :hover, :focus-within, [focus-within]) .ytp-large-play-button,
        html:root ytmusic-item-thumbnail-overlay-renderer:not(
          [is-mobile-web], :hover, :focus-within, [focus-within], ytmusic-two-row-item-renderer *,
          :is(
            ytmusic-responsive-list-item-renderer, ytmusic-multi-row-list-item-renderer, ytmusic-player-queue-item
          ):is(:hover, :focus-within, [focus-within]) *
        ) > #content.ytmusic-item-thumbnail-overlay-renderer
          > ytmusic-play-button-renderer#play-button[data-ytm-video-play-button]:not([state=playing], [state=loading]) {
          opacity: 0;
          pointer-events: none;
        }

        html:root ytmusic-two-row-item-renderer ytmusic-item-thumbnail-overlay-renderer:not([is-mobile-web]) {
          /* Returning focus to the menu button should not reveal Play. */
          &:not(:hover, :has(> #content > #play-button:focus-visible)) {
            & > #content.ytmusic-item-thumbnail-overlay-renderer
              > ytmusic-play-button-renderer#play-button:not([state=playing], [state=loading]) {
              opacity: 0;
              pointer-events: none;
            }
          }

          &:has(> #content > #play-button:focus-visible) {
            & > #background.ytmusic-item-thumbnail-overlay-renderer,
            & > #content.ytmusic-item-thumbnail-overlay-renderer > ytmusic-play-button-renderer#play-button {
              opacity: 1;
            }
          }
        }
      }

      html:root ytmusic-multi-page-menu-renderer {
        box-sizing: border-box;
        border: 1px solid var(--ytm-menu-border, var(--ytmusic-search-bar-border-bauhaus, var(--ytmusic-divider)));
        border-radius: var(--ytm-radius-pill);
        overflow: auto;
      }

      /* The dropdown scrolls the slotted content, which clips a shadow drawn by its child. */
      html:root tp-yt-iron-dropdown [slot="dropdown-content"]:has(ytmusic-multi-page-menu-renderer) {
        border-radius: var(--ytm-radius-pill);
        box-shadow: var(--ytm-elevation, 0 4px 32px rgb(0 0 0 / 10%));

        & ytmusic-multi-page-menu-renderer {
          box-shadow: none;
        }
      }

      /* Keep the border on the scroll viewport so the edges stay visible while scrolling. */
      html:root ytmusic-menu-popup-renderer,
      html:root ytmusic-playback-rate-popup-renderer,
      html:root tp-yt-iron-dropdown [slot="dropdown-content"]:has(
        > :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer)
      ) {
        box-sizing: border-box;
        background-color: var(--ytmusic-menu-popup-background);
        border: 1px solid var(--ytm-menu-border, var(--ytmusic-divider));
        border-radius: var(--ytm-radius-menu);
        overflow: auto;
        scrollbar-color: var(--ytm-outline, var(--ytmusic-icon-inactive, #777)) transparent;

        & > :is(ytmusic-menu-popup-renderer, ytmusic-playback-rate-popup-renderer),
        & > tp-yt-paper-listbox:is(.ytmusic-menu-popup-renderer, .ytmusic-playback-rate-popup-renderer) {
          border-width: 0;
        }
      }

      html:root ytmusic-multi-select-menu-renderer #container.ytmusic-multi-select-menu-renderer,
      html:root yt-dropdown-menu #menu.yt-dropdown-menu,
      html:root tp-yt-paper-listbox.yt-dropdown-menu {
        border-radius: var(--ytm-radius-menu);
        overflow: auto;
      }

      html:root yt-dropdown-menu {
        --paper-menu-button-content-border-radius: var(--ytm-radius-menu);
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
      html:root :is(ytmusic-menu-popup-renderer, ytmusic-multi-select-menu-renderer, ytmusic-playback-rate-popup-renderer) {
        --ytmusic-menu-item-focus-background-color: transparent;
        --paper-item-focused-background-color: transparent;
        --paper-item-focused-before-opacity: 0;

        & #items > :is(
          ytmusic-menu-navigation-item-renderer,
          ytmusic-menu-service-item-renderer,
          ytmusic-toggle-menu-service-item-renderer,
          ytmusic-multi-select-menu-item-renderer
        ):not([is-disabled], [disabled], [aria-disabled="true"], [is-request-in-progress]) {
          &:is(:focus, :focus-within):not(:hover) {
            background-color: transparent;
          }
        }
      }

      html:root ytmusic-menu-popup-renderer #items.ytmusic-menu-popup-renderer
        > ytmusic-menu-service-item-download-renderer.ytmusic-menu-popup-renderer:hover {
        background-color: transparent;
      }

      html:root :is(
        ytmusic-menu-popup-renderer #items > :is(
          ytmusic-menu-navigation-item-renderer, ytmusic-menu-service-item-renderer,
          ytmusic-toggle-menu-service-item-renderer, [role="menuitem"]
        ),
        ytmusic-menu-popup-renderer #items > ytmusic-menu-service-item-download-renderer > tp-yt-paper-item,
        ytmusic-multi-select-menu-renderer #items > ytmusic-multi-select-menu-item-renderer,
        ytmusic-playback-rate-popup-renderer tp-yt-paper-item.ytmusic-playback-rate-popup-renderer,
        ytmusic-multi-page-menu-renderer :is(
          #items.yt-multi-page-menu-section-renderer > .yt-multi-page-menu-section-renderer:not(ytd-message-renderer),
          ytd-compact-link-renderer, ytd-account-item-renderer
        ):not([compact-link-style=compact-link-style-type-disclaimer]),
        tp-yt-paper-listbox.yt-dropdown-menu tp-yt-paper-item:not(.iron-selected *),
        ytmusic-dropdown-item-renderer,
        tp-yt-paper-item.yt-options-renderer,
        ytmusic-add-to-playlist-renderer ytmusic-playlist-add-to-option-renderer
      ):not([is-disabled], [disabled], [aria-disabled="true"], [is-request-in-progress]):is(
        :hover, :focus-visible:not(.no-focus-outline *), :has(:focus-visible:not(.no-focus-outline *))
      ) {
        --paper-item-focused-before-opacity: 0;
        background-color: var(--ytm-menu-hover);
      }
    }
  `);

  const homeChipSelector = 'ytmusic-browse-response ytmusic-section-list-renderer #header ytmusic-chip-cloud-chip-renderer';
  const searchChipSelector = 'ytmusic-search-page ytmusic-chip-cloud-chip-renderer';
  const queueChipSelector = 'ytmusic-queue-header-renderer #buttons ytmusic-chip-cloud-chip-renderer';
  const chipSelector = `${homeChipSelector}, ${searchChipSelector}, ${queueChipSelector}`;
  const thumbnailPlayButton = 'ytmusic-play-button-renderer#play-button.ytmusic-item-thumbnail-overlay-renderer';
  const compactArtworkItems = [
    'ytmusic-responsive-list-item-renderer',
    'ytmusic-multi-row-list-item-renderer',
    'ytmusic-player-queue-item'
  ];
  const artworkItem = ['ytmusic-two-row-item-renderer', ...compactArtworkItems].join(', ');
  const artworkWrapper = [
    '.image-wrapper.ytmusic-two-row-item-renderer',
    ...compactArtworkItems.map(item => `.left-items.${item}`)
  ].join(', ');
  const watchedElements = `${chipSelector}, ${thumbnailPlayButton}, ${artworkItem}`;
  const musicVideoTypes = new Set(['MUSIC_VIDEO_TYPE_OMV', 'MUSIC_VIDEO_TYPE_UGC']);
  const artworkState = new WeakMap();

  const artworkVisibility = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      const state = artworkState.get(target);
      if (!state || !target.isConnected) continue;
      state.visible = isIntersecting;
      updateArtwork(target, state);
    }
  });

  function getArtworkSource(thumbnailData, width) {
    const thumbnails = Array.from(thumbnailData?.thumbnails ?? []);
    const urls = thumbnails.filter(thumbnail => /^(https:)?\/\//i.test(thumbnail.url));
    urls.sort((first, second) => (first.width ?? 0) - (second.width ?? 0));
    return (urls.find(thumbnail => thumbnail.width >= width) ?? urls.at(-1))?.url;
  }

  function observeArtwork(wrapper) {
    const state = artworkState.get(wrapper);
    if (state) {
      updateArtwork(wrapper, state);
    } else {
      artworkState.set(wrapper, { visible: false, timer: null, fallback: null });
      artworkVisibility.observe(wrapper);
    }
  }

  function updateArtwork(wrapper, state, recover = false) {
    const item = wrapper.closest(artworkItem);
    const nativeRenderer = wrapper.querySelector(
      ':scope > ytmusic-thumbnail-renderer:is(.image, .thumbnail), ' +
      ':scope > .thumbnail-wrapper > ytmusic-thumbnail-renderer.thumbnail'
    );
    const imageHost = nativeRenderer?.querySelector('yt-img-shadow') ??
      wrapper.querySelector(':scope > yt-img-shadow.thumbnail');
    const nativeImage = (imageHost?.shadowRoot ?? imageHost)?.querySelector('img');
    const nativeReady = imageHost?.hasAttribute('loaded') &&
      (!nativeImage || nativeImage.naturalWidth > 1);

    if (nativeReady || item?.matches('ytmusic-responsive-list-item-renderer[unplayable]')) {
      state.fallback?.remove();
      state.fallback = null;
      return;
    }
    if (!state.visible && !state.fallback) return;

    const itemData = (item?.wrappedJSObject ?? item)?.data;
    const data = itemData?.thumbnailRenderer?.musicThumbnailRenderer ?? itemData?.thumbnail?.musicThumbnailRenderer ??
      (nativeRenderer?.wrappedJSObject ?? nativeRenderer)?.data;
    const thumbnail = data?.thumbnail ?? itemData?.thumbnail ?? (imageHost?.wrappedJSObject ?? imageHost)?.thumbnail;
    const source = getArtworkSource(thumbnail, wrapper.clientWidth * window.devicePixelRatio);
    if (state.fallback && state.fallback.getAttribute('src') !== source) {
      state.fallback.remove();
      state.fallback = null;
    }
    if (!state.visible || !source || state.fallback || state.timer) return;

    if (!recover) {
      // Let YouTube Music's own lazy loader paint first.
      state.timer = setTimeout(() => {
        state.timer = null;
        if (wrapper.isConnected) updateArtwork(wrapper, state, true);
      }, 800);
      return;
    }

    const image = document.createElement('img');
    image.setAttribute('data-ytm-artwork-fallback', '');
    image.alt = '';
    image.draggable = false;
    image.hidden = true;
    if (data?.thumbnailScale === 'MUSIC_THUMBNAIL_SCALE_ASPECT_FIT' ||
        item?.matches('ytmusic-player-queue-item')) {
      image.style.objectFit = 'contain';
    }
    image.addEventListener('load', () => { image.hidden = false; }, { once: true });
    state.fallback = image;
    image.src = source;
    wrapper.prepend(image);
  }

  function updateChip(chip) {
    // Firefox can expose the page's renderer data through an Xray wrapper.
    const renderer = chip.wrappedJSObject ?? chip;
    const data = renderer.data;
    const isSearchChip = chip.matches(searchChipSelector);
    const isQueueChip = chip.matches(queueChipSelector);
    chip.toggleAttribute('data-ytm-clear-filter', isSearchChip && data?.icon?.iconType === 'CLOSE');

    const fallback = chip.querySelector('[data-ytm-chip-label]');
    const fallbackIcon = chip.querySelector('[data-ytm-chip-icon]');
    if (isSearchChip) {
      fallback?.remove();
      fallbackIcon?.remove();
      return;
    }

    const anchor = chip.querySelector(isQueueChip ? 'a[role="button"]' : 'a[role="tab"]');
    if (!anchor) return;

    // The queue header can create its action before its icon and label are stamped.
    const iconType = data?.icon?.iconType;
    const icon = isQueueChip && iconType && !anchor.querySelector(':scope > yt-icon:not([data-ytm-chip-icon])')
      ? renderer.getMusicIconFromType?.(iconType)
      : null;
    if (!icon) {
      fallbackIcon?.remove();
    } else if (fallbackIcon) {
      if (fallbackIcon.getAttribute('icon') !== icon) fallbackIcon.setAttribute('icon', icon);
    } else {
      const displayIcon = document.createElement('yt-icon');
      displayIcon.className = 'ytmusic-chip-cloud-chip-renderer';
      displayIcon.setAttribute('data-ytm-chip-icon', '');
      displayIcon.setAttribute('icon', icon);
      displayIcon.setAttribute('aria-hidden', 'true');
      anchor.prepend(displayIcon);
    }

    const hasNativeLabel = Array.from(anchor.childNodes).some(node =>
      node !== fallback && !node.hasAttribute?.('data-ytm-chip-icon') && node.textContent.trim()
    );
    const text = data?.text;
    const label = (text?.simpleText ?? text?.runs?.map(run => run.text).join('') ?? '').trim();
    if (hasNativeLabel || !label) {
      fallback?.remove();
      return;
    }

    if (fallback) {
      if (fallback.textContent !== label) fallback.textContent = label;
      return;
    }

    const displayLabel = document.createElement('span');
    displayLabel.className = 'text ytmusic-chip-cloud-chip-renderer';
    displayLabel.setAttribute('data-ytm-chip-label', '');
    displayLabel.textContent = label;
    anchor.append(displayLabel);
  }

  function markVideoPlayButton(button) {
    // The play endpoint identifies videos even when their artwork is cropped square.
    const endpoint = (button.wrappedJSObject ?? button).data?.playNavigationEndpoint;
    const type = endpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType;
    button.toggleAttribute('data-ytm-video-play-button', musicVideoTypes.has(type));
  }

  // Process only affected controls and deduplicate them within each mutation batch.
  const observer = new MutationObserver(records => {
    const affected = new Set();
    const removedArtwork = new Set();
    for (const { target, addedNodes, removedNodes } of records) {
      const element = target.nodeType === Node.ELEMENT_NODE ? target : target.parentElement;
      const control = element?.closest(watchedElements);
      if (control) affected.add(control);

      for (const node of addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node.matches(watchedElements)) affected.add(node);
        node.querySelectorAll(watchedElements).forEach(child => affected.add(child));
      }

      for (const node of removedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (artworkState.has(node)) removedArtwork.add(node);
        node.querySelectorAll(artworkWrapper).forEach(child => removedArtwork.add(child));
      }
    }

    for (const wrapper of removedArtwork) {
      const state = artworkState.get(wrapper);
      if (!state || wrapper.isConnected) continue;
      artworkVisibility.unobserve(wrapper);
      clearTimeout(state.timer);
      state.fallback?.remove();
      artworkState.delete(wrapper);
    }

    for (const control of affected) {
      if (!control.isConnected) continue;
      if (control.matches(thumbnailPlayButton)) markVideoPlayButton(control);
      else if (control.matches(chipSelector)) updateChip(control);
      else control.querySelectorAll(artworkWrapper).forEach(observeArtwork);
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
    characterData: true,
    attributeFilter: ['aria-selected', 'aria-label', 'chip-style', 'role', 'state', 'href', 'src', 'loaded', 'unplayable']
  });
  document.querySelectorAll(artworkWrapper).forEach(observeArtwork);
  customElements.whenDefined('ytmusic-chip-cloud-chip-renderer').then(() => {
    document.querySelectorAll(chipSelector).forEach(updateChip);
  });
  customElements.whenDefined('ytmusic-play-button-renderer').then(() => {
    document.querySelectorAll(thumbnailPlayButton).forEach(markVideoPlayButton);
  });
})();
