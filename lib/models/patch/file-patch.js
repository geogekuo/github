import Patch from './patch';
  static createNull() {
    return new this(nullFile, nullFile, Patch.createNull());
  }

  getHunkAt(bufferRow) {
    return this.getPatch().getHunkAt(bufferRow);
  }

  getBuffer() {
    return this.getPatch().getBuffer();
  getHunkLayer() {
    return this.getPatch().getHunkLayer();
  }

  getUnchangedLayer() {
    return this.getPatch().getUnchangedLayer();
  }

  getAdditionLayer() {
    return this.getPatch().getAdditionLayer();
  }

  getDeletionLayer() {
    return this.getPatch().getDeletionLayer();
  }

  getNoNewlineLayer() {
    return this.getPatch().getNoNewlineLayer();
  }

  // TODO delete if unused
  // TODO delete if unused
  // TODO delete if unused
  adoptBufferFrom(prevFilePatch) {
    this.getPatch().adoptBufferFrom(prevFilePatch.getPatch());
  }

  isEqual(other) {
    if (!(other instanceof this.constructor)) { return false; }

    return this === other || (
      this.oldFile.isEqual(other.oldFile) &&
      this.newFile.isEqual(other.newFile) &&
      this.patch.isEqual(other.patch)
    );
  }

        patch: this.getOldSymlink() ? this.getPatch().clone({status: 'deleted'}) : this.getPatch(),
        patch: this.getNewSymlink() ? this.getPatch().clone({status: 'added'}) : this.getPatch(),