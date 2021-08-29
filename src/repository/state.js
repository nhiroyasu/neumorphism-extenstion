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
 * @param {Object} value 保存データ
 * @returns {Promise<Any>}
 */
export function setState(value) {
    return Storage.local.set(value);
}

class Storage {
    static get local() {
        return browser.storage.local;
    }

    static get sync() {
        return browser.storage.sync;
    }
}