/** EXT webviews module. */
declare namespace ext.webviews {

  // Webview rectangle structure
  export interface Rectangle {
    x: number
    y: number
    width: number
    height: number
  }

  // Webview object
  export interface Webview {
    /** Webview ID. */
    id: string
    /** Owning extension ID. */
    extension: string
    /** Optional websession used by the webview. */
    websession?: WebsessionId
  }

  // Websession ID
  export interface WebsessionId {
    /** Websession ID. */
    id: string
  }

  // Window ID
  export interface WindowId {
    /** Window ID. */
    id: string
  }

  // Webview creation properties
  export interface WebviewProperties {
    window?: WindowId
    bounds?: Rectangle
    autoResize?: AutoResize
    websession?: WebsessionId
    devTools?: boolean
    zoomFactor?: number
    javascript?: boolean
    webSecurity?: boolean
    allowRunningInsecureContent?: boolean
    images?: boolean
    imageAnimationPolicy?: 'animate' | 'animateOnce' | 'noAnimation'
    textAreasAreResizable?: boolean
    webgl?: boolean
    plugins?: boolean
    experimentalFeatures?: boolean
    scrollBounce?: boolean
    defaultFontFamilyStandard?: string
    defaultFontFamilySerif?: string
    defaultFontFamilySansSerif?: string
    defaultFontFamilyMonospace?: string
    defaultFontFamilyCursive?: string
    defaultFontFamilyFantasy?: string
    defaultFontSizeMonospace?: number
    defaultFontSize?: number
    minimumFontSize?: number
    defaultEncoding?: string
    backgroundThrottling?: boolean
    offscreen?: boolean
    webviewTag?: boolean
    safeDialogs?: boolean
    safeDialogsMessage?: string
    disableDialogs?: boolean
    navigateOnDragDrop?: boolean
    autoplayPolicy?: 'no-user-gesture-required' | 'user-gesture-required' | 'document-user-activation-required'
    disableHtmlFullscreenWindowResize?: boolean
    accessibleTitle?: string
    spellcheck?: boolean
    enableWebSQL?: boolean
    enablePreferredSizeMode?: boolean
  }

  // Webview auto resize options
  export interface AutoResize {
    width?: boolean
    height?: boolean
    horizontal?: boolean
    vertical?: boolean
  }

  // Webview load url options
  export interface LoadUrl {
    httpReferrer?: string
    userAgent?: string
    extraHeaders?: string
  }

  // Webview load path options
  export interface LoadPath {
    query?: Record<string, string>
    search?: string
    hash?: string
  }

  // Webview css options
  export interface CSSOptions {
    origin: 'user' | 'author'
  }

  // Webview javascript options
  export interface JavaScriptOptions {
    userGesture?: boolean
  }

  // Webview adjust selection options
  export interface AdjustSelection {
    start?: number
    end?: number
  }

  // Webview devtools options
  export interface DevTools {
    mode: 'left' | 'right' | 'bottom' | 'undocked' | 'detach'
    activate?: boolean
  }

  // Webview input event
  export interface InputEvent {
    modifiers?: Array<
      'shift' | 'control' | 'ctrl' | 'alt' | 'meta' | 'command' | 'cmd' |
      'isKeypad' | 'isAutoRepeat' | 'leftButtonDown' | 'middleButtonDown' |
      'rightButtonDown' | 'capsLock' | 'numLock' | 'left' | 'right'
    >
    type: (
      'undefined' | 'mouseDown' | 'mouseUp' | 'mouseMove' | 'mouseEnter' |
      'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'rawKeyDown' | 'keyDown' |
      'keyUp' | 'char' | 'gestureScrollBegin' | 'gestureScrollEnd' |
      'gestureScrollUpdate' | 'gestureFlingStart' | 'gestureFlingCancel' |
      'gesturePinchBegin' | 'gesturePinchEnd' | 'gesturePinchUpdate' | 'gestureTapDown' |
      'gestureShowPress' | 'gestureTap' | 'gestureTapCancel' | 'gestureShortPress' |
      'gestureLongPress' | 'gestureLongTap' | 'gestureTwoFingerTap' |
      'gestureTapUnconfirmed' | 'gestureDoubleTap' | 'touchStart' | 'touchMove' |
      'touchEnd' | 'touchCancel' | 'touchScrollStarted' | 'pointerDown' | 'pointerUp' |
      'pointerMove' | 'pointerRawUpdate' | 'pointerCancel' | 'pointerCausedUaAction'
    )
  }

