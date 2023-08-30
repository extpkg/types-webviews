/** EXT webviews module. */
declare namespace ext.webviews {

  // Webview rectangle structure
  export interface Rectangle {
    /** The x-coordinate of the top-left corner of the rectangle. */
    x: number
    /** The y-coordinate of the top-left corner of the rectangle. */
    y: number
    /** The width of the rectangle, measured in pixels. */
    width: number
    /** The height of the rectangle, measured in pixels. */
    height: number
  }

  /** Webview object. */
  export interface Webview {
    /** Webview ID. */
    id: string
    /** Owning extension ID. */
    extension: string
    /** Optional websession used by the webview. */
    websession?: WebsessionId
  }

  /** Websession ID. */
  export interface WebsessionId {
    /** Websession ID. */
    id: string
  }

  /** Window ID. */
  export interface WindowId {
    /** Window ID. */
    id: string
  }

  /** Webview creation properties. */
  export interface WebviewProperties {
    /** Sets the window to attach to. */
    window?: WindowId
    /** Sets the bounds of the webview. */
    bounds?: Rectangle
    /** Sets the auto-resize properties of the webview. */
    autoResize?: AutoResize
    /** Sets the websession to use. */
    websession?: WebsessionId
    /** Indicates if dev tools can be opened. */
    devTools?: boolean
    /** Indicates the zoom factor. */
    zoomFactor?: number
    /** Indicates if JavaScript is enabled. */
    javascript?: boolean
    /** Indicates if web security is enabled. */
    webSecurity?: boolean
    /** Allows running insecure content. */
    allowRunningInsecureContent?: boolean
    /** Indicates if images are enabled. */
    images?: boolean
    /** Image animation policy. */
    imageAnimationPolicy?: 'animate' | 'animateOnce' | 'noAnimation'
    /** Indicates if text areas are resizable. */
    textAreasAreResizable?: boolean
    /** Indicates if WebGL is enabled. */
    webgl?: boolean
    /** Indicates if plugins are enabled. */
    plugins?: boolean
    /** Indicates if experimental features are enabled. */
    experimentalFeatures?: boolean
    /** Indicates if scroll bounce is enabled. */
    scrollBounce?: boolean
    /** Default standard font family. */
    defaultFontFamilyStandard?: string
    /** Default serif font family. */
    defaultFontFamilySerif?: string
    /** Default sans-serif font family. */
    defaultFontFamilySansSerif?: string
    /** Default monospace font family. */
    defaultFontFamilyMonospace?: string
    /** Default cursive font family. */
    defaultFontFamilyCursive?: string
    /** Default fantasy font family. */
    defaultFontFamilyFantasy?: string
    /** Default font size for monospace. */
    defaultFontSizeMonospace?: number
    /** Default font size. */
    defaultFontSize?: number
    /** Minimum font size. */
    minimumFontSize?: number
    /** Default encoding. */
    defaultEncoding?: string
    /** Indicates if background throttling is enabled. */
    backgroundThrottling?: boolean
    /** Indicates if offscreen rendering is enabled. */
    offscreen?: boolean
    /** Indicates if webview tag is enabled. */
    webviewTag?: boolean
    /** Indicates if safe dialogs are enabled. */
    safeDialogs?: boolean
    /** Message for safe dialogs. */
    safeDialogsMessage?: string
    /** Indicates if dialogs are disabled. */
    disableDialogs?: boolean
    /** Indicates if navigation on drag and drop is enabled. */
    navigateOnDragDrop?: boolean
    /** Autoplay policy. */
    autoplayPolicy?: 'no-user-gesture-required' | 'user-gesture-required' | 'document-user-activation-required'
    /** Disables HTML fullscreen window resize. */
    disableHtmlFullscreenWindowResize?: boolean
    /** Accessible title for the webview. */
    accessibleTitle?: string
    /** Indicates if spellcheck is enabled. */
    spellcheck?: boolean
    /** Indicates if WebSQL is enabled. */
    enableWebSQL?: boolean
    /** Indicates if preferred size mode is enabled. */
    enablePreferredSizeMode?: boolean
  }

