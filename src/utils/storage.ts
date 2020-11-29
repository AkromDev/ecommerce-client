import {isArr} from './arrayUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AllAsyncKeys = 'searchHistory' | 'token';

class Storage {
  allAsyncKeys: AllAsyncKeys[] = ['searchHistory', 'token'];
  searchHistory: string = '';
  token: string = '';

  // Makes sure the Storage is in sync with the Async Storage. This should be first thing called as app loads.
  initializeStorage = (): Promise<undefined | string> => {
    console.log('Storage: initializeStorage.');

    return new Promise(async (resolve, reject) => {
      try {
        // Using await, since it makes sense to block while loading this stuff.
        const results = await AsyncStorage.multiGet(this.allAsyncKeys);

        for (let i = 0; i < this.allAsyncKeys.length; i++) {
          const key = this.allAsyncKeys[i];
          this[key] = results[i][1] || '';
        }
        resolve(this.token);
      } catch (error) {
        console.log(1, 'Storage: initializeStorage: CATCH: error:', error);
        reject();
      }
    });
  };

  //Setting to AsyncStorage regardless of its existence
  setToStorage = (
    ...args: [AllAsyncKeys, string] | [AllAsyncKeys[], string[]]
  ) => {
    const [keyToUpdate, valToUpdate] = args;

    return new Promise((resolve, reject) => {
      if (typeof keyToUpdate === 'string' && typeof valToUpdate === 'string') {
        AsyncStorage.setItem(keyToUpdate, '' + valToUpdate)
          .then(() => {
            this[keyToUpdate] = valToUpdate;
            console.log('Config: setToStorage: setItem: then: SUCCESS.');
            resolve();
          })
          .catch((error) => {
            console.log('Config: setToStorage: setItem: CATCH: error:', error);
            reject();
          });
      } else if (isArr(keyToUpdate) && isArr(valToUpdate)) {
        // Prep the data for the multiSet.
        let newArr = [];
        for (let i = 0; i < keyToUpdate.length; i++) {
          // newArr.push([keyToUpdate[i], '' + valToUpdate[i]]);
        }
        AsyncStorage.multiSet(newArr)
          .then(() => {
            console.log('Config: setToStorage: multiSet: then: SUCCESS.');
            // Once Async is finished, then set the Config values.
            for (let i = 0; i < keyToUpdate.length; i++) {
              const key = keyToUpdate[i];
              this[key] = valToUpdate[i];
            }
            resolve();
          })
          .catch((error) => {
            console.log('Config: setToStorage: multiSet: CATCH: error:', error);
            reject();
          });
      }
    });
  };
}
export default new Storage();