  // Webview mouse input event
  export interface MouseInputEvent extends InputEvent {
    type: 'mouseDown' | 'mouseUp' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'mouseMove'
    x: number
    y: number
    button?: 'left' | 'middle' | 'right'
    globalX?: number
    globalY?: number
    movementX?: number
    movementY?: number
    clickCount?: number
  }

  // Webview mouse wheel input event
  export interface MouseWheelInputEvent extends MouseInputEvent {
    type: 'mouseWheel'
    x: number
    y: number
    deltaX?: number
    deltaY?: number
    wheelTicksX?: number;
    wheelTicksY?: number
    accelerationRatioX?: number
    accelerationRatioY?: number
    hasPreciseScrollingDeltas?: boolean
    canScroll?: boolean
  }

  // Webview keyboard input event
  export interface KeyboardInputEvent extends InputEvent {
    type: 'rawKeyDown' | 'keyDown' | 'keyUp' | 'char'
    keyCode: string
  }

  // Webview event
  export interface WebviewEvent {
    /** Webview ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  // Webview load failed event
  export interface EventLoadFailed {
    errorCode: number
    errorDescription: string
    validatedURL: string
    isMainFrame: boolean
    frameId: number
  }

  // Webview title event
  export interface EventTitle {
    title: string
    explicitSet: boolean
  }

  // Webview favicon event
  export interface EventFavicon {
    favicons: string[]
  }

  // Webview navigation started event
  export interface EventNavigationStarted {
    url: string
    isSameDocument: boolean
    isMainFrame: boolean
    frameId: number
  }

  // Webview navigation done event
  export interface EventNavigationDone {
    url: string
    httpResponseCode?: number
    httpStatusText?: string 
  }

  // Webview navigation in page done event
  export interface EventNavigationInPageDone {
    url: string
    isMainFrame: boolean
    frameId: number
  }

  // Webview process shutdown event
  export interface EventShutdown {
    reason: 'clean-exit' | 'abnormal-exit' | 'killed' | 'crashed' | 'oom' | 'launch-failed' | 'integrity-failure'
    exitCode: number
  }

  // Webview zoom event
  export interface EventZoom {
    direction: 'in' | 'out'
  }

  // Webview login event
  export interface EventLogin {
    url: string
    isProxy: boolean
    scheme: string
    host: string
    port: number
    realm: string
  }

  // Webview audio event
  export interface EventAudio {
    audible: boolean
  }

  // Webview theme color event
  export interface EventThemeColor {
    color: string | null
  }

  // Webview target url event
  export interface EventTargetUrl {
    url: string
  }

  // Webview cursor event
  export interface EventCursor {
    type: string
    scale?: number
  }

  // Webview context menu event
  export interface EventContextMenu {
    x: number
    y: number
    frameId: number
    linkURL: string
    linkText: string
    pageURL: string
    frameURL: string
    srcURL: string
    mediaType: 'none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin'
    hasImageContents: boolean
    isEditable: boolean
    selectionText: string
    titleText: string
    altText: string
    suggestedFilename: string
    selectionRect: Rectangle
    selectionStartOffset: number
    misspelledWord: string
    dictionarySuggestions: string[]
    frameCharset: string
    inputFieldType: string
    spellcheckEnabled: boolean
    menuSourceType: (
      'none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu' | 'longPress' |
      'longTap' | 'touchHandle' | 'stylus' | 'adjustSelection' | 'adjustSelectionReset'
    )
    mediaFlags: EventContextMenuMediaFlags
    editFlags: EventContextMenuEditFlags
  }

  // Webview context menu event media flags
  export interface EventContextMenuMediaFlags {
    inError: boolean
    isPaused: boolean
    isMuted: boolean
    hasAudio: boolean
    isLooping: boolean
    isControlsVisible: boolean
    canToggleControls: boolean
    canPrint: boolean
    canSave: boolean
    canShowPictureInPicture: boolean
    isShowingPictureInPicture: boolean
    canRotate: boolean
    canLoop: boolean
  }

  // Webview context menu event edit flags
  export interface EventContextMenuEditFlags {
    canUndo: boolean
    canRedo: boolean
    canCut: boolean
    canCopy: boolean
    canPaste: boolean
    canDelete: boolean
    canSelectAll: boolean
    canEditRichly: boolean
  }

  // Webview preferred size event
  export interface EventPreferredSize {
    width: number
    height: number
  }

  // Webview console message event
  export interface EventConsoleMessage {
    level: number
    message: string
    line: number
  }

  // Webview window referrer
  export interface EventWindowReferrer {
    url: string
    policy: (
      'default' | 'unsafe-url' | 'no-referrer-when-downgrade' |
      'no-referrer' | 'origin' | 'strict-origin-when-cross-origin' | 'same-origin' | 'strict-origin'
    )
  }

  // Webview window event
  export interface EventWindow {
    url: string
    frameName: string
    features: string
    disposition: 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other'
    referrer: EventWindowReferrer
  }

  /** Event handler. */
  interface EventHandler<Listener> {
    /**
     * Register listener.
     * @param listener Listener to invoke.
     */
    addListener: (listener: Listener) => void
    /**
     * Unregister listener.
     * @param listener Listener to unregister.
     */
    removeListener: (listener: Listener) => void
  }