  /** Webview auto resize options. */
  export interface AutoResize {
    /** Indicates if the width should be auto-resized. */
    width?: boolean
    /** Indicates if the height should be auto-resized. */
    height?: boolean
    /** Indicates if horizontal resizing is enabled. */
    horizontal?: boolean
    /** Indicates if vertical resizing is enabled. */
    vertical?: boolean
  }

  /** Webview load url options. */
  export interface LoadUrl {
    /** Referrer URL for the request. */
    httpReferrer?: string
    /** User agent string for the request. */
    userAgent?: string
    /** Additional headers to be sent with the request. */
    extraHeaders?: string
  }

  /** Webview load path options. */
  export interface LoadPath {
    /** Object representing the parsed query string. */
    query?: Record<string, string>
    /** The query string, including the leading '?' character. */
    search?: string
    /** The URL fragment identifier, including the leading '#' character. */
    hash?: string
  }

  /** Webview css options. */
  export interface CSSOptions {
    /** Specifies the origin of the CSS, either from the user or the author. */
    origin: 'user' | 'author'
  }

  /** Webview javascript options. */
  export interface JavaScriptOptions {
    /** Indicates if the JavaScript requires a user gesture to execute. */
    userGesture?: boolean
  }

  /** Webview adjust selection options. */
  export interface AdjustSelection {
    /** Starting position of the selection. */
    start?: number
    /** Ending position of the selection. */
    end?: number
  }

  /** Webview devtools options. */
  export interface DevTools {
    /** Specifies the display mode of the developer tools. */
    mode: 'left' | 'right' | 'bottom' | 'undocked' | 'detach'
    /** Indicates if the developer tools should be activated. */
    activate?: boolean
  }

  /** Webview input event. */
  export interface InputEvent {
    /** Array of modifier keys that are pressed during the event. */
    modifiers?: Array<
      'shift' | 'control' | 'ctrl' | 'alt' | 'meta' | 'command' | 'cmd' |
      'isKeypad' | 'isAutoRepeat' | 'leftButtonDown' | 'middleButtonDown' |
      'rightButtonDown' | 'capsLock' | 'numLock' | 'left' | 'right'
    >
    /** Specifies the type of input event. */
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

  /** Webview mouse input event. */
  export interface MouseInputEvent extends InputEvent {
    /** Mouse event type. */
    type: 'mouseDown' | 'mouseUp' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'mouseMove'
    /** X-coordinate of the mouse event. */
    x: number
    /** Y-coordinate of the mouse event. */
    y: number
    /** Mouse button that triggered the event. */
    button?: 'left' | 'middle' | 'right'
    /** Global X-coordinate of the mouse event. */
    globalX?: number
    /** Global Y-coordinate of the mouse event. */
    globalY?: number
    /** Movement in the X-direction since the last mouse event. */
    movementX?: number
    /** Movement in the Y-direction since the last mouse event. */
    movementY?: number
    /** Number of consecutive clicks. */
    clickCount?: number
  }

  /** Webview mouse wheel input event. */
  export interface MouseWheelInputEvent extends MouseInputEvent {
    /** Mouse wheel event type. */
    type: 'mouseWheel'
    /** X-coordinate of the mouse wheel event. */
    x: number
    /** Y-coordinate of the mouse wheel event. */
    y: number
    /** Change in X-direction of the mouse wheel. */
    deltaX?: number
    /** Change in Y-direction of the mouse wheel. */
    deltaY?: number
    /** Number of ticks in the X-direction of the mouse wheel. */
    wheelTicksX?: number
    /** Number of ticks in the Y-direction of the mouse wheel. */
    wheelTicksY?: number
    /** Acceleration ratio in the X-direction of the mouse wheel. */
    accelerationRatioX?: number
    /** Acceleration ratio in the Y-direction of the mouse wheel. */
    accelerationRatioY?: number
    /** Indicates if the mouse wheel has precise scrolling deltas. */
    hasPreciseScrollingDeltas?: boolean
    /** Indicates if the mouse wheel can scroll. */
    canScroll?: boolean
  }

