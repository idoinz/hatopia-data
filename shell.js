// Hatopia v1.0.0 — bump version when changing this file
window.APP_SHELL_HTML = `
        <div class="app-shell">
            <div class="sticky-top">
                <header class="app-header">
                    <div class="brand">
                        <span class="brand-mark">
                            <img
                                src="https://raw.githubusercontent.com/demo0ne/hatopia-data/master/images/hatopia.png"
                                alt="Heartopia logo"
                            />
                        </span>
                        <div class="brand-text">
                            <h1 class="brand-title"><span class="brand-name">Heartopia</span><span class="brand-suffix"> Dashboard</span></h1>
                        </div>
                    </div>
                    <nav class="tab-nav" role="tablist" aria-label="Main">
                        <button type="button" class="tab-btn is-selected" role="tab" id="tab-info-btn" aria-selected="true" aria-controls="panel-info" data-panel="info">
                            <span class="tab-icon" aria-hidden="true">ℹ️</span>
                            <span class="tab-label">Info</span>
                        </button>
                        <button type="button" class="tab-btn" role="tab" id="tab-dashboard-btn" aria-selected="false" aria-controls="panel-dashboard" data-panel="dashboard">
                            <span class="tab-icon" aria-hidden="true">📝</span>
                            <span class="tab-label">To-do</span>
                        </button>
                        <button type="button" class="tab-btn" role="tab" id="tab-flowers-btn" aria-selected="false" aria-controls="panel-flowers" data-panel="flowers">
                            <span class="tab-icon" aria-hidden="true">🌻</span>
                            <span class="tab-label">Flowers</span>
                        </button>
                        <button type="button" class="tab-btn" role="tab" id="tab-animals-btn" aria-selected="false" aria-controls="panel-animals" data-panel="animals">
                            <span class="tab-icon" aria-hidden="true">🐰</span>
                            <span class="tab-label">Animals</span>
                        </button>
                        <button type="button" class="tab-btn admin-only-tab" role="tab" id="tab-uploads-btn" aria-selected="false" aria-controls="panel-uploads" data-panel="uploads" hidden>
                            <span class="tab-icon" aria-hidden="true">📲</span>
                            <span class="tab-label">Uploads</span>
                        </button>
                    </nav>
                    <div class="header-actions">
                        <span class="header-action-hidden">
                            <button
                                type="button"
                                id="export-tasks"
                                class="btn export"
                            >
                                ⬆️ Export
                            </button>
                            <button
                                type="button"
                                id="import-tasks"
                                class="btn import"
                            >
                                ⬇️ Import
                            </button>
                        </span>
                        <input
                            type="file"
                            id="import-file"
                            accept=".json"
                            style="display: none"
                        />
                        <div class="theme-toggle-wrap">
                            <span class="theme-toggle-label" aria-hidden="true">☀️</span>
                            <button
                                type="button"
                                id="theme-toggle"
                                class="theme-toggle"
                                aria-label="Toggle dark mode"
                                title="Toggle dark / light mode"
                            >
                                <span class="theme-toggle-track">
                                    <span class="theme-toggle-thumb"></span>
                                </span>
                            </button>
                            <span class="theme-toggle-label" aria-hidden="true">🌙</span>
                        </div>
                    </div>
                </header>
            </div>

            <div
                id="panel-dashboard"
                class="tab-panel"
                role="tabpanel"
                aria-labelledby="tab-dashboard-btn"
                hidden
            >
                <main class="app-main">
                    <div class="main-content-scroll">
                    <section class="card list-card is-expanded" id="group-SEA" data-group="SEA">
                        <header class="list-header">
                            <span class="group-drag-handle" draggable="true" aria-label="Drag to reorder group" data-group="SEA">⋮⋮</span>
                            <button
                                type="button"
                                class="group-toggle"
                                data-group="SEA"
                                aria-expanded="true"
                            >
                                <span class="list-title">
                                    <span class="todo-group-flag">
                                        <img
                                            id="sea-group-icon"
                                            src="https://raw.githubusercontent.com/demo0ne/hatopia-data/master/images/groups/SEA.png"
                                            alt="Philippines flag for SEA group"
                                        />
                                    </span>
                                    <h2 id="sea-group-title">SEA</h2>
                                </span>
                                <span class="group-chevron">▲</span>
                            </button>
                            <span id="todo-count" class="muted">0 tasks</span>
                        </header>
                        <div class="group-content">
                            <div
                                class="pending-wrapper is-expanded"
                                id="pending-wrapper-SEA"
                            >
                                <button
                                    type="button"
                                    class="pending-toggle"
                                    data-group="SEA"
                                    aria-expanded="true"
                                >
                                    Pending <span class="pending-count">0</span>
                                    <span class="pending-chevron">▲</span>
                                </button>
                                <ul
                                    id="todo-list-SEA"
                                    class="todo-list pending-list"
                                    aria-live="polite"
                                ></ul>
                            </div>
                            <div
                                class="completed-wrapper"
                                id="completed-wrapper-SEA"
                            >
                                <button
                                    type="button"
                                    class="completed-toggle"
                                    data-group="SEA"
                                    aria-expanded="false"
                                >
                                    Completed
                                    <span class="completed-count">0</span>
                                    <span class="completed-chevron">▼</span>
                                </button>
                                <ul
                                    id="todo-list-SEA-completed"
                                    class="todo-list completed-list"
                                ></ul>
                            </div>
                        </div>
                    </section>

                    <section class="card list-card is-expanded" id="group-ASIA" data-group="ASIA">
                        <header class="list-header">
                            <span class="group-drag-handle" draggable="true" aria-label="Drag to reorder group" data-group="ASIA">⋮⋮</span>
                            <button
                                type="button"
                                class="group-toggle"
                                data-group="ASIA"
                                aria-expanded="true"
                            >
                                <span class="list-title">
                                    <span class="todo-group-flag">
                                        <img
                                            src="https://raw.githubusercontent.com/demo0ne/hatopia-data/master/images/groups/ASIA.png"
                                            alt="Korea flag for ASIA group"
                                        />
                                    </span>
                                    <h2>ASIA</h2>
                                </span>
                                <span class="group-chevron">▲</span>
                            </button>
                            <span id="todo-count-asia" class="muted"
                                >0 tasks</span
                            >
                        </header>
                        <div class="group-content">
                            <div
                                class="pending-wrapper is-expanded"
                                id="pending-wrapper-ASIA"
                            >
                                <button
                                    type="button"
                                    class="pending-toggle"
                                    data-group="ASIA"
                                    aria-expanded="true"
                                >
                                    Pending <span class="pending-count">0</span>
                                    <span class="pending-chevron">▲</span>
                                </button>
                                <ul
                                    id="todo-list-ASIA"
                                    class="todo-list pending-list"
                                    aria-live="polite"
                                ></ul>
                            </div>
                            <div
                                class="completed-wrapper"
                                id="completed-wrapper-ASIA"
                            >
                                <button
                                    type="button"
                                    class="completed-toggle"
                                    data-group="ASIA"
                                    aria-expanded="false"
                                >
                                    Completed
                                    <span class="completed-count">0</span>
                                    <span class="completed-chevron">▼</span>
                                </button>
                                <ul
                                    id="todo-list-ASIA-completed"
                                    class="todo-list completed-list"
                                ></ul>
                            </div>
                        </div>
                    </section>

                    <section class="card list-card is-expanded" id="group-TW" data-group="TW">
                        <header class="list-header">
                            <span class="group-drag-handle" draggable="true" aria-label="Drag to reorder group" data-group="TW">⋮⋮</span>
                            <button
                                type="button"
                                class="group-toggle"
                                data-group="TW"
                                aria-expanded="true"
                            >
                                <span class="list-title">
                                    <span class="todo-group-flag">
                                        <img
                                            src="https://raw.githubusercontent.com/demo0ne/hatopia-data/master/images/groups/TW.png"
                                            alt="Taiwan flag for TW group"
                                        />
                                    </span>
                                    <h2>TW</h2>
                                </span>
                                <span class="group-chevron">▲</span>
                            </button>
                            <span id="todo-count-tw" class="muted"
                                >0 tasks</span
                            >
                        </header>
                        <div class="group-content">
                            <div
                                class="pending-wrapper is-expanded"
                                id="pending-wrapper-TW"
                            >
                                <button
                                    type="button"
                                    class="pending-toggle"
                                    data-group="TW"
                                    aria-expanded="true"
                                >
                                    Pending <span class="pending-count">0</span>
                                    <span class="pending-chevron">▲</span>
                                </button>
                                <ul
                                    id="todo-list-TW"
                                    class="todo-list pending-list"
                                    aria-live="polite"
                                ></ul>
                            </div>
                            <div
                                class="completed-wrapper"
                                id="completed-wrapper-TW"
                            >
                                <button
                                    type="button"
                                    class="completed-toggle"
                                    data-group="TW"
                                    aria-expanded="false"
                                >
                                    Completed
                                    <span class="completed-count">0</span>
                                    <span class="completed-chevron">▼</span>
                                </button>
                                <ul
                                    id="todo-list-TW-completed"
                                    class="todo-list completed-list"
                                ></ul>
                            </div>
                        </div>
                    </section>

                    </div>
                    <section class="card new-todo-card">
                        <h2>Add a task</h2>
                        <form
                            id="todo-form"
                            autocomplete="off"
                            class="add-task-form"
                        >
                            <div class="add-task-form-left">
                                <label class="field add-task-field">
                                    <span class="task-label-row">
                                        <span class="field-label">Task</span>
                                        <label class="important-inline" for="todo-important">
                                            <input type="checkbox" id="todo-important" aria-label="Mark as important" />
                                            <span class="important-emoji" aria-hidden="true">‼️</span>
                                        </label>
                                    </span>
                                    <input
                                        id="todo-input"
                                        type="text"
                                        placeholder="What do you need to get done?"
                                        required
                                        maxlength="200"
                                    />
                                </label>
                                <div class="subtask-form add-task-subtask">
                                    <span class="field-label"
                                        >Sub-tasks (optional)</span
                                    >
                                    <div class="subtask-form-row">
                                        <input
                                            id="new-subtask-input"
                                            type="text"
                                            placeholder="Add sub-task, press ➕"
                                            maxlength="120"
                                        />
                                        <button
                                            type="button"
                                            id="add-subtask-draft"
                                            class="icon-button subtask-add-draft"
                                            aria-label="Add sub-task to new task"
                                        >
                                            ➕
                                        </button>
                                    </div>
                                    <ul
                                        id="subtask-draft-list"
                                        class="subtask-list subtask-list--draft"
                                    ></ul>
                                </div>
                            </div>
                            <div class="add-task-form-right">
                                <div class="add-task-form-row">
                                    <label class="field type-field">
                                        <span class="field-label">Type</span>
                                        <select id="todo-type">
                                            <option value="daily">Daily</option>
                                            <option value="weekly">
                                                Weekly
                                            </option>
                                            <option value="seasonal">
                                                Seasonal
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </label>
                                    <div id="form-group-field">
                                        <label class="field group-field">
                                            <span class="field-label"
                                                >Group</span
                                            >
                                            <select id="todo-group">
                                                <option value="SEA">
                                                    🇵🇭 SEA
                                                </option>
                                                <option value="ASIA">
                                                    🇰🇷 ASIA
                                                </option>
                                                <option value="TW">
                                                    🇹🇼 TW
                                                </option>
                                                <option value="ALL" selected>
                                                    All groups
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                    <button type="submit" class="btn primary">
                                        Add task
                                    </button>
                                </div>
                                <div class="add-task-form-row">
                                    <label class="field reset-field">
                                        <span class="field-label">Reset</span>
                                        <select id="reset-filter">
                                            <option value="all">
                                                All tasks
                                            </option>
                                            <option value="daily" selected>
                                                Daily only
                                            </option>
                                            <option value="weekly">
                                                Weekly only
                                            </option>
                                            <option value="seasonal">
                                                Seasonal only
                                            </option>
                                            <option value="other">
                                                Other only
                                            </option>
                                        </select>
                                    </label>
                                    <button
                                        type="button"
                                        id="reset-all"
                                        class="btn secondary"
                                        title="Reset completed tasks based on filter"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <p id="empty-state" class="empty-state">
                        <!-- Nothing here yet. Add your first task below. -->
                    </p>
                </main>

                <footer class="app-footer">
                    <!-- <span class="muted"
          >Data is stored locally in your browser using
          <code>localStorage</code>.</span
        > -->
                </footer>
            </div>

            <div
                id="panel-flowers"
                class="tab-panel"
                role="tabpanel"
                aria-labelledby="tab-flowers-btn"
                hidden
            >
                <div id="flowers-panel-content"></div>
            </div>

            <div
                id="panel-animals"
                class="tab-panel"
                role="tabpanel"
                aria-labelledby="tab-animals-btn"
                hidden
            >
                <div id="animals-panel-content"></div>
            </div>

            <div
                id="panel-info"
                class="tab-panel"
                role="tabpanel"
                aria-labelledby="tab-info-btn"
            >
                <div id="info-panel-content"></div>
            </div>

            <div
                id="panel-uploads"
                class="tab-panel"
                role="tabpanel"
                aria-labelledby="tab-uploads-btn"
                hidden
            >
                <section class="uploads-page">
                    <!-- Row A: Roaming / Flawless (read-only) + Include in Message -->
                    <div class="uploads-section uploads-section--row-a card">
                        <div class="uploads-row uploads-row--readonly">
                            <label class="header-field">
                                <span class="header-field-label"
                                    >🌳 Roaming Oak</span
                                >
                                <select
                                    id="uploads-roaming-oak"
                                    class="header-field-select"
                                    disabled
                                    aria-label="Roaming Oak (read-only)"
                                >
                                    <option value="LOT 1">🏚️ 1</option>
                                    <option value="LOT 2">🏚️ 2</option>
                                    <option value="LOT 3">🏚️ 3</option>
                                    <option value="LOT 4">🏚️ 4</option>
                                    <option value="LOT 5">🏚️ 5</option>
                                    <option value="LOT 6">🏚️ 6</option>
                                    <option value="LOT 7">🏚️ 7</option>
                                    <option value="LOT 8">🏚️ 8</option>
                                    <option value="LOT 9">🏚️ 9</option>
                                    <option value="LOT 10">🏚️ 10</option>
                                    <option value="LOT 11">🏚️ 11</option>
                                    <option value="LOT 12">🏚️ 12</option>
                                    <option value="🌳🌳">🌳🌳</option>
                                </select>
                            </label>
                            <label class="header-field">
                                <span class="header-field-label"
                                    >💎 Flawless Flouride</span
                                >
                                <select
                                    id="uploads-flawless-flouride"
                                    class="header-field-select"
                                    disabled
                                    aria-label="Flawless Flouride (read-only)"
                                >
                                    <option value="LOT 1">🏚️ 1</option>
                                    <option value="LOT 2">🏚️ 2</option>
                                    <option value="LOT 3">🏚️ 3</option>
                                    <option value="LOT 4">🏚️ 4</option>
                                    <option value="LOT 5">🏚️ 5</option>
                                    <option value="LOT 6">🏚️ 6</option>
                                    <option value="LOT 7">🏚️ 7</option>
                                    <option value="LOT 8">🏚️ 8</option>
                                    <option value="LOT 9">🏚️ 9</option>
                                    <option value="LOT 10">🏚️ 10</option>
                                    <option value="LOT 11">🏚️ 11</option>
                                    <option value="LOT 12">🏚️ 12</option>
                                    <option value="⛰️🗻">⛰️🗻</option>
                                </select>
                            </label>
                            <label class="uploads-include-wrap">
                                <input
                                    type="checkbox"
                                    id="uploads-include-in-message"
                                    checked
                                    aria-label="Include Roaming Oak and Flawless Flouride in Discord message"
                                />
                                <span>Include in Message</span>
                            </label>
                        </div>
                    </div>
                    <!-- Row B: Upload buttons + include images checkbox + card grid -->
                    <div class="uploads-section uploads-section--row-b card">
                        <div class="uploads-row">
                            <button
                                type="button"
                                id="uploads-upload-btn"
                                class="btn import"
                            >
                                ⬆️ Upload
                            </button>
                            <input
                                type="file"
                                id="uploads-file-input"
                                accept="image/*,*/*"
                                multiple
                                style="display: none"
                            />
                            <p class="uploads-paste-hint">
                                or click in this area and press
                                <kbd>Ctrl+V</kbd> / <kbd>Cmd+V</kbd> to paste
                                your image.
                            </p>
                            <label class="uploads-include-wrap">
                                <input
                                    type="checkbox"
                                    id="uploads-include-images-in-message"
                                    checked
                                    aria-label="Include images in Discord message"
                                />
                                <span>Include in Message</span>
                            </label>
                        </div>
                        <div
                            id="uploads-grid"
                            class="uploads-grid"
                            role="list"
                        ></div>
                    </div>
                    <!-- Row C: Remark (include in message checkbox + multi-line input) -->
                    <div class="uploads-section uploads-section--row-c card">
                        <div class="uploads-remark-row">
                            <label class="uploads-include-wrap">
                                <input
                                    type="checkbox"
                                    id="uploads-include-remark-in-message"
                                    checked
                                    aria-label="Include remark in Discord message"
                                />
                                <span>Include in Message</span>
                            </label>
                            <label class="uploads-remark-label">
                                <span class="uploads-remark-label-text"
                                    >Remark</span
                                >
                                <textarea
                                    id="uploads-remark"
                                    class="uploads-remark-input"
                                    rows="3"
                                    placeholder="Optional remark to send with the message…"
                                ></textarea>
                            </label>
                        </div>
                    </div>
                    <!-- Row D: Send to Discord -->
                    <div class="uploads-section uploads-section--row-d">
                        <button
                            type="button"
                            id="send-discord"
                            class="btn discord"
                            title="Send Roaming Oak & Flawless Flouride to Discord"
                        >
                            📤 Send to Discord
                        </button>
                    </div>
                </section>
            </div>
        </div>

        <div
            id="flower-lightbox"
            class="flower-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Flower image"
            hidden
        >
            <button
                type="button"
                class="flower-lightbox-close"
                aria-label="Close"
            >
                ×
            </button>
            <div class="flower-lightbox-backdrop"></div>
            <img class="flower-lightbox-img" src="" alt="" />
        </div>

        <div
            id="animal-lightbox"
            class="animal-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Animal details"
            hidden
        >
            <button
                type="button"
                class="animal-lightbox-close"
                aria-label="Close"
            >
                ×
            </button>
            <div class="animal-lightbox-backdrop"></div>
            <div class="animal-lightbox-content">
                <h2 class="animal-lightbox-title"></h2>
                <ul class="animal-lightbox-foods"></ul>
            </div>
        </div>

        <dialog
            id="export-dialog"
            class="data-dialog"
            aria-labelledby="export-dialog-title"
        >
            <h2 id="export-dialog-title">Export tasks</h2>
            <p class="data-dialog-desc">Choose which group to export:</p>
            <select id="export-group-select" class="header-field-select">
                <option value="all">All groups</option>
                <option value="SEA">🇵🇭 SEA</option>
                <option value="ASIA">🇰🇷 ASIA</option>
                <option value="TW">🇹🇼 TW</option>
            </select>
            <div class="data-dialog-actions">
                <button
                    type="button"
                    id="export-dialog-cancel"
                    class="btn ghost"
                >
                    Cancel
                </button>
                <button type="button" id="export-dialog-confirm" class="btn">
                    Export
                </button>
            </div>
        </dialog>

        <dialog
            id="import-dialog"
            class="data-dialog"
            aria-labelledby="import-dialog-title"
        >
            <h2 id="import-dialog-title">Import tasks</h2>
            <p class="data-dialog-desc" id="import-group-desc">
                Import into which group?
            </p>
            <select id="import-group-select" class="header-field-select">
                <option value="all">Replace all groups</option>
                <option value="SEA">🇵🇭 SEA</option>
                <option value="ASIA">🇰🇷 ASIA</option>
                <option value="TW">🇹🇼 TW</option>
            </select>
            <div class="data-dialog-actions">
                <button
                    type="button"
                    id="import-dialog-cancel"
                    class="btn ghost"
                >
                    Cancel
                </button>
                <button type="button" id="import-dialog-confirm" class="btn">
                    Import
                </button>
            </div>
        </dialog>


`;