  // Generic
  export function get(webviewId: string): Promise<Webview>
  export function query(filter?: Partial<Webview>): Promise<Webview[]>
  export function create(properties?: WebviewProperties): Promise<Webview>
  export function remove(webviewIds: string | string[]): Promise<void>
  export function getCurrent(): Promise<Webview>
  
  // Parent window
  export function attach(webviewId: string, windowId: string): Promise<void>
  export function detach(webviewId: string): Promise<boolean>
  export function moveTop(webviewId: string): Promise<void>
  export function getAttachedWindow(webviewId: string): Promise<WindowId | null>
  export function setBounds(webviewId: string, bounds: Rectangle): Promise<void>
  export function getBounds(webviewId: string): Promise<Rectangle>
  export function setAutoResize(webviewId: string, options?: AutoResize): Promise<Rectangle>

  // Authentication
  export function login(webviewId: string, username?: string, password?: string): Promise<void>
  export function getLogin(webviewId: string): Promise<EventLogin | null>

  // Navigation
  export function loadURL(webviewId: string, url: string, options?: LoadUrl): Promise<void>
  export function loadFile(webviewId: string, path: string, options?: LoadPath): Promise<void>
  export function downloadURL(webviewId: string, url: string): Promise<void>
  export function getURL(webviewId: string, url: string): Promise<string>
  export function isLoading(webviewId: string): Promise<boolean>
  export function isLoadingMainFrame(webviewId: string): Promise<boolean>
  export function isWaitingForResponse(webviewId: string): Promise<boolean>
  export function close(webviewId: string): Promise<void>
  export function stop(webviewId: string): Promise<void>
  export function reload(webviewId: string): Promise<void>
  export function reloadIgnoringCache(webviewId: string): Promise<void>

  // Focus
  export function isFocused(webviewId: string): Promise<boolean>
  export function focus(webviewId: string): Promise<void>
  
  // Offscreen rendering
  export function isOffscreen(webviewId: string): Promise<boolean>
  export function startPainting(webviewId: string): Promise<void>
  export function stopPainting(webviewId: string): Promise<void>
  export function isPainting(webviewId: string): Promise<boolean>
  export function setFrameRate(webviewId: string, fps: number): Promise<void>
  export function getFrameRate(webviewId: string): Promise<number>
  export function invalidate(webviewId: string): Promise<void>

  // Performance
  export function setBackgroundThrottling(webviewId: string, value: boolean): Promise<void>
  export function getBackgroundThrottling(webviewId: string): Promise<boolean>
  export function setImageAnimationPolicy(webviewId: string, policy: 'animate' | 'animateOnce' | 'noAnimation'): Promise<void>