  /** Webview keyboard input event. */
  export interface KeyboardInputEvent extends InputEvent {
    /** Type of the keyboard event (e.g., keyDown, keyUp). */
    type: 'rawKeyDown' | 'keyDown' | 'keyUp' | 'char'
    /** The key code of the pressed/released key. */
    keyCode: string
  }

  /** Webview event. */
  export interface WebviewEvent {
    /** Webview ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Webview load failed event. */
  export interface EventLoadFailed {
    /** Numeric code representing the error. */
    errorCode: number
    /** Textual description of the error. */
    errorDescription: string
    /** The URL that was being validated when the error occurred. */
    validatedURL: string
    /** Indicates if the error occurred in the main frame. */
    isMainFrame: boolean
    /** Identifier for the frame where the error occurred. */
    frameId: number
  }

  /** Webview title event. */
  export interface EventTitle {
    /** The new title of the webview. */
    title: string
    /** Indicates if the title was explicitly set. */
    explicitSet: boolean
  }

  /** Webview favicon event. */
  export interface EventFavicon {
    /** Array of favicon URLs. */
    favicons: string[]
  }

  /** Webview navigation started event. */
  export interface EventNavigationStarted {
    /** The URL being navigated to. */
    url: string
    /** Indicates if the navigation is within the same document. */
    isSameDocument: boolean
    /** Indicates if the navigation is occurring in the main frame. */
    isMainFrame: boolean
    /** Identifier for the frame where navigation started. */
    frameId: number
  }

  /** Webview navigation done event. */
  export interface EventNavigationDone {
    /** The URL that was navigated to. */
    url: string
    /** The HTTP response code for the navigation. */
    httpResponseCode?: number
    /** The HTTP status text for the navigation. */
    httpStatusText?: string 
  }

  /** Webview navigation in page done event. */
  export interface EventNavigationInPageDone {
    /** The URL that was navigated to within the page. */
    url: string
    /** Indicates if the in-page navigation occurred in the main frame. */
    isMainFrame: boolean
    /** Identifier for the frame where in-page navigation occurred. */
    frameId: number
  }

  /** Webview process shutdown event. */
  export interface EventShutdown {
    /** Reason for the shutdown. */
    reason: 'clean-exit' | 'abnormal-exit' | 'killed' | 'crashed' | 'oom' | 'launch-failed' | 'integrity-failure'
    /** Exit code for the shutdown process. */
    exitCode: number
  }

  /** Webview zoom event. */
  export interface EventZoom {
    /** Direction of the zoom (zooming in or out). */
    direction: 'in' | 'out'
  }

  /** Webview login event. */
  export interface EventLogin {
    /** The URL prompting the login. */
    url: string
    /** Indicates if the login is for a proxy. */
    isProxy: boolean
    /** The scheme of the login prompt (e.g., "http", "https"). */
    scheme: string
    /** The host prompting the login. */
    host: string
    /** The port associated with the login prompt. */
    port: number
    /** The realm or domain for which the login is required. */
    realm: string
  }

  /** Webview audio event. */
  export interface EventAudio {
    /** Indicates if audio is currently playing in the webview. */
    audible: boolean
  }

  /** Webview theme color event. */
  export interface EventThemeColor {
    /** The theme color of the webview or null if not set. */
    color: string | null
  }

  /** Webview target url event. */
  export interface EventTargetUrl {
    /** The detected target URL. */
    url: string
  }

  /** Webview cursor event. */
  export interface EventCursor {
    /** The type of cursor displayed. */
    type: string
    /** The scale factor of the cursor. */
    scale?: number
  }

