/**
 * Renders file chips for the current note and @-mentioned attachments.
 */

import { setIcon } from 'obsidian';

export interface FileChipsViewCallbacks {
  onRemoveAttachment: (path: string) => void;
  onOpenFile: (path: string) => void;
  onTogglePin: (path: string, shouldPin: boolean) => void;
}

export class FileChipsView {
  private containerEl: HTMLElement;
  private callbacks: FileChipsViewCallbacks;
  private fileIndicatorEl: HTMLElement;

  /** Current note path (shown first). */
  private currentNotePath: string | null = null;
  /** Additional attached file paths (shown after current note). */
  private attachedPaths: Set<string> = new Set();
  /** Pinned file paths (won't be auto-replaced). */
  private pinnedPaths: Set<string> = new Set();

  constructor(containerEl: HTMLElement, callbacks: FileChipsViewCallbacks) {
    this.containerEl = containerEl;
    this.callbacks = callbacks;

    const firstChild = this.containerEl.firstChild;
    this.fileIndicatorEl = this.containerEl.createDiv({ cls: 'oc-file-indicator' });
    if (firstChild) {
      this.containerEl.insertBefore(this.fileIndicatorEl, firstChild);
    }
  }

  destroy(): void {
    this.fileIndicatorEl.remove();
  }

  /** Renders chip for the current/focus note only (legacy method). */
  renderCurrentNote(filePath: string | null): void {
    this.currentNotePath = filePath;
    this.renderAllChips();
  }

  /** Updates the list of attached files (from @-mentions). */
  setAttachedFiles(paths: Set<string>): void {
    this.attachedPaths = new Set(paths);
    this.renderAllChips();
  }

  /** Updates the list of pinned files. */
  setPinnedFiles(paths: Set<string>): void {
    this.pinnedPaths = new Set(paths);
    this.renderAllChips();
  }

  /** Add a single attached file. */
  addAttachedFile(path: string): void {
    this.attachedPaths.add(path);
    this.renderAllChips();
  }

  /** Remove a single attached file. */
  removeAttachedFile(path: string): void {
    this.attachedPaths.delete(path);
    this.renderAllChips();
  }

  /** Clear all attached files. */
  clearAttachedFiles(): void {
    this.attachedPaths.clear();
    this.pinnedPaths.clear();
    this.renderAllChips();
  }

  /** Renders all file chips (current note + attached files). */
  private renderAllChips(): void {
    this.fileIndicatorEl.empty();

    // Collect all paths to display
    const pathsToShow: string[] = [];

    // Current note first (if present)
    if (this.currentNotePath) {
      pathsToShow.push(this.currentNotePath);
    }

    // Then attached files (excluding current note to avoid duplicates)
    for (const path of this.attachedPaths) {
      if (path !== this.currentNotePath) {
        pathsToShow.push(path);
      }
    }

    if (pathsToShow.length === 0) {
      this.fileIndicatorEl.style.display = 'none';
      return;
    }

    this.fileIndicatorEl.style.display = 'flex';

    for (const filePath of pathsToShow) {
      const isCurrentNote = filePath === this.currentNotePath;
      const isPinned = this.pinnedPaths.has(filePath);
      this.renderFileChip(filePath, isCurrentNote, isPinned);
    }
  }

  private renderFileChip(filePath: string, isCurrentNote: boolean, isPinned: boolean): void {
    const chipEl = this.fileIndicatorEl.createDiv({ cls: 'oc-file-chip' });

    // Add visual distinction for pinned vs unpinned
    if (isPinned) {
      chipEl.addClass('oc-file-chip-pinned');
    } else if (isCurrentNote) {
      chipEl.addClass('oc-file-chip-current');
    } else {
      chipEl.addClass('oc-file-chip-attached');
    }

    // File icon
    const iconEl = chipEl.createSpan({ cls: 'oc-file-chip-icon' });
    setIcon(iconEl, 'file-text');

    // File name
    const normalizedPath = filePath.replace(/\\/g, '/');
    const filename = normalizedPath.split('/').pop() || filePath;
    const nameEl = chipEl.createSpan({ cls: 'oc-file-chip-name' });
    nameEl.setText(filename);
    nameEl.setAttribute('title', filePath);

    // Click on chip body to open file
    chipEl.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.oc-file-chip-pin') && !target.closest('.oc-file-chip-remove')) {
        this.callbacks.onOpenFile(filePath);
      }
    });

    // Pin button
    const pinEl = chipEl.createSpan({ cls: 'oc-file-chip-pin' });
    setIcon(pinEl, isPinned ? 'pin-off' : 'pin');
    pinEl.setAttribute('aria-label', isPinned ? 'Unpin (allow auto-change)' : 'Pin (keep attached)');
    pinEl.setAttribute('title', isPinned ? '📌 Pinned - Click to unpin' : 'Click to pin this note');

    pinEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.callbacks.onTogglePin(filePath, !isPinned);
    });

    // Remove button
    const removeEl = chipEl.createSpan({ cls: 'oc-file-chip-remove' });
    removeEl.setText('\u00D7');
    removeEl.setAttribute('aria-label', 'Remove');

    removeEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.callbacks.onRemoveAttachment(filePath);
    });
  }
}