  // Audio
  export function setAudioMuted(webviewId: string, muted: boolean): Promise<void>
  export function isAudioMuted(webviewId: string): Promise<boolean>
  export function isCurrentlyAudible(webviewId: string, muted: boolean): Promise<boolean>

  // Selection
  export function selectAll(webviewId: string): Promise<void>
  export function unselect(webviewId: string): Promise<void>
  
  // User agent
  export function setUserAgent(webviewId: string, userAgent: string): Promise<void>
  export function getUserAgent(webviewId: string): Promise<string>
  
  // Injection
  export function insertCSS(webviewId: string, css: string, options?: CSSOptions): Promise<string>
  export function removeCSS(webviewId: string, key: string): Promise<void>
  export function executeJavaScript(webviewId: string, code: string, options?: JavaScriptOptions): Promise<void>

  // Process
  export function getProcessId(webviewId: string): Promise<number>
  export function isCrashed(webviewId: string): Promise<boolean>
  export function crash(webviewId: string): Promise<void>

  // Clipboard
  export function undo(webviewId: string): Promise<void>
  export function redo(webviewId: string): Promise<void>
  export function copy(webviewId: string): Promise<void>
  export function copyImageAt(webviewId: string, x: number, y: number): Promise<void>
  export function paste(webviewId: string): Promise<void>
  export function pasteAndMatchStyle(webviewId: string): Promise<void>
  
  // Editing
  function _delete(webviewId: string): Promise<void>
  export function replace(webviewId: string, text: string): Promise<void>
  export function replaceMisspelling(webviewId: string, text: string): Promise<void>
  export function insertText(webviewId: string, text: string): Promise<void>
  export function sendInput(webviewId: string, options: MouseInputEvent | MouseWheelInputEvent | KeyboardInputEvent): Promise<void>
  export { _delete as delete }

  // In-page navigation
  export function goToIndex(webviewId: string, index: number): Promise<void>
  export function goToOffset(webviewId: string, offset: number): Promise<void>
  export function canGoToOffset(webviewId: string, offset: number): Promise<boolean>
  
  // History
  export function canGoBack(webviewId: string): Promise<boolean>
  export function canGoForward(webviewId: string): Promise<boolean>
  export function clearHistory(webviewId: string): Promise<void>
  export function goBack(webviewId: string): Promise<void>
  export function goForward(webviewId: string): Promise<void>

  // Zoom
  export function setZoomFactor(webviewId: string, factor: number): Promise<void>
  export function getZoomFactor(webviewId: string): Promise<number>
  export function setZoomLevel(webviewId: string, level: number): Promise<void>
  export function getZoomLevel(webviewId: string): Promise<number>
  export function setVisualZoomLevelLimits(webviewId: string, minimumLevel: number, maximumLevel: number): Promise<void>

  // Devtools
  export function openDevTools(webviewId: string, options?: DevTools): Promise<void>
  export function closeDevTools(webviewId: string): Promise<void>
  export function isDevToolsOpened(webviewId: string): Promise<boolean>
  export function isDevToolsFocused(webviewId: string): Promise<boolean>
  export function toggleDevTools(webviewId: string): Promise<void>
  export function inspectElement(webviewId: string, x: number, y: number): Promise<void>
  
  // Misc
  export function getTitle(webviewId: string, url: string): Promise<string>
  export function setIgnoreMenuShortcuts(webviewId: string, ignore: boolean): Promise<void>
  export function setBackgroundColor(webviewId: string, color: string): Promise<void>

  // Events