  /** Webview context menu event. */
  export interface EventContextMenu {
    /** The x-coordinate of the context menu. */
    x: number
    /** The y-coordinate of the context menu. */
    y: number
    /** Identifier for the frame where the context menu was invoked. */
    frameId: number
    /** The URL of the link that was right-clicked, if any. */
    linkURL: string
    /** The text of the link that was right-clicked, if any. */
    linkText: string
    /** The URL of the page where the context menu was invoked. */
    pageURL: string
    /** The URL of the frame where the context menu was invoked. */
    frameURL: string
    /** The source URL of the element that was right-clicked. */
    srcURL: string
    /** The type of media that was right-clicked, if any. */
    mediaType: 'none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin'
    /** Indicates if the right-clicked element has image contents. */
    hasImageContents: boolean
    /** Indicates if the right-clicked element is editable. */
    isEditable: boolean
    /** The text that was selected when the context menu was invoked. */
    selectionText: string
    /** The title text of the element that was right-clicked. */
    titleText: string
    /** The alt text of the image that was right-clicked, if any. */
    altText: string
    /** Suggested filename for the right-clicked content, if any. */
    suggestedFilename: string
    /** The rectangle area of the selected text. */
    selectionRect: Rectangle
    /** The start offset of the selected text. */
    selectionStartOffset: number
    /** The misspelled word that was right-clicked, if any. */
    misspelledWord: string
    /** List of suggested corrections for the misspelled word. */
    dictionarySuggestions: string[]
    /** The character set of the frame where the context menu was invoked. */
    frameCharset: string
    /** The type of input field that was right-clicked, if any. */
    inputFieldType: string
    /** Indicates if spellcheck is enabled for the right-clicked element. */
    spellcheckEnabled: boolean
    /** The source type of the menu (e.g., "mouse", "keyboard"). */
    menuSourceType: (
      'none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu' | 'longPress' |
      'longTap' | 'touchHandle' | 'stylus' | 'adjustSelection' | 'adjustSelectionReset'
    )
    /** Flags related to the media element that was right-clicked. */
    mediaFlags: EventContextMenuMediaFlags
    /** Flags related to the editable element that was right-clicked. */
    editFlags: EventContextMenuEditFlags
  }

  /** Webview context menu event media flags. */
  export interface EventContextMenuMediaFlags {
    /** Indicates if the media element is in an error state. */
    inError: boolean
    /** Indicates if the media element is paused. */
    isPaused: boolean
    /** Indicates if the media element is muted. */
    isMuted: boolean
    /** Indicates if the media element has audio. */
    hasAudio: boolean
    /** Indicates if the media element is looping. */
    isLooping: boolean
    /** Indicates if the media controls are visible. */
    isControlsVisible: boolean
    /** Indicates if the media controls can be toggled. */
    canToggleControls: boolean
    /** Indicates if the media element can be printed. */
    canPrint: boolean
    /** Indicates if the media element can be saved. */
    canSave: boolean
    /** Indicates if the media element supports Picture-in-Picture mode. */
    canShowPictureInPicture: boolean
    /** Indicates if the media element is currently in Picture-in-Picture mode. */
    isShowingPictureInPicture: boolean
    /** Indicates if the media element can be rotated. */
    canRotate: boolean
    /** Indicates if the media element supports looping. */
    canLoop: boolean
  }

  /** Webview context menu event edit flags. */
  export interface EventContextMenuEditFlags {
    /** Indicates if the "Undo" action is available. */
    canUndo: boolean
    /** Indicates if the "Redo" action is available. */
    canRedo: boolean
    /** Indicates if the "Cut" action is available. */
    canCut: boolean
    /** Indicates if the "Copy" action is available. */
    canCopy: boolean
    /** Indicates if the "Paste" action is available. */
    canPaste: boolean
    /** Indicates if the "Delete" action is available. */
    canDelete: boolean
    /** Indicates if the "Select All" action is available. */
    canSelectAll: boolean
    /** Indicates if rich text editing is available. */
    canEditRichly: boolean
  }

  /** Webview preferred size event. */
  export interface EventPreferredSize {
    /** The preferred width of the webview. */
    width: number
    /** The preferred height of the webview. */
    height: number
  }

  /** Webview console message event. */
  export interface EventConsoleMessage {
    /** The severity level of the console message. */
    level: number
    /** The content of the console message. */
    message: string
    /** The line number where the console message was logged. */
    line: number
  }

