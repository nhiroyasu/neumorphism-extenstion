/**
 * ストレージからデータ取得
 * @param {String} key キー
 * @returns {Promise<Any>}
 */
export function getState(key) {
    return Storage.local.get(key);
}

/**
 * ストレージに保存
 * @param {String} key キー
 * @param {Any} value バリュー
 * @returns {Promise<Any>}
 */
export function setState(key, value) {
    return Storage.local.set({
        key: value
    });
}

class Storage {
    static get local() {
        return browser.storage.local;
    }

    static get sync() {
        return browser.storage.sync;
    }
}