  /** Webview created. */
  export const onCreated: EventHandler<(event: WebviewEvent, details: Webview) => void>
  /** Webview removed. */
  export const onRemoved: EventHandler<(event: WebviewEvent, details: Webview) => void>
  /** The document in the top-level frame finished loading. */
  export const onDomReady: EventHandler<(event: WebviewEvent) => void>
  /** Page started loading. */
  export const onLoadStarted: EventHandler<(event: WebviewEvent) => void>
  /** Page stopped loading. */
  export const onLoadStopped: EventHandler<(event: WebviewEvent) => void>
  /** Page load is done. */
  export const onLoadFinished: EventHandler<(event: WebviewEvent) => void>
  /** Page load failed. */
  export const onLoadFailed: EventHandler<(event: WebviewEvent, details: EventLoadFailed) => void>
  /** Page load cancelled. */
  export const onLoadCancelled: EventHandler<(event: WebviewEvent, details: EventLoadFailed) => void> 
  /** Page title updated. */
  export const onPageTitleUpdated: EventHandler<(event: WebviewEvent, details: EventTitle) => void>
  /** Page favicon updated. */
  export const onPageFaviconUpdated: EventHandler<(event: WebviewEvent, details: EventFavicon) => void>
  /** Page navigation started. */
  export const onNavigationStarted: EventHandler<(event: WebviewEvent, details: EventNavigationStarted) => void>
  /** Page navigation redirected. */
  export const onNavigationRedirected: EventHandler<(event: WebviewEvent, details: EventNavigationStarted) => void>
  /** Page navigation ended. */
  export const onNavigationDone: EventHandler<(event: WebviewEvent, details: EventNavigationDone) => void>
  /** Page navigation ended without changing url. */
  export const onNavigationInPageDone: EventHandler<(event: WebviewEvent, details: EventNavigationInPageDone) => void>
  /** Process shutdown. */
  export const onShutdown: EventHandler<(event: WebviewEvent, details: EventShutdown) => void> 
  /** Page became unresponsive. */
  export const onPageUnresponsive: EventHandler<(event: WebviewEvent) => void>
  /** Page become responsive again. */
  export const onPageResponsive: EventHandler<(event: WebviewEvent) => void>
  /** Input event. */
  export const onInput: EventHandler<(event: WebviewEvent, details: InputEvent) => void>
  /** Webview entered fullscreen mode. */
  export const onEnteredFullscreen: EventHandler<(event: WebviewEvent) => void>
  /** Webview exited fullscreen mode. */
  export const onExitedFullscreen: EventHandler<(event: WebviewEvent) => void>
  /** User changed zoom level. */
  export const onZoomChanged: EventHandler<(event: WebviewEvent, details: EventZoom) => void>
  /** Webview gained focus. */
  export const onFocused: EventHandler<(event: WebviewEvent) => void>
  /** Webview lost focus. */
  export const onUnfocused: EventHandler<(event: WebviewEvent) => void>
  /** Devtools opened. */
  export const onDevtoolsOpened: EventHandler<(event: WebviewEvent) => void>
  /** Devtools closed. */
  export const onDevtoolsClosed: EventHandler<(event: WebviewEvent) => void>
  /** Devtools focused. */
  export const onDevtoolsFocused: EventHandler<(event: WebviewEvent) => void>
  /** Devtools instructed page to reload. */
  export const onDevtoolsReload: EventHandler<(event: WebviewEvent) => void>
  /** Page requested login. */
  export const onLogin: EventHandler<(event: WebviewEvent, details: EventLogin) => void>
  /** Media started playing. */
  export const onMediaStarted: EventHandler<(event: WebviewEvent) => void>
  /** Media is paused or done playing. */
  export const onMediaPaused: EventHandler<(event: WebviewEvent) => void>
  /** Page theme changed. */
  export const onThemeColorChanged: EventHandler<(event: WebviewEvent, details: EventThemeColor) => void>
  /** Mouse moved over a link or keyboard moved the focus to a link. */
  export const onUpdatedTargetUrl: EventHandler<(event: WebviewEvent, details: EventTargetUrl) => void>
  /** Cursor type changed. */
  export const onCursorChanged: EventHandler<(event: WebviewEvent, details: EventCursor) => void>
  /** Context menu opened. */
  export const onContextMenu: EventHandler<(event: WebviewEvent, details: EventContextMenu) => void>
  /** Preferred size changed. */
  export const onPreferredSizeChanged: EventHandler<(event: WebviewEvent, details: EventPreferredSize) => void>
  /** Console message was logged. */
  export const onConsoleMessage: EventHandler<(event: WebviewEvent, details: EventConsoleMessage) => void>
  /** New window is requested. */
  export const onWindowOpen: EventHandler<(event: WebviewEvent, details: EventWindow) => void>

}