  /** Webview window referrer. */
  export interface EventWindowReferrer {
    /** The referrer URL. */
    url: string
    /** The referrer policy applied. */
    policy: (
      'default' | 'unsafe-url' | 'no-referrer-when-downgrade' |
      'no-referrer' | 'origin' | 'strict-origin-when-cross-origin' | 'same-origin' | 'strict-origin'
    )
  }

  /** Webview window event. */
  export interface EventWindow {
    /** The URL of the new window. */
    url: string
    /** The name of the frame requesting the new window. */
    frameName: string
    /** Features of the new window (e.g., "width=500,height=500"). */
    features: string
    /** How the new window should be displayed. */
    disposition: 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other'
    /** Referrer details for the new window. */
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

  /**
   * Gets the webview by ID.
   * @param webviewId The ID of the webview to get.
   * @returns The promise resolves with the webview object.
   */
  export function get(webviewId: string): Promise<Webview>

  /**
   * Queries webviews based on filter.
   * @param filter The filter to apply when querying webviews.
   * @returns The promise resolves with an array of webview objects that match the filter.
   */
  export function query(filter?: Partial<Webview>): Promise<Webview[]>

  /**
   * Creates a new webview with specified properties.
   * @param properties The properties for the new webview.
   * @returns The promise resolves with the created webview object.
   */
  export function create(properties?: WebviewProperties): Promise<Webview>

  /**
   * Removes the specified webviews.
   * @param webviewIds The IDs of the webviews to remove.
   * @returns The promise resolves when the webview are removed.
   */
  export function remove(webviewIds: string | string[]): Promise<void>

  /**
   * Gets the webview this call is being made from. Only works inside webviews.
   * @returns The promise resolves with the webview that the call is being made from.
   */
  export function getCurrent(): Promise<Webview>
  
  // Parent window

  /**
   * Attaches a webview to a window.
   * @param webviewId The ID of the webview to attach.
   * @param windowId The ID of the window to which the webview will be attached.
   * @returns The promise resolves when the webview is updated.
   */
  export function attach(webviewId: string, windowId: string): Promise<void>

  /**
   * Detaches a webview from its parent window.
   * @param webviewId The ID of the webview to detach.
   * @returns The promise resolves when the webview is updated.
   */
  export function detach(webviewId: string): Promise<boolean>

  /**
   * Moves the webview to the top.
   * @param webviewId The ID of the webview to move.
   * @returns The promise resolves when the webview is updated.
   */
  export function moveTop(webviewId: string): Promise<void>

  /**
   * Gets the window attached to the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the parent window id or null if not attached.
   */
  export function getAttachedWindow(webviewId: string): Promise<WindowId | null>

  /**
   * Sets the bounds of the webview.
   * @param webviewId The ID of the webview.
   * @param bounds The bounds to set for the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function setBounds(webviewId: string, bounds: Rectangle): Promise<void>

  /**
   * Gets the bounds of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the webview bounds.
   */
  export function getBounds(webviewId: string): Promise<Rectangle>

  /**
   * Sets auto resize options for the webview.
   * @param webviewId The ID of the webview.
   * @param options The auto resize options for the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function setAutoResize(webviewId: string, options?: AutoResize): Promise<Rectangle>

  // Authentication

  /**
   * Logs into the webview.
   * @param webviewId The ID of the webview.
   * @param username The username for login.
   * @param password The password for login.
   * @returns The promise resolves when the login is completed.
   */
  export function login(webviewId: string, username?: string, password?: string): Promise<void>

  /**
   * Gets the login details of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with login information or null if none found.
   */
  export function getLogin(webviewId: string): Promise<EventLogin | null>

  // Navigation

  /**
   * Loads a URL in the webview.
   * @param webviewId The ID of the webview.
   * @param url The URL to load.
   * @param options Optional parameters for loading the URL.
   * @returns The promise resolves when the webview is updated.
   */
  export function loadURL(webviewId: string, url: string, options?: LoadUrl): Promise<void>

  /**
   * Loads a file in the webview.
   * @param webviewId The ID of the webview.
   * @param path The path to the file.
   * @param options Optional parameters for loading the file.
   * @returns The promise resolves when the webview is updated.
   */
  export function loadFile(webviewId: string, path: string, options?: LoadPath): Promise<void>

