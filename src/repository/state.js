import { SWITCH_STATE } from './static';

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

/**
 * 状態（ストレージ）の変化を監視
 * @param {(changes: Object, area: String) => Void} callback コールバック
 */
export function setObserverState(callback) {
    browser.storage.onChanged.addListener(callback);
}

class Storage {
    static get local() {
        return browser.storage.local;
    }

    static get sync() {
        return browser.storage.sync;
    }
}

/**
 * スイッチ状態を取得
 * @returns {Promise<Boolean>}
 */
export async function fetchSwitchState() {
    const state = await getState(SWITCH_STATE).catch(err => {});
    if (Object.keys(state).includes(SWITCH_STATE)) {
        return state[SWITCH_STATE];
    } else {
        return false;
    }
}