  /**
   * Downloads a URL from the webview.
   * @param webviewId The ID of the webview.
   * @param url The URL to download.
   * @returns The promise resolves when the webview is updated.
   */
  export function downloadURL(webviewId: string, url: string): Promise<void>

  /**
   * Gets the current URL of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the current URL of the webview.
   */
  export function getURL(webviewId: string): Promise<string>

  /**
   * Checks if the webview is loading.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the loading state.
   */
  export function isLoading(webviewId: string): Promise<boolean>

  /**
   * Checks if the main frame of the webview is loading.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the loading state.
   */
  export function isLoadingMainFrame(webviewId: string): Promise<boolean>

  /**
   * Checks if the webview is waiting for a response.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with true if webview is waiting for a response.
   */
  export function isWaitingForResponse(webviewId: string): Promise<boolean>

  /**
   * Closes the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function close(webviewId: string): Promise<void>

  /**
   * Stops loading in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function stop(webviewId: string): Promise<void>

  /**
   * Reloads the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function reload(webviewId: string): Promise<void>

  /**
   * Reloads the webview ignoring cache.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function reloadIgnoringCache(webviewId: string): Promise<void>

  // Focus

  /**
   * Checks if the webview is focused.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the focus value.
   */
  export function isFocused(webviewId: string): Promise<boolean>

  /**
   * Focuses the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function focus(webviewId: string): Promise<void>
  
  // Offscreen rendering

  /**
   * Checks if the webview is offscreen.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the offscreen value.
   */
  export function isOffscreen(webviewId: string): Promise<boolean>

  /**
   * Starts painting the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function startPainting(webviewId: string): Promise<void>

  /**
   * Stops painting the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function stopPainting(webviewId: string): Promise<void>

  /**
   * Checks if the webview is painting.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the painting value.
   */
  export function isPainting(webviewId: string): Promise<boolean>

  /**
   * Sets the frame rate of the webview.
   * @param webviewId The ID of the webview.
   * @param fps The frame rate to set.
   * @returns The promise resolves when the webview is updated.
   */
  export function setFrameRate(webviewId: string, fps: number): Promise<void>

  /**
   * Gets the frame rate of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the frame rate of the webview.
   */
  export function getFrameRate(webviewId: string): Promise<number>

  /**
   * Invalidates the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function invalidate(webviewId: string): Promise<void>

  // Performance

  /**
   * Sets background throttling for the webview.
   * @param webviewId The ID of the webview.
   * @param value The value for background throttling.
   * @returns The promise resolves when the webview is updated.
   */
  export function setBackgroundThrottling(webviewId: string, value: boolean): Promise<void>

  /**
   * Gets the background throttling status of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the background throttling status.
   */
  export function getBackgroundThrottling(webviewId: string): Promise<boolean>

  /**
   * Sets the image animation policy for the webview.
   * @param webviewId The ID of the webview.
   * @param policy The image animation policy to set.
   * @returns The promise resolves when the webview is updated.
   */
  export function setImageAnimationPolicy(webviewId: string, policy: 'animate' | 'animateOnce' | 'noAnimation'): Promise<void>

  // Audio

  /**
   * Mutes or unmutes audio in the webview.
   * @param webviewId The ID of the webview.
   * @param muted The mute status.
   * @returns The promise resolves when the webview is updated.
   */
  export function setAudioMuted(webviewId: string, muted: boolean): Promise<void>

  /**
   * Checks if the audio in the webview is muted.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the webview audio mute state.
   */
  export function isAudioMuted(webviewId: string): Promise<boolean>

  /**
   * Checks if the webview is currently audible.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the audible state of the webview.
   */
  export function isCurrentlyAudible(webviewId: string): Promise<boolean>

  // Selection

  /**
   * Selects all content in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function selectAll(webviewId: string): Promise<void>

  /**
   * Unselects content in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function unselect(webviewId: string): Promise<void>
  
  // User agent

  /**
   * Sets the user agent for the webview.
   * @param webviewId The ID of the webview.
   * @param userAgent The user agent to set.
   * @returns The promise resolves when the webview is updated.
   */
  export function setUserAgent(webviewId: string, userAgent: string): Promise<void>

  /**
   * Gets the user agent of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the user agent.
   */
  export function getUserAgent(webviewId: string): Promise<string>
  
  // Injection

  /**
   * Inserts CSS into the webview.
   * @param webviewId The ID of the webview.
   * @param css The CSS to insert.
   * @param options Optional parameters for inserting the CSS.
   * @returns The promise resolves when the webview is updated.
   */
  export function insertCSS(webviewId: string, css: string, options?: CSSOptions): Promise<string>

  /**
   * Removes CSS from the webview.
   * @param webviewId The ID of the webview.
   * @param key The key of the CSS to remove.
   * @returns The promise resolves when the webview is updated.
   */
  export function removeCSS(webviewId: string, key: string): Promise<void>

  /**
   * Executes JavaScript in the webview.
   * @param webviewId The ID of the webview.
   * @param code The JavaScript code to execute.
   * @param options Optional parameters for executing the JavaScript.
   * @returns The promise resolves when the webview is updated.
   */
  export function executeJavaScript(webviewId: string, code: string, options?: JavaScriptOptions): Promise<void>

  // Process

  /**
   * Gets the process ID of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the process ID.
   */
  export function getProcessId(webviewId: string): Promise<number>

  /**
   * Checks if the webview has crashed.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with true if webview has crashed.
   */
  export function isCrashed(webviewId: string): Promise<boolean>

  /**
   * Crashes the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function crash(webviewId: string): Promise<void>

  // Clipboard

  /**
   * Undoes the last action in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function undo(webviewId: string): Promise<void>

  /**
   * Redoes the last undone action in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function redo(webviewId: string): Promise<void>

  /**
   * Copies selected content from the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function copy(webviewId: string): Promise<void>

  /**
   * Copies an image at specified coordinates in the webview.
   * @param webviewId The ID of the webview.
   * @param x The x-coordinate of the image.
   * @param y The y-coordinate of the image.
   * @returns The promise resolves when the webview is updated.
   */
  export function copyImageAt(webviewId: string, x: number, y: number): Promise<void>

  /**
   * Pastes content into the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function paste(webviewId: string): Promise<void>

  /**
   * Pastes content and matches the style in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function pasteAndMatchStyle(webviewId: string): Promise<void>
  
  // Editing

  /**
   * Deletes selected content in the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  function _delete(webviewId: string): Promise<void>
  export { _delete as delete }

  /**
   * Replaces selected content in the webview.
   * @param webviewId The ID of the webview.
   * @param text The text to replace with.
   * @returns The promise resolves when the webview is updated.
   */
  export function replace(webviewId: string, text: string): Promise<void>

  /**
   * Replaces a misspelled word in the webview.
   * @param webviewId The ID of the webview.
   * @param text The correct text to replace the misspelled word with.
   * @returns The promise resolves when the webview is updated.
   */
  export function replaceMisspelling(webviewId: string, text: string): Promise<void>

  /**
   * Inserts text into the focused component in the webview.
   * @param webviewId The ID of the webview.
   * @param text The text to insert.
   * @returns The promise resolves when the webview is updated.
   */
  export function insertText(webviewId: string, text: string): Promise<void>

  /**
   * Sends an input event to the webview.
   * @param webviewId The ID of the webview.
   * @param options The input event options.
   * @returns The promise resolves when the webview is updated.
   */
  export function sendInput(webviewId: string, options: MouseInputEvent | MouseWheelInputEvent | KeyboardInputEvent): Promise<void>

  // In-page navigation

  /**
   * Navigates to a specific index in the webview's history.
   * @param webviewId The ID of the webview.
   * @param index The index in the history to navigate to.
   * @returns The promise resolves when the webview is updated.
   */
  export function goToIndex(webviewId: string, index: number): Promise<void>

  /**
   * Navigates to a specific offset in the webview's history.
   * @param webviewId The ID of the webview.
   * @param offset The offset in the history to navigate to.
   * @returns The promise resolves when the webview is updated.
   */
  export function goToOffset(webviewId: string, offset: number): Promise<void>

  /**
   * Checks if the webview can navigate to a specific offset.
   * @param webviewId The ID of the webview.
   * @param offset The offset in the history to check.
   * @returns The promise resolves when the webview is updated.
   */
  export function canGoToOffset(webviewId: string, offset: number): Promise<boolean>
  
  // History

  /**
   * Checks if the webview can go back in history.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the state.
   */
  export function canGoBack(webviewId: string): Promise<boolean>

  /**
   * Checks if the webview can go forward in history.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the state.
   */
  export function canGoForward(webviewId: string): Promise<boolean>

  /**
   * Clears the webview's history.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function clearHistory(webviewId: string): Promise<void>

  /**
   * Navigates back in the webview's history.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function goBack(webviewId: string): Promise<void>

  /**
   * Navigates forward in the webview's history.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function goForward(webviewId: string): Promise<void>

  // Zoom

  /**
   * Sets the zoom factor for the webview.
   * @param webviewId The ID of the webview.
   * @param factor The zoom factor to set.
   * @returns The promise resolves when the webview is updated.
   */
  export function setZoomFactor(webviewId: string, factor: number): Promise<void>

  /**
   * Gets the zoom factor for the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the zoom factor for the webview.
   */
  export function getZoomFactor(webviewId: string): Promise<number>

  /**
   * Sets the zoom level for the webview.
   * @param webviewId The ID of the webview.
   * @param level The zoom level to set.
   * @returns The promise resolves when the webview is updated.
   */
  export function setZoomLevel(webviewId: string, level: number): Promise<void>

  /**
   * Gets the zoom level of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the zoom level.
   */
  export function getZoomLevel(webviewId: string): Promise<number>

  /**
   * Sets visual zoom level limits for the webview.
   * @param webviewId The ID of the webview.
   * @param minimumLevel The minimum zoom level.
   * @param maximumLevel The maximum zoom level.
   * @returns The promise resolves when the webview is updated.
   */
  export function setVisualZoomLevelLimits(webviewId: string, minimumLevel: number, maximumLevel: number): Promise<void>

  // Devtools

  /**
   * Opens developer tools for the webview.
   * @param webviewId The ID of the webview.
   * @param options Optional parameters for opening the developer tools.
   * @returns The promise resolves when the webview is updated.
   */
  export function openDevTools(webviewId: string, options?: DevTools): Promise<void>

  /**
   * Closes developer tools for the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function closeDevTools(webviewId: string): Promise<void>

  /**
   * Check if developer tools are open for the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with true if dev tools are open.
   */
  export function isDevToolsOpened(webviewId: string): Promise<boolean>

  /**
   * Check if developer tools are focused for the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the focus state.
   */
  export function isDevToolsFocused(webviewId: string): Promise<boolean>

  /**
   * Toggle developer tools for the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves when the webview is updated.
   */
  export function toggleDevTools(webviewId: string): Promise<void>

  /**
   * Inspect an element at specified coordinates in the webview.
   * @param webviewId The ID of the webview.
   * @param x The x-coordinate of the element.
   * @param y The y-coordinate of the element.
   * @returns The promise resolves when the webview is updated.
   */
  export function inspectElement(webviewId: string, x: number, y: number): Promise<void>
  
  // Misc

  /**
   * Get the title of the webview.
   * @param webviewId The ID of the webview.
   * @returns The promise resolves with the title.
   */
  export function getTitle(webviewId: string): Promise<string>

  /**
   * Set whether to ignore menu shortcuts in the webview.
   * @param webviewId The ID of the webview.
   * @param ignore Whether to ignore menu shortcuts.
   * @returns The promise resolves when the webview is updated.
   */
  export function setIgnoreMenuShortcuts(webviewId: string, ignore: boolean): Promise<void>

  /**
   * Set the background color of the webview.
   * @param webviewId The ID of the webview.
   * @param color The color to set as the background.
   * @returns The promise resolves when the webview is updated.
   */
